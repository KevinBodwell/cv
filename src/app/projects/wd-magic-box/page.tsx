import Link from 'next/link';
export const dynamic = 'force-static';

export default function MagicBoxPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Magic Box</h1>
      <p className="text-gray-300 text-lg mb-6">
        In 2009 the owner of Western Dovetail and I created a spectacle of wooden boxes.  I had created a small stack of 4 dovetail boxes on a new machine that we had just acquired which fit inside each other, just as a desk novelty to show how small it would go.  Little did I know that we would make a tower which would rise from within itself to show all the different joinery we could do.
      </p>
      <p>
        For the most part, I made all the boxes from picking and milling the wood to dovetailing, sanding, and finishing.  we tried to find a lift method for several weeks, penciling out several ideas until with landing on something called a Zip Chain Actuator.  The US representative for the company only had 1 demo unit, and that units gear box was 3d printed, which after 2 years of use was worn out and we were able to get a machined replacement unit.
      </p>
      <p>
        The actuator was powered with a 12 volt motor and Allen Bradely relays and timers along with an off the shelf 4 channel car alarm/door remote.  I drew up the logic and wired the display while Max figured out how to attached all the boxes and support the fully extended towel.
      </p>
      <div className="relative w-full pb-[56.25%] mb-6">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/zUK3saIoHOA"
          title="Demo 1 Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        
      </div>
      <p>Video from a Home Show in Sacramento 2010</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-400 py-5">
        <li>Relay Logic Control</li>
        <li>Wireless Control</li>
        <li>Zip Chain Actuator: <Link href="https://www.ustsubaki.com/products/zip-chain-actuator/" className="hover:underline">Zip Chain</Link></li>
      </ul>

      <p className="mt-6 text-sm text-gray-300">Tech stack: Arduino, Raspberry Pi, ROS</p>
    </main>
  );
}
