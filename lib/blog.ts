import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const postsDir = path.join(process.cwd(), 'content/blog');
  try {
    const files = await fs.readdir(postsDir);
    const posts = await Promise.all(
      files
        .filter((file) => file.endsWith('.mdx'))
        .map(async (file) => {
          const slug = file.replace('.mdx', '');
          const content = await fs.readFile(path.join(postsDir, file), 'utf-8');
          return parseBlogPost(slug, content);
        })
    );
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const postsDir = path.join(process.cwd(), 'content/blog');
  try {
    const content = await fs.readFile(path.join(postsDir, `${slug}.mdx`), 'utf-8');
    return parseBlogPost(slug, content);
  } catch {
    return null;
  }
}

function parseBlogPost(slug: string, content: string): BlogPost {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  const frontmatter = match
    ? parseFrontmatter(match[1])
    : { title: slug, description: '', date: new Date().toISOString(), author: 'Easyio' };

  return {
    slug,
    title: frontmatter.title || slug,
    description: frontmatter.description || '',
    date: frontmatter.date || new Date().toISOString(),
    author: frontmatter.author || 'Easyio',
    content: content.replace(frontmatterRegex, '').trim(),
  };
}

function parseFrontmatter(frontmatter: string): Record<string, string> {
  const result: Record<string, string> = {};
  frontmatter.split('\n').forEach((line) => {
    const [key, ...value] = line.split(':');
    if (key && value.length > 0) {
      result[key.trim()] = value.join(':').trim().replace(/^["']|["']$/g, '');
    }
  });
  return result;
}
