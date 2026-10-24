import { getPublishedBlogPosts } from "@/modules/admin/actions/blog";
import { getBlogPosts } from "@/lib/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://easyio.tech";

  // Fetch both database posts and file-based MDX posts
  const dbPosts = await getPublishedBlogPosts();
  const filePosts = getBlogPosts();

  const postMap = new Map<string, { url: string; lastModified: string; changeFrequency: "weekly"; priority: number }>();

  // Add file-based posts first
  filePosts.forEach((post) => {
    postMap.set(post.slug, {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  // DB posts can override or add
  dbPosts.forEach((post) => {
    postMap.set(post.slug, {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.publishedAt
        ? new Date(post.publishedAt).toISOString()
        : post.updatedAt
        ? new Date(post.updatedAt).toISOString()
        : new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  const postUrls = Array.from(postMap.values());

  const routes = [
    "", 
    "/about", 
    "/blog", 
    "/careers", 
    "/contact",
    "/services",
    "/case-studies",
    "/pricing",
    "/changelog",
    "/llms",
    "/software-development-company-in-kashmir",
    "/software-development-company-in-sopore",
    "/web-development-company-in-srinagar",
    "/custom-erp-software-development-kashmir",
    "/ecommerce-website-development-srinagar",
    "/saas-application-development-kashmir",
    "/mobile-app-development-company-kashmir",
    "/enterprise-software-systems",
    "/cloud-infrastructure",
    "/ultra-fast-speed",
    "/enterprise-security"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...postUrls];
}
