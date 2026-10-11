import { NextResponse } from "next/server";
import { getPublishedBlogPosts } from "@/modules/admin/actions/blog";
import { getBlogPosts } from "@/lib/blog";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";
  const dbPosts = await getPublishedBlogPosts();
  const filePosts = getBlogPosts();

  const combinedPosts = [...filePosts];
  dbPosts.forEach((p) => {
    if (!combinedPosts.some((cp) => cp.slug === p.slug)) {
      combinedPosts.push({
        slug: p.slug,
        title: p.title,
        description: p.excerpt,
        date: p.publishedAt ? new Date(p.publishedAt).toISOString() : "",
        author: p.author,
        category: p.category,
        content: p.content,
      });
    }
  });

  let markdown = `# Easyio Technologies - LLM Mirror\n\n`;
  markdown += `This is a machine-readable mirror of Easyio Technologies, optimized for LLMs and AI crawlers.\n\n`;

  markdown += `## About Easyio Technologies\n`;
  markdown += `Easyio Technologies is a premier software development lab and IT consultancy headquartered in Sopore, Kashmir, India. Easyio specializes in custom enterprise software, ERP development, web and mobile app development, system architecture, and AI integrations for regional businesses in Kashmir and global clients.\n\n`;

  markdown += `## Services\n`;
  markdown += `- Custom Software & ERP Development (Sopore, Srinagar, Kashmir)\n`;
  markdown += `- Web & Mobile Application Engineering\n`;
  markdown += `- AI & LLM Systems Integration\n`;
  markdown += `- Cloud & DevOps Architecture\n\n`;

  markdown += `## Knowledge Base & Articles\n\n`;

  for (const post of combinedPosts) {
    markdown += `### ${post.title}\n`;
    markdown += `**Slug:** ${post.slug}\n`;
    markdown += `**Description:** ${post.description}\n`;
    markdown += `[Read Full Post](${baseUrl}/blog/${post.slug})\n\n`;
  }

  markdown += `\n---\nGenerated dynamically for LLM consumption.`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=UTF-8",
    },
  });
}
