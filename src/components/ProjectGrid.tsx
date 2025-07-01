'use client'; // Only if you later add interactivity (safe to omit for now)

import { Project } from '@/data/projects';

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <a
          key={project.title}
          href={project.href}
          className="block bg-terminal-dk border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-2">
            {project.company} &middot; {project.date}
          </p>
          <p className="text-gray-300 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 text-sm">
            {project.tags.map((tag) => (
              <span key={tag} className="coco-lt px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="terminal terminal-hover mt-4 inline-block font-medium">
            Learn more →
          </p>
        </a>
      ))}
    </div>
  );
}
