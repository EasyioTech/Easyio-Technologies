'use client';

import { BlogForm } from "@/modules/admin/components/BlogForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { useRouter } from "next/navigation";

export default function NewBlogPostPage() {
  const router = useRouter();

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <PageHeader 
        title="Compose Story" 
        description="Share your technical insights with the engineering community."
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
        <BlogForm 
          isModal={false} 
          onClose={() => router.push('/dashboard/blog')} 
        />
      </div>
    </div>
  );
}
