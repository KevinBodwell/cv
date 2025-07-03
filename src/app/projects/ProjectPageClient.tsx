'use client';

import { useSearchParams } from 'next/navigation';
import { useProjects } from '@/hooks/useProjects';
import ProjectList from '@/components/ProjectList';
import ProjectDetails from '@/components/ProjectDetails';

export default function ProjectPageClient() {
  const { projects, loading } = useProjects();
  const searchParams = useSearchParams();

  const slug = searchParams.get('slug');
  const company = searchParams.get('company');

  if (loading) return <p>Loading projects…</p>;

  if (slug) {
    const project = projects.find((p) => p.slug === slug);
    return project ? <ProjectDetails project={project} /> : <p>Not found</p>;
  }

  const filtered = company
    ? projects.filter((p) => p.companySlug === company)
    : projects;

  return <ProjectList projects={filtered} />;
}
