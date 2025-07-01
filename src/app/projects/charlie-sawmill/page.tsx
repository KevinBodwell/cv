import Image from 'next/image';
export const dynamic = 'force-static';

export default function CharlieSawmillPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Milling Lumber</h1>
      <p className="text-gray-300 text-lg mb-6">
        In 2015, my brother Charlie and I milled some Ash he got from a local tree company.  We had a lot of fun milling it, and we both made a few projects with the wood, Charlie made a table top he used in his dining room for several years and I have still got a couple think slabs waiting for a project.
      </p>

      <div className="w-182 h-182 relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-01-01_14-43-05_618.jpeg"
          alt="Log after first pass"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="160px"
          priority
        />
      </div>
      <p>After first pass</p>

      <div className="relative w-sm pb-[93%] mb-4 mt-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/ziq4Qqtsoms"
          title="Demo 1 Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
      <p>Timelapse of the first pass include ripping and initial planing.</p>

      <ul className="list-disc pl-5 space-y-2 text-gray-400 py-5">
        <li>Chainsaw Mill</li>
      </ul>

      <p className="mt-6 text-sm text-gray-300"></p>
    </main>
  );
}
