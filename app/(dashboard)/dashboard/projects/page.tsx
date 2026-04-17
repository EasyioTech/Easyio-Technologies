export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';
import { projects } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { ProjectManager } from '@/modules/admin/components/ProjectManager';

export default async function ProjectsAdminPage() {
  const allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));

  return (
    <ProjectManager initialProjects={allProjects} />
  );
}
