import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';
import { rateLimit } from '@/lib/rate-limit';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Model priority chain — on 503/overload, automatically falls back to next
const MODEL_CHAIN = [
  'gemini-2.5-flash',
  'gemini-2.5-pro',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
];

const requestSchema = z.object({
  command: z.string().min(10, 'Command too short').max(500, 'Command too long'),
  provider: z.enum(['auto', 'gemini', 'groq', 'sambanova', 'cerebras']).optional().default('auto'),
});

function buildToc(content: string): { level: number; text: string; anchor: string }[] {
  const lines = content.split('\n');
  const headings = lines.filter(line => /^#{2,3} /.test(line));
  return headings.map(line => {
    const level = line.startsWith('### ') ? 3 : 2;
    const text = line.replace(/^#{2,3} /, '').trim();
    const anchor = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return { level, text, anchor };
  });
}

function computeReadingTime(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.ceil(words / 200)} min read`;
}

// ─────────────────────────────────────────────────────────────────────────────
// SYSTEM PROMPT
// Goal: rank #1 for every topic — news, technical guides, trend pieces.
// Easyio is the publisher, not the subject. Never fabricate internal data.
// ─────────────────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are an expert content strategist and senior writer. Your job is to write articles that rank #1 on Google — whether the topic is breaking tech news, an in-depth engineering guide, or an industry trend piece. You write for a blog run by Easyio Technologies (a software firm in Kashmir, India), but every article must stand on its own merit as an authoritative, trustworthy resource. The article is NEVER about Easyio.

━━━ ABSOLUTE CONTENT RULES ━━━
1. NEVER invent Easyio clients, internal projects, or fabricated performance numbers. You have no access to internal company data.
2. ALL facts, statistics, quotes, and benchmarks must be real and verifiable. Source them from your web search results — prioritize official announcements, peer-reviewed research, GitHub repos, and reputable outlets (Reuters, TechCrunch, Ars Technica, official docs).
3. If a fact is uncertain, use hedged language ("reports suggest…", "according to…"). Never guess or fabricate.
4. Easyio appears ONCE, as a byline at the very end of the article only: "Published by Easyio Technologies." Nothing more.

━━━ STEP 1 — CLASSIFY THE TOPIC ━━━
Before writing, decide which content type fits best:
  A) NEWS — a specific recent event, product launch, incident, or announcement
  B) TECHNICAL GUIDE — a how-to, deep-dive, architecture walkthrough, or concept explanation
  C) TREND / OPINION — industry analysis, comparison, prediction, or market overview

Then apply the matching structure below.

─── TYPE A: NEWS ARTICLE ───
• Lead paragraph (inverted pyramid): Who, What, When, Where, Why — answered in the first 60 words.
• Use verified quotes from official sources or named spokespeople only. Never fabricate quotes.
• Include a "Key Facts" box or timeline near the top.
• Add a "What This Means" section — analysis of the real-world impact for developers or businesses.
• End with: what to watch for next, official links, or verified next steps.
• Keep paragraphs to 2-3 sentences max. News readers skim.

─── TYPE B: TECHNICAL GUIDE ───
• Open with a real incident, surprising verified stat, or a bold technical claim. Never "In today's world…"
• "Quick Definition" callout box (45-55 words) near the top — structured for Google Featured Snippet.
• Step-by-step instructions or architecture walkthrough with inline code examples.
• A real comparison table (tools / versions / benchmarks / tradeoffs) with verifiable data.
• "Common Mistakes" or "Gotchas" section — real pitfalls engineers encounter.
• End with "## Frequently Asked Questions" — 4-6 questions with accurate, concise answers.

─── TYPE C: TREND / OPINION ───
• Open with a striking market stat or paradigm shift pulled from your search results.
• State a clear thesis in the first paragraph — take a real position, don't sit on the fence.
• Support with data: market reports, adoption numbers, survey results (all real and sourced).
• Include expert voices: name real researchers, executives, or practitioners (verified quotes only).
• "Implications" section: what does this actually mean in practice for builders or businesses?
• Steel-man the counter-argument in one paragraph, then rebut it with evidence.
• End with a forward-looking statement grounded in current verifiable data.

━━━ UNIVERSAL SEO RULES (all content types) ━━━

KEYWORD STRATEGY:
• Focus keyword: in the H1 title, within the first 100 words, and naturally 4-6x total. Never keyword-stuffed.
• LSI / semantic keywords: weave 12-15 closely related terms throughout the body — not in a list, woven into sentences naturally.
• Long-tail phrases: target at least 2-3 specific question-form phrases people actually search (e.g. "how to…", "why does…", "what is the difference between…").

TITLE & META:
• H1 title: focus keyword front-loaded. Promises a specific benefit or answer. Max 65 characters.
• SEO title (browser <title> tag): max 60 characters. High click-through potential. Slightly different from H1.
• Meta description: 140-160 characters. Directly answers the search intent. Ends with a soft CTA ("Learn…", "See how…", "Find out…").

CONTENT SIGNALS:
• Article length: 600-900 words. High-density, authoritative, and focused. Stay within this range to ensure full completion without truncation.
• H2 heading every 200-250 words minimum. H3 for sub-sections. Never skip a heading level.
• Internal linking: include 2-3 natural phrases formatted as [anchor text](internal-link-placeholder) — the CMS will replace the URLs.
• External authority links: 2-3 real links to high-authority sources (official docs, GitHub, academic papers, MDN) — use real URLs from your search results.

E-E-A-T SIGNALS (Experience, Expertise, Authoritativeness, Trust):
• Cite sources by name: "According to the 2024 Stack Overflow Developer Survey…"
• Include specific version numbers, release dates, and tool names where relevant.
• Acknowledge open debates or limitations — this signals genuine expertise, not marketing copy.
• First-person plural ("we") is acceptable sparingly for practitioner perspective. Never for Easyio-specific claims.

━━━ FORMATTING STANDARDS ━━━
• Headings: ## H2 and ### H3 only. No H4 or deeper.
• Bold (**term**) for key terms on first use only. Inline \`code\` for all technical tokens, commands, filenames, package names.
• Bullet lists for 3+ parallel items. Numbered lists for sequential steps only.
• Blockquote (>) for verified external quotes with attribution.
• Comparison table for any evaluation of 3+ options across 3+ attributes.
• BANNED phrases — never use: "In today's fast-paced world", "In conclusion", "As we can see", "It's worth noting", "It goes without saying", "Needless to say", "In the ever-evolving landscape". These are instant credibility killers.

━━━ CRITICAL OUTPUT FORMAT ━━━
Return ONLY a raw JSON object. No markdown fences (\`\`\`), no preamble, no trailing explanation.
Escape all newlines as \\n and all internal double quotes as \\".

{
  "title": "H1 — focus keyword front-loaded, specific, promises a clear benefit",
  "seoTitle": "Max 60 chars — for the browser <title> tag, high-CTR phrasing",
  "slug": "focus-keyword-url-slug-no-stopwords",
  "excerpt": "115-145 char hook that makes someone stop scrolling and click",
  "seoDescription": "140-160 char meta description — answers the search intent, ends with a CTA",
  "focusKeyword": "The exact primary search phrase this article targets",
  "lsiKeywords": "12-15 comma-separated semantic and related terms woven into the article",
  "contentType": "news | technical-guide | trend-opinion",
  "category": "e.g. AI, DevOps, Cybersecurity, Web Performance, Cloud Infrastructure, Databases, Open Source",
  "imageAlt": "Description of the ideal hero image for this article (for the editor to source)",
  "content": "FULL article in Markdown. Newlines as \\n. Internal double quotes as \\".",
  "readingTime": "X min read",
  "sourcesUsed": ["array of real source names or URLs cited in the article"]
}`;

/** Returns true if the error is a transient overload/rate-limit (worth retrying or falling back) */
function isRetryable(error: any): boolean {
  const msg = (error?.message || '').toLowerCase();
  return (
    msg.includes('503') ||
    msg.includes('service unavailable') ||
    msg.includes('overloaded') ||
    msg.includes('high demand') ||
    msg.includes('429') ||
    msg.includes('too many requests') ||
    msg.includes('quota exceeded') ||
    msg.includes('resource exhausted') ||
    msg.includes('limit exceeded') ||
    msg.includes('quota')
  );
}

/** Sleep helper */
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

/**
 * Grounded generation — tries each model in MODEL_CHAIN until one succeeds.
 * Uses Google Search grounding (no JSON mime type — conflicts with grounding).
 * JSON is extracted manually from the plain-text response.
 */
async function generateWithGrounding(command: string) {
  const userText = `TOPIC: ${command}

Search the web for current, accurate information about this topic. Use real statistics, recent announcements, official release notes, and benchmark data from your search results.

First, classify the topic as: news, technical-guide, or trend-opinion.
Then write the full article following the matching structure.
Return only the raw JSON object — no fences, no preamble.`;

  let lastError: any;
  for (const modelId of MODEL_CHAIN) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelId,
        tools: [{ googleSearch: {} }] as any,
      });
      const result = await model.generateContent([
        { text: SYSTEM_PROMPT },
        { text: userText },
      ]);
      const text = result.response.text();
      const searches = result.response.candidates?.[0]?.groundingMetadata?.webSearchQueries || [];
      console.log(`[AI Blog] Grounded OK with model: ${modelId}. Queries: ${searches.join(', ')}`);
      return { text, searches, grounded: true, modelUsed: modelId };
    } catch (err: any) {
      lastError = err;
      if (isRetryable(err)) {
        console.warn(`[AI Blog] ${modelId} overloaded for grounding, trying next model...`);
        await sleep(1500); // brief pause before next attempt
        continue;
      }
      // Non-retryable error (auth, bad request, etc.) — break immediately
      throw err;
    }
  }
  throw lastError; // all models failed
}

