export const dynamic = 'force-static';

export default function PersonalPortfolioPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Perosnal Portfolio</h1>
      <p className="text-gray-300 text-lg mb-6">
        My personal portfolio website is an exercise in using github pages along with NextJS to deploy a static content site.  I uses an Azure blob storage and Cloudflare for serving images.
      </p>

      <ul className="list-disc pl-5 space-y-2 text-gray-400">
        <li>NextJS</li>
        <li>Azure and Cloudflare CDN</li>
      </ul>

      <p className="mt-6 text-sm text-gray-300">Tech stack: Github pages, NetxJS, Tailwind, Typescript, Azure, Cloudflare</p>
    </main>
  );
}
