'use client';

import { ProjectForm } from "@/modules/admin/components/ProjectForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { useRouter } from "next/navigation";

export default function NewProjectPage() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Register Project" 
        description="Launch a new technical exhibit into the Easyio archive."
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <ProjectForm 
          isModal={false} 
          onClose={() => router.push('/dashboard/projects')} 
        />
      </div>
    </div>
  );
}
