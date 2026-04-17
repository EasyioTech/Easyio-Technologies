'use client';

import { TestimonialForm } from "@/modules/admin/components/TestimonialForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { useRouter } from "next/navigation";

export default function NewTestimonyPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Record Testimony" 
        description="Capture the authentic feedback of your valued partners."
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <TestimonialForm 
          isModal={false} 
          onClose={() => router.push('/dashboard/testimonials')} 
        />
      </div>
    </div>
  );
}
