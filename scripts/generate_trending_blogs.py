import os
import json
import time
import uuid
import sys
from datetime import datetime
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Force output to flush immediately
def log(msg):
    print(msg)
    sys.stdout.flush()

SYSTEM_PROMPT = """You are an expert content strategist and senior writer for Easyio Technologies. 
Your goal is to write authoritative, high-ranking technical articles.

RULES:
1. NEVER fabricate internal Easyio data.
2. Structure for Google Featured Snippets (concise definitions, tables).
3. Minimum 1200 words. Authority-driven.
4. Output ONLY valid JSON.

JSON Schema:
{
  "title": "H1",
  "seoTitle": "Title tag",
  "slug": "url-slug",
  "excerpt": "Meta hook",
  "seoDescription": "Meta desc",
  "focusKeyword": "Primary keyword",
  "keywords": "LSI keywords",
  "category": "Category",
  "content": "Full Markdown",
  "readingTime": "X min read"
}"""

topics = [
    "How Much Does Custom App Development Cost in 2026? (The Definitive Guide)",
    "7 Ways AI Can Reduce Your Business Operating Costs by 40%",
    "The CEO's Playbook for Digital Transformation: Beyond the Buzzwords",
    "Why Shopify Isn't Enough: When Your Business Needs Custom E-commerce",
    "How to Hire the Best Software Engineers: A Guide for Non-Tech Founders",
    "Is Your Legacy Software Killing Your Growth? 5 Warning Signs to Watch",
    "The Ultimate Checklist for Scaling Your SaaS from 0 to $1M ARR",
    "Cloud Computing Costs: How to Optimize Your AWS/Azure Bill in 2026",
    "Cybersecurity for Small Businesses: 5 Critical Steps to Prevent Data Theft",
    "Why Kashmir is the Next Silicon Valley: A Global Talent Perspective"
]

def build_toc(content):
    lines = content.split('\n')
    headings = [line for line in lines if line.startswith('## ') or line.startswith('### ')]
    toc = []
    for h in headings:
        level = 3 if h.startswith('### ') else 2
        text = h.strip('# ').strip()
        anchor = "".join(c if c.isalnum() else "-" for c in text.lower()).strip("-")
        toc.append({"level": level, "text": text, "anchor": anchor})
    return json.dumps(toc)

def generate_blog(topic):
    model_name = 'gemini-2.0-flash'
    log(f"Generating: {topic}...")
    
    retries = 3
    for i in range(retries):
        try:
            model = genai.GenerativeModel(model_name)
            response = model.generate_content([
                {"role": "user", "parts": [SYSTEM_PROMPT]},
                {"role": "user", "parts": [f"Write a deep-dive technical article about: {topic}"]}
            ])
            text = response.text.strip()
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            elif "```" in text:
                text = text.split("```")[1].split("```")[0].strip()
            
            return json.loads(text)
        except Exception as e:
            if "429" in str(e):
                wait_time = 70 * (i + 1)
                log(f"Rate limited. Waiting {wait_time}s...")
                time.sleep(wait_time)
            else:
                log(f"Error during gen: {e}")
                time.sleep(10)
    return None

def main():
    all_blogs = []
    if os.path.exists("trending_blogs.json"):
        try:
            with open("trending_blogs.json", "r", encoding="utf-8") as f:
                all_blogs = json.load(f)
        except: pass
    
    existing_slugs = [b['slug'] for b in all_blogs]

    for topic in topics:
        test_slug = topic.lower().replace(" ", "-").replace(":", "").replace(",", "")
        if any(test_slug in s for s in existing_slugs):
            log(f"Skipping {topic}, already exists.")
            continue
            
        blog = generate_blog(topic)
        if blog:
            blog_id = str(uuid.uuid4())
            toc = build_toc(blog['content'])
            
            sql_entry = {
                "id": blog_id,
                "title": blog['title'],
                "slug": blog['slug'],
                "excerpt": blog['excerpt'],
                "content": blog['content'],
                "author": "Easyio Research Intelligence",
                "category": blog['category'],
                "published": "true",
                "published_at": datetime.now().isoformat(),
                "focus_keyword": blog['focusKeyword'],
                "seo_title": blog['seoTitle'],
                "seo_description": blog['seoDescription'],
                "keywords": blog['keywords'],
                "reading_time": blog['readingTime'],
                "toc": toc
            }
            all_blogs.append(sql_entry)
            with open("trending_blogs.json", "w", encoding="utf-8") as f:
                json.dump(all_blogs, f, indent=2)
            log(f"Saved {topic}. Cooling down for 70s...")
            time.sleep(70)

    log(f"Generation cycle complete. Total blogs: {len(all_blogs)}")

if __name__ == "__main__":
    main()
