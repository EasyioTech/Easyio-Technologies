import { NextResponse } from "next/server";
import { getPublishedBlogPosts } from "@/modules/admin/actions/blog";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyiotech.com";
  const posts = await getPublishedBlogPosts();

  let markdown = `# Easyio Technologies - LLM Mirror\n\n`;
  markdown += `This is a machine-readable mirror of Easyio Technologies, optimized for LLMs and AI crawlers.\n\n`;

  markdown += `## About Easyio Technologies\n`;
  markdown += `Easyio Technologies is a frontier software lab in Kashmir, India, specializing in high-performance web apps, mobile apps, and system architecture (LSM).\n\n`;

  markdown += `## Services\n`;
  markdown += `- Custom Software Development\n`;
  markdown += `- System Architecture & Design\n`;
  markdown += `- AI & LLM Integration\n`;
  markdown += `- Cloud & DevOps Infrastructure\n\n`;

  markdown += `## Blog Posts\n\n`;

  for (const post of posts) {
    markdown += `### ${post.title}\n`;
    markdown += `**Slug:** ${post.slug}\n`;
    markdown += `**Description:** ${post.excerpt}\n`;
    markdown += `[Read Full Post](${baseUrl}/blog/${post.slug})\n\n`;
    // If we had the content in the action, we could include snippets here
    // For now, we'll keep it as a directory
  }

  markdown += `\n---\nGenerated dynamically for LLM consumption.`;

  return new NextResponse(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=UTF-8",
    },
  });
}
