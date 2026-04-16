import { getBlogPosts } from "@/lib/blog";
import BlogIndex from "@/components/sections/blog/BlogIndex";
import PageWrapper from "@/components/layout/PageWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog | Easyio Technologies",
  description: "Technical deep dives into high-performance software architecture, ERP systems, and AI infrastructure.",
};

export default function BlogListingPage() {
  const posts = getBlogPosts();

  return (
    <PageWrapper>
      <BlogIndex posts={posts} />
    </PageWrapper>
  );
}