/**
 * Standard generation — no grounding, native JSON mode, model fallback chain.
 * Used when grounding fails (paid tier required) or as the primary fallback.
 */
async function generateWithoutGrounding(command: string) {
  const userText = `TOPIC: ${command}

Draw on your training knowledge about this topic. Use real industry facts, real tools, and real benchmarks you know about. Do NOT invent company-specific case studies.

First, classify the topic as: news, technical-guide, or trend-opinion.
Then write the full article following the matching structure.
Return only the raw JSON object — no fences, no preamble.`;

  let lastError: any;
  for (const modelId of MODEL_CHAIN) {
    try {
      const model = genAI.getGenerativeModel({
        model: modelId,
        generationConfig: { responseMimeType: 'application/json' },
      });
      const result = await model.generateContent([
        { text: SYSTEM_PROMPT },
        { text: userText },
      ]);
      const text = result.response.text();
      console.log(`[AI Blog] Standard OK with model: ${modelId}`);
      return { text, searches: [], grounded: false, modelUsed: modelId };
    } catch (err: any) {
      lastError = err;
      if (isRetryable(err)) {
        console.warn(`[AI Blog] ${modelId} overloaded for standard gen, trying next model...`);
        await sleep(1500);
        continue;
      }
      throw err;
    }
  }
  throw lastError; // all models failed
}

