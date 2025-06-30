// src/app/projects/page.tsx
export const dynamic = 'force-static';

const allProjects = [
    {
    title: 'Shopify Site Migration',
    company: 'Ripple Junction',
    date: 'April 2025 - May 2025',
    description: 'Migrated Direct to Consumer (DTC) site from Magento 2 to Shopify, improving performance and reducing costs in under 30 days.',
    tags: ['Shopify', 'Migration', 'Performance'],
    href: '/projects/shopify-site-migration',
  },
  {
    title: 'Magento 2 Site Rescue',
    company: 'Ripple Junction',
    date: 'March 2023 - July 2023',
    description: 'Rescue a Magento 2 site from a 3rd party agency relationship gone south.  Migrated to Adobe Commerce Cloud, improved performance, and ensured zero unplanned downtime.',
    tags: ['Magento 2', 'Performance', 'New Relic'],
    href: '/projects/magento-site-rescue',
  },
  {
    title: 'Pumpkin Eyes',
    company: 'Personal Project',
    date: 'September 2024 - Present',
    description: 'Building a pumpkin with animatronic eyes that follow you around the room.  The project is a fun exploration of hardware and software integration.',
    tags: ['Animatronics', 'Hardware', 'Software', 'Raspberry Pi', 'Ardiono', 'OpenCV', 'Computer Vision', 'Object recognition'],
    href: '/projects/pumpkin-eyes',
  },
  {
    title: 'Magic Box',
    company: 'Western Dovetail',
    date: 'July 2009',
    description: 'The magic box is a spectacle of wooden boxes that rise from within themselves to show all the different joinery we could do.  The project was a collaboration with the owner of Western Dovetail.',
    tags: ['Hardware', 'woodworking', 'Dovetail Joinery', 'Zip Chain Actuator', 'Relay Logic Control'],
    href: '/projects/wd-magic-box',
  }  
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
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {project.company} &middot; {project.date}
              </p>
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
