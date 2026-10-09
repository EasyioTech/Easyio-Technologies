export const dynamic = 'force-dynamic';
import { db } from '@/lib/db';
import { projects } from '@/lib/db/schema';
import { desc } from 'drizzle-orm';
import { ProjectManager } from '@/modules/admin/components/ProjectManager';

export default async function ProjectsAdminPage() {
  let allProjects: any[] = [];
  try {
    allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
  } catch (error) {
    console.error("Database error in ProjectsAdminPage:", error);
  }

  return (
    <ProjectManager initialProjects={allProjects} />
  );
}
