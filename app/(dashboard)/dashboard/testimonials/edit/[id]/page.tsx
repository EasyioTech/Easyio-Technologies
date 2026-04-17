import { getTestimonial } from "@/modules/admin/actions/testimonials";
import { TestimonialForm } from "@/modules/admin/components/TestimonialForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { notFound, redirect } from "next/navigation";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditTestimonyPage({ params }: EditPageProps) {
  const { id } = await params;
  const testimonial = await getTestimonial(id);

  if (!testimonial) {
    notFound();
  }

  // Define the back action for the form
  const handleClose = async () => {
    'use server';
    redirect('/dashboard/testimonials');
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Refine Testimony" 
        description={`Editing feedback from: ${testimonial.name}`}
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <TestimonialForm 
          isModal={false} 
          initialData={testimonial} 
          onClose={handleClose as any} 
        />
      </div>
    </div>
  );
}
