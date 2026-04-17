import json
import base64

def escape_sql(text):
    if text is None:
        return 'NULL'
    return "'" + str(text).replace("'", "''") + "'"

def main():
    try:
        with open("trending_blogs.json", "r", encoding="utf-8") as f:
            blogs = json.load(f)
    except FileNotFoundError:
        print("trending_blogs.json not found yet.")
        return

    sql_lines = []
    # Clean existing trending blogs if any (optional, but good for seeding)
    # sql_lines.append("DELETE FROM blog_posts WHERE author = 'Easyio Research Intelligence';")

    for b in blogs:
        query = f"""
INSERT INTO blog_posts (
    id, title, slug, excerpt, content, author, category, published, 
    published_at, focus_keyword, seo_title, seo_description, keywords, reading_time, toc
) VALUES (
    {escape_sql(b['id'])}, 
    {escape_sql(b['title'])}, 
    {escape_sql(b['slug'])}, 
    {escape_sql(b['excerpt'])}, 
    {escape_sql(b['content'])}, 
    {escape_sql(b['author'])}, 
    {escape_sql(b['category'])}, 
    'true', 
    NOW(), 
    {escape_sql(b['focus_keyword'])}, 
    {escape_sql(b['seo_title'])}, 
    {escape_sql(b['seo_description'])}, 
    {escape_sql(b['keywords'])}, 
    {escape_sql(b['reading_time'])}, 
    {escape_sql(b['toc'])}
) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    excerpt = EXCLUDED.excerpt,
    content = EXCLUDED.content,
    updated_at = NOW();
"""
        sql_lines.append(query)

    with open("seed_trending.sql", "w", encoding="utf-8") as f:
        f.write("\n".join(sql_lines))
    print(f"Generated seed_trending.sql with {len(blogs)} blogs.")

if __name__ == "__main__":
    main()
