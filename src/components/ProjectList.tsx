'use client';

import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectList({ projects }: { projects: any[] }) {
  if (projects.length === 0) {
    return <p className="text-center text-gray-500">No projects found.</p>;
  }

  return (
    <main className="max-w-5xl mx-auto py-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 px-4">
        {projects.map((project) => (
            <div
            key={project.slug}
            className="block bg-terminal-dk border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2">
                {project.company} &middot; {project.date}
            </p>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tags.map((tag: string) => (
                <span
                    key={tag}
                    className="coco-lt px-2 py-1 rounded-full"
                >
                    {tag}
                </span>
                ))}
            </div>
            <Link
                href={`/projects?slug=${project.slug}`}
                className="terminal terminal-hover inline-block font-medium"
                prefetch={true}
            >
                Learn more →
            </Link>
            </div>
        ))}
            <div className="text-center sm:col-span-2 mt-8">
                <Link
                href="/projects"
                className="px-6 py-3 rounded-full hover:bg-blue-700 transition coco"
                >
                See All Projects
                </Link>
            </div>
        </div>
    </main>
  );
}
