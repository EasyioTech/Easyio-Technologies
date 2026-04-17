import { getPublishedBlogPosts } from "@/modules/admin/actions/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPublishedBlogPosts();
  const baseUrl = "https://easyiotech.com";

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt).toISOString() : post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const routes = ["", "/about", "/blog", "/careers", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes, ...postUrls];
}
