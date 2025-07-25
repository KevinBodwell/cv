export const dynamic = 'force-static';
import Link from 'next/link';

type Job = {
  employer: string;
  location: string;
  title: string;
  dateRange: string;
  overview: string;
  bullets: string[];
  tags: string[];
  companySlug?: string;
};

const workHistory: Job[] = [
  {
    employer: 'Contract and Remote Roles',
    location: 'Clermont, FL',
    title: 'eCommerce Consultant and Full Stack Developer',
    dateRange: 'October 2017 – July 2025',
    overview:
      'eCommerce Consultant and Full Stack Developer',
    bullets: [
      'Led the development and optimization of eCommerce platforms for various consumer brands, specializing in Adobe Commerce (Magento), Shopify, and Node.js systems, which significantly enhanced user experience and increased sales.',
      'Focused on performance and stability, which resulted in faster load times and reduced downtime, ultimately boosting customer satisfaction and retention.',
      'Implemented automated processes that streamlined operations, helping to minimize manual work and improve overall efficiency for the development team.',
      'Operated with a high degree of autonomy in both contract and full-time positions, often taking on the role of sole developer or technical lead, which allowed for quick decision-making and agile project execution.',
    ],
    tags: ['Magento 2', 'PHP', 'MySQL', 'CI/CD', 'Power BI', 'Playwright', 'Shopify', 'Node.js', 'eCommerce'],
    companySlug: 'ripple-junction',
  },
  {
    employer: 'Western Dovetail, Inc.',
    location: 'Mare Island, CA',
    title: 'Manager, Manufacturing Operations & Software Developer',
    dateRange: 'September 2001 – October 2017',
    overview:
      'Jack of all trades in a small manufacturing company, responsible for everything from production to software development.',
    bullets: [
      'Built Magento eCommerce site for order custom sized products with dynamic pricing',
      'Oversaw IT, HR, purchasing, compliance, and production operations in evolving roles',
      'Created a proprietary ERP system and database-driven automation for CAD and quotation generation',
      'Built real-time drawing automation linking Excel spreadsheets to AutoCAD outputs',
      'Designed production machines and optimized manufacturing workflows',
      'Led disaster recovery efforts after the South Napa Earthquake; rebuilt infrastructure and ensured code compliance',
      'Engineered production machines, created schematics and blueprints using AutoCAD',
      'Managed OSHA, fire, air quality, and hazardous materials compliance and reporting',
      'Performed routine maintenance on shop machines.',
      'Performed electrical work up to 480volt 3-phase.',
      'Plumbing for pneumatics, water, and hydraulics.',
      'Administered Windows Hyper-V environments, internal networks, and VoIP systems',
      'Supervised accounting, sales, and production teams',
      'Managed company payroll, cash flow, and customer service operations',
      'Maintained job schedules and operations across departments',
      'Created first version of a web-based job tracking and scheduling system',
      'Implemented touchscreen workstations on shop floor to streamline communication',
      'Managed internal sales, quoting, and production documentation workflows',
    ],
    tags: ['Magento 2', 'C#', 'QuickBooks', 'AutoCAD', 'Excel', 'Hyper-V', 'Windows Server', 'CNC', 'OSHA Compliance', 'ERP', 'Industrial Automation', 'Manufacturing'],
    companySlug: 'western-dovetail',
  },
  {
    employer: 'Various Employers',
    location: 'San Francisco Bay Area, CA',
    title: 'Shop Manager / Firefighter / CDL Driver / Equipment Operator',
    dateRange: 'October 2017 – January 2020',
    overview:
      'I was brought in to fill in the gaps where the 3rd party developer could not deliver in a time manner.  We decided to migrate from Magentonto 1 to Magento 2 and do that on Magento Commerce Cloud Infrastructure.',
    bullets: [
      'Managed cabinet shop production: Dimension Unlimited',
      'Volunteer Firefighter: Valley of the Moon and City of Sonoma Fire Departments',
      'Class B CDL Driver: Friedman’s Home Improvement, Manzoni Trucking',
      'Parks Maintenance Worker: California State Parks Department',
    ],
    tags: ['MS Excel', 'Firefighting', 'Heavy Equipment', 'Commercial Driver', 'Parks Maintenance', 'Public Safety', 'Team Leadership'],
    companySlug: 'various-employers',
  },    
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
            {job.companySlug && (
                <div className="relative mt-4">
                  <Link
                    href={`/projects?company=${job.companySlug}`}
                    className="terminal"
                  >
                    ← See Projects
                  </Link>
                </div>
              )}
          </div>
        ))}
      </div>
    </main>
  );
}
