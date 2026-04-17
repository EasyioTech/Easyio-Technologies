import { getBlogPost } from "@/modules/admin/actions/blog";
import { BlogForm } from "@/modules/admin/components/BlogForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { notFound, redirect } from "next/navigation";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({ params }: EditPageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  // Define the back action for the form
  const handleClose = async () => {
    'use server';
    redirect('/dashboard/blog');
  };

  return (
    <div className="max-w-6xl mx-auto w-full space-y-8">
      <PageHeader 
        title="Refine Archive" 
        description={`Editing: ${post.title}`}
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] p-4 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
        <BlogForm 
          isModal={false} 
          initialData={post} 
          onClose={handleClose as any} 
        />
      </div>
    </div>
  );
}
