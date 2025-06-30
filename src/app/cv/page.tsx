// src/app/cv/page.tsx
export const dynamic = 'force-static';

type Job = {
  employer: string;
  location: string;
  title: string;
  dateRange: string;
  overview: string;
  bullets: string[];
  tags: string[];
};

const workHistory: Job[] = [
  {
    employer: 'Ripple Junction',
    location: 'Remote / Ohio',
    title: 'Senior Magento Developer',
    dateRange: '2022 – Present',
    overview:
      'Lead developer responsible for maintaining and evolving the ecommerce stack for both DTC and wholesale platforms.',
    bullets: [
      'Implemented custom Magento modules for B2B workflows and retail sync',
      'Integrated analytics and real-time reporting pipelines using Power BI and JSON APIs',
      'Optimized front-end and server performance, reducing load times by 40%',
      'Spearheaded security improvements, CI/CD pipelines, and automated testing',
    ],
    tags: ['Magento 2', 'PHP', 'MySQL', 'CI/CD', 'Power BI', 'Playwright'],
  },
  {
    employer: 'Elemental Works Ltd.',
    location: 'Orlando, FL',
    title: 'Founder / Full-Stack Engineer',
    dateRange: '2023 – Present',
    overview:
      'Started a boutique apparel company focused on original storytelling and adventure themes with crossover into software and automation.',
    bullets: [
      'Built a Shopify storefront with custom Liquid and JavaScript extensions',
      'Developed a print-on-demand pipeline with Midjourney mockups and Instagram ad testing',
      'Engineered a theme park challenge game (Parclore) using Next.js and Redis',
    ],
    tags: ['Shopify', 'Next.js', 'Redis', 'Branding', 'Tailwind CSS'],
  },
  // Add more entries as needed
];

export default function CVPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Curriculum Vitae</h1>
      <div className="space-y-8">
        {workHistory.map((job) => (
          <div
            key={`${job.employer}-${job.title}`}
            className="bg-terminal-dk border border-gray-200 rounded-xl shadow p-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-300">
                  {job.employer} — {job.location}
                </p>
              </div>
              <p className="text-gray-500 mt-2 md:mt-0">{job.dateRange}</p>
            </div>
            <p className="text-gray-300 mb-3">{job.overview}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-400 mb-3">
              {job.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 text-sm mt-4">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="coco-lt px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
