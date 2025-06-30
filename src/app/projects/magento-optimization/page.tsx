export const dynamic = 'force-static';

export default function MagentoOptimizationPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Magento Site Optimization</h1>
      <p className="text-gray-700 text-lg mb-6">
        At Ripple Junction, I led a complete performance overhaul of the Magento 2 site, focusing on both frontend load time and backend admin stability.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-800">
        <li>Reduced homepage load time by 40%</li>
        <li>Implemented Fastly edge caching and origin tuning</li>
        <li>Set up CI/CD pipeline with GitHub Actions</li>
        <li>Wrote automated tests with Playwright and Taiko</li>
        <li>Monitored ongoing performance using New Relic + custom logs</li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">Tech stack: Magento 2, Fastly, CI/CD, Playwright, New Relic</p>
    </main>
  );
}
