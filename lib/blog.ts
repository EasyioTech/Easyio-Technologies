import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  content: string;
  readingTime?: string;
  category: string;
  keywords?: string;
  image?: string;
  focusKeyword?: string;
  seoTitle?: string;
  seoDescription?: string;
  toc?: string;
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_PATH)) return [];

  const files = fs.readdirSync(BLOG_PATH);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const source = fs.readFileSync(path.join(BLOG_PATH, file), 'utf8');
      const { data, content } = matter(source);
      const slug = file.replace('.mdx', '');
      
      const wordsPerMinute = 200;
      const noOfWords = content.split(/\s/g).length;
      const minutes = noOfWords / wordsPerMinute;
      const readingTime = `${Math.ceil(minutes)} min read`;

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author || 'Easyio Team',
        category: data.category || 'Engineering',
        keywords: data.keywords || '',
        content,
        readingTime,
      };
    });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const source = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(source);
  
  const wordsPerMinute = 200;
  const noOfWords = content.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readingTime = `${Math.ceil(minutes)} min read`;

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || 'Easyio Team',
    category: data.category || 'Engineering',
    keywords: data.keywords || '',
    content,
    readingTime,
  };
}
