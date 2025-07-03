'use client';

import Link from 'next/link';
import PortableContent from '@/components/PortableContent';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectDetails({ project }: { project: any }) {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-sm text-gray-400 mb-1">
          {project.company} &middot; {project.date}
        </p>
      </div>
      {project.body && <PortableContent content={project.body} />}
      <div className="flex flex-wrap gap-2 text-sm mb-4 mt-4">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="coco-lt px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/projects"
          className="text-terminal-link font-mono text-sm underline hover:text-terminal-hover"
        >
          ← Back to All Projects
        </Link>        
    </main>
  );
}