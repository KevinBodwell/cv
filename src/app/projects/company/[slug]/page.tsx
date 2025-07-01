import { notFound } from 'next/navigation';
import allProjects from '@/data/projects';
import ProjectGrid from '@/components/ProjectGrid';

// Required for static export mode with dynamic routes
export function generateStaticParams() {
  const uniqueSlugs = Array.from(
    new Set(allProjects.map((p) => p.companySlug))
  );

  return uniqueSlugs.map((slug) => ({ slug }));
}

export default async function CompanyProjectsPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // Filter for all projects matching the slug
  const companyProjects = allProjects.filter(
    (project) => project.companySlug === slug
  );

  if (companyProjects.length === 0) {
    notFound(); // Show 404 page if no match
  }

  // Get company name from the first matching project
  const companyName = companyProjects[0].company;

  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
        <h1 className="text-3xl font-bold">
          Projects from <span className="text-coco">{companyName}</span>
        </h1>
        <a
          href="/projects"
          className="mt-4 md:mt-0 px-4 py-2 bg-terminal-link text-black rounded-full text-sm font-mono hover:bg-terminal-hover transition"
        >
          ← All Projects
        </a>
      </div>

      <ProjectGrid projects={companyProjects} />
    </main>
  );
}
