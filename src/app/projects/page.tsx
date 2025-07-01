export const dynamic = 'force-static';
import ProjectGrid from '@/components/ProjectGrid';
import allProjects from '@/data/projects';

export default function ProjectsPage({ searchParams }: { searchParams?: { company?: string } }) {
  const companyFilter = searchParams?.company;

  const filtered = companyFilter
    ? allProjects.filter((p) => p.company === companyFilter)
    : allProjects;

  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">All Projects</h1>
      <ProjectGrid projects={filtered} />
    </main>
  );
}