function extractJson(text: string) {
  try {
    return JSON.parse(text);
  } catch { /* continue */ }

  const stripped = text
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```\s*$/, '')
    .trim();
  try {
    return JSON.parse(stripped);
  } catch { /* continue */ }

  const match = stripped.match(/(\{[\s\S]*\})/);
  if (match) {
    try {
      return JSON.parse(match[1]);
    } catch { /* continue */ }
  }

  throw new Error('AI returned invalid JSON. Cannot parse the response.');
}

async function generateWithGroq(command: string) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('Groq not configured');

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `TOPIC: ${command}\nReturn only the raw JSON object.` }
      ],
      response_format: { type: 'json_object' }
    })
  });

  const data = await response.json();
  return { 
    text: data.choices[0].message.content, 
    searches: [], 
    grounded: false, 
    modelUsed: 'groq/llama-3.3-70b' 
  };
}

async function generateWithSambaNova(command: string) {
  const apiKey = process.env.SAMBANOVA_API_KEY;
  if (!apiKey) throw new Error('SambaNova not configured');

  const response = await fetch('https://api.sambanova.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'Meta-Llama-3.3-70B-Instruct',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `TOPIC: ${command}\nReturn only the raw JSON object.` }
      ],
      response_format: { type: 'json_object' }
    })
  });

  const data = await response.json();
  return { 
    text: data.choices[0].message.content, 
    searches: [], 
    grounded: false, 
    modelUsed: 'sambanova/llama-3.1-70b' 
  };
}

async function generateWithCerebras(command: string) {
  const apiKey = process.env.CEREBRAS_API_KEY;
  if (!apiKey) throw new Error('Cerebras not configured');

  const response = await fetch('https://api.cerebras.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'llama3.1-8b',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: `TOPIC: ${command}\nReturn only the raw JSON object.` }
      ],
      response_format: { type: 'json_object' }
    })
  });

  const data = await response.json();
  return { 
    text: data.choices[0].message.content, 
    searches: [], 
    grounded: false, 
    modelUsed: 'cerebras/llama-3.1-70b' 
  };
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    const { success } = await rateLimit(`generate-blog-${ip}`, 20);
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Try again in 60 minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { command, provider } = requestSchema.parse(body);

    let result: any;
    const errors: string[] = [];

    // EXECUTION MATRIX: Targeted or Autonomous
    const tryGemini = async () => {
      try {
        return await generateWithGrounding(command);
      } catch (e: any) {
        errors.push(`Gemini Grounding: ${e.message}`);
        return await generateWithoutGrounding(command);
      }
    };

    try {
      if (provider === 'gemini') {
        result = await tryGemini();
      } else if (provider === 'groq') {
        result = await generateWithGroq(command);
      } else if (provider === 'sambanova') {
        result = await generateWithSambaNova(command);
      } else if (provider === 'cerebras') {
        result = await generateWithCerebras(command);
      } else {
        // AUTONOMOUS FALLBACK CHAIN (The Original Logic)
        try {
          result = await tryGemini();
        } catch (e: any) {
          errors.push(`Gemini Suite: ${e.message}`);
          try {
            result = await generateWithGroq(command);
          } catch (e3: any) {
            errors.push(`Groq: ${e3.message}`);
            try {
              result = await generateWithSambaNova(command);
            } catch (e4: any) {
              errors.push(`SambaNova: ${e4.message}`);
              result = await generateWithCerebras(command);
            }
          }
        }
      }
    } catch (finalError: any) {
      console.error('[AI Blog] All targeted/fallback attempts failed:', errors);
      throw new Error(`Generation failed. ${errors.join(' | ')}`);
    }

    let parsed: any;
    try {
      parsed = extractJson(result.text);
    } catch (parseError: any) {
      console.error('[AI Blog] JSON parse failed. Raw response:', result.text.slice(0, 500));
      throw new Error(`AI model (${result.modelUsed}) returned malformed output.`);
    }

    const required = ['title', 'slug', 'content', 'seoTitle', 'excerpt'];
    for (const field of required) {
      if (!parsed[field]) {
        throw new Error(`AI response from ${result.modelUsed} is missing required field: "${field}".`);
      }
    }

    const toc = buildToc(parsed.content);
    const readingTime = parsed.readingTime || computeReadingTime(parsed.content);

    return NextResponse.json({
      success: true,
      data: {
        title: parsed.title,
        seoTitle: parsed.seoTitle,
        slug: parsed.slug,
        excerpt: parsed.excerpt,
        seoDescription: parsed.seoDescription,
        focusKeyword: parsed.focusKeyword,
        lsiKeywords: parsed.lsiKeywords || parsed.keywords || '',
        contentType: parsed.contentType || 'technical-guide',
        category: parsed.category,
        imageAlt: parsed.imageAlt || '',
        content: parsed.content,
        readingTime,
        toc: JSON.stringify(toc),
        sourcesUsed: parsed.sourcesUsed || [],
      },
      meta: {
        groundingEnabled: result.grounded,
        searchQueriesUsed: result.searches,
        modelUsed: result.modelUsed,
      },
    });

  } catch (error: any) {
    console.error('[AI Blog] Fatal error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to generate blog post' },
      { status: 400 }
    );
  }
}