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
    dateRange: 'March 2023 – Present',
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
    employer: 'Palmetto State Armory',
    location: 'Remote / South Carolina',
    title: 'Magento Developer & Software Engineer ',
    dateRange: 'April 2021 – March 2023',
    overview:
      'Started a boutique apparel company focused on original storytelling and adventure themes with crossover into software and automation.',
    bullets: [
      'Collaborated with a cross-functional team to enhance Magento 2 platform stability and scalability',
      'Optimized in-house automation tools for enhanced developer experience',
      'Debugged 3rd party modules and core Magento systems; improved internal documentation',
      'Wrote QA test suites using Puppeteer, Selenium, and TypeScript',
    ],
    tags: ['Magento 2', 'Redis', 'RabbitMQ', 'xDebug', 'TypeScript', 'Docker', 'NetSuite ERP'],
  },
  {
    employer: 'Bandai Namco Collectibles',
    location: 'Hybrid / Aneheim, CA',
    title: 'Magento Architect & Interim IT Manager',
    dateRange: 'January 2020 – April 2021',
    overview:
      'Brought in to help with communication with 3rd party vendors, turned into separating from 3rd party and bringing all development in house.',
    bullets: [
      'Separated Magento infrastructure from external vendors and internalized development',
      'Integrated Acumatica ERP into Magento via C# APIs',
      'Stepped in as IT Manager post-emergency, overseeing servers, networks, and policy alignment with global IT',
      'Participated in J-SOX compliance preparation',
    ],
    tags: ['Magento 2', 'Redis', 'RabbitMQ', 'xDebug', 'TypeScript', 'Docker', 'Acumatica ERP', 'C#'],
  },
  {
    employer: 'ABV Group / NuMe USA',
    location: 'Chatsworth, CA',
    title: 'Magento Architect & IT Manager',
    dateRange: 'October 2017 – January 2020',
    overview:
      'I was brought in to fill in the gaps where the 3rd party developer could not deliver in a time manner.  We decided to migrate from Magentonto 1 to Magento 2 and do that on Magento Commerce Cloud Infrastructure.',
    bullets: [
      'Migrated Magento 1 to Magento 2; developed custom sales modules and theme',
      'Built integrations with QuickBooks Desktop, ERP, CRM, and fraud detection systems',
      'Maintained EDI connections, third-party module compliance, and cloud deployment processes',
      'Served as technical point-of-contact across all departments',
    ],
    tags: ['Magento 2', 'Redis', 'RabbitMQ', 'xDebug', 'QuickBooks'],
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
      'Built barcode-driven CNC systems and designed custom mechanical/electrical tooling for shop equipment',
      'Managed OSHA, fire, air quality, and hazardous materials compliance and reporting',
      'Administered Windows Hyper-V environments, internal networks, and VoIP systems',
      'Supervised accounting, sales, and production teams',
      'Managed company payroll, cash flow, and customer service operations',
      'Maintained job schedules and operations across departments',
      'Created first version of a web-based job tracking and scheduling system',
      'Implemented touchscreen workstations on shop floor to streamline communication',
      'Managed internal sales, quoting, and production documentation workflows',
    ],
    tags: ['Magento 2', 'C#', 'QuickBooks', 'AutoCAD', 'Excel', 'Hyper-V', 'Windows Server', 'CNC', 'OSHA Compliance', 'ERP', 'Industrial Automation', 'Manufacturing'],
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
          </div>
        ))}
      </div>
    </main>
  );
}
