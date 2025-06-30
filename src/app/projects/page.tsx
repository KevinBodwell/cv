// src/app/projects/page.tsx
export const dynamic = 'force-static';

const allProjects = [
  {
    title: 'Magento Site Optimization',
    description:
      'Improved load speed by 40%, implemented CI/CD, and upgraded infrastructure for Ripple Junction’s ecommerce platform.',
    tags: ['Magento 2', 'Performance', 'CI/CD', 'New Relic'],
    href: '/projects/magento-optimization',
  },
  {
    title: 'Parclore Adventure Game',
    description:
      'Hybrid GPS + trivia game designed for physical parks, powered by AI, Redis, and Next.js with real-time scoring.',
    tags: ['Next.js', 'Redis', 'Game Design', 'AI'],
    href: '/projects/parclore',
  },
  {
    title: 'Custom Fastly ACL Tool',
    description:
      'Built a secure web UI to update Magento admin IP ACLs via Fastly API using time-based tokens and API keys.',
    tags: ['Fastly', 'Security', 'API Design'],
    href: '/projects/fastly-acl-tool',
  },
  {
    title: 'Galactic Scribble Ecommerce',
    description:
      'Launched a print-on-demand storefront using Shopify and custom integrations with Midjourney mockups and Instagram ads.',
    tags: ['Shopify', 'Print on Demand', 'Branding'],
    href: '/projects/galactic-scribble',
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">All Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {allProjects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="block bg-terminal-dk border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="coco-lt px-2 py-1 rounded-full"
                >
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
    </main>
  );
}
