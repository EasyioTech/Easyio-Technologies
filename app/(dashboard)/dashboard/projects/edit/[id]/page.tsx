import { getProject } from "@/modules/admin/actions/projects";
import { ProjectForm } from "@/modules/admin/components/ProjectForm";
import { PageHeader } from "@/modules/admin/components/PageHeader";
import { notFound, redirect } from "next/navigation";

interface EditPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: EditPageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  // Define the back action for the form
  const handleClose = async () => {
    'use server';
    redirect('/dashboard/projects');
  };

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Update Archive" 
        description={`Modifying specifications for: ${project.title}`}
      />
      
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <ProjectForm 
          isModal={false} 
          initialData={project} 
          onClose={handleClose as any} 
        />
      </div>
    </div>
  );
}
