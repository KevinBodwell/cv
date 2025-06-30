export const dynamic = 'force-static';

export default function MagentoSiteRescuePage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Magento Site Rescue</h1>
      <p className="text-gray-300 text-lg mb-6">
        Upon arriving on scene at Ripple Junction Design Company, I was tasked with taking over a Magento 2 site hosting 2 domains which had a 3rd party agency who was no longer a good fit. I took over the site and migrated off their limping infrastructure to Adobe Commerce Cloud, improving performance and reliability.  The 3rd party agency had a custom kubernetes cluster that was not well documented nor did they have any desire to sit and explain their unusal setup and deployment strategy.  With no budget to hire additional hands to help with that, I quickly recommended a pivot to Adobe Commerce Cloud infrastrucutre, a system I already knew, and was confident I could transition to in under 90 days.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-400">
        <li>Reduced homepage load time</li>
        <li>Implemented Fastly edge caching and origin tuning</li>
        <li>Removed unused code and partially completed project code from project</li>
        <li>Removed some performance limited features installed by 3rd party</li>
        <li>Monitored ongoing performance using New Relic + custom logs</li>
        <li>Results of migration and fixes have been zero unplanned downtime in over 2 years since I arrived</li>
      </ul>

      <p className="mt-6 text-sm text-gray-300">Tech stack: Magento 2, Fastly, New Relic, MariaDB, PHP, LESS</p>
    </main>
  );
}
