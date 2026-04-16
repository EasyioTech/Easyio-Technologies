import { getBlogPosts, getPostBySlug } from "@/lib/blog";
import PostLayout from "@/components/sections/blog/PostLayout";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import JsonLd from "@/components/shared/JsonLd";
import PageWrapper from "@/components/layout/PageWrapper";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Easyio Engineering`,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const mdxSource = await serialize(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Easyio Technologies"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Easyio Technologies"
    }
  };

  return (
    <PageWrapper>
      <JsonLd data={jsonLd} />
      <PostLayout post={post} mdxSource={mdxSource} />
    </PageWrapper>
  );
}
