//import Link from 'next/link';
import Image from 'next/image';
export const dynamic = 'force-static';

export default function SouthNapaEarthquakeRecoveryPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Magic Box</h1>
      <p className="text-gray-300 text-lg mb-6">
        On August 24, 2014, the South Napa Earthquake struck at 3:20 AM with a magnitude of 6.0.  The earthquake caused significant damage to many buildings in the area, including the Western Dovetail factory.  The building was red tagged and we would never return to make drawers there again.
      </p>
      <p>
        The wood Jointers shop on Mare Island was originally built around 1904, the story has it that in 1906, the great San Francisco earthquake also badley damaged the brick on the building, and the Navy put i back up just the way it was, only to fall back down 100 years later.
      </p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-01-22_16-45-46_580.jpeg"
          alt="Rear upstairs window fallen in"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p>Rear upstairs window fallen in</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2014-08-24-1.jpg"
          alt="Water pouring out."
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">Broken water pipe between Jointers Shop and Sawmill</p>
      
      <p>
        Being in the position of a &quot;non-producer&quot; in that I didn&apos;t make product that needed to be shipped to customers, and the office staff could handle the phones and quoting, I became the lead in the recovery effort.
      </p>

      <p>
        We spent a few months working in borrowed space from 2 or 3 other companies on Mare Island, thank the owners of Dimensions Unlimited and Battle Bots for letting us barge in and saving our bacon.
      </p>

      <p>
        We were able to secure a new space on Mare Island only a few hundred yards from the old building, however 1 hiccup.  I was only allowed inside the old building 2 days per week, and only 4 hours at a time on those 2 days and only 4 people at a time.  So everything had to be choreographed and planned out to get the equipment and materials we needed to move into the new space, people, trucks, forklift, ladders, all the tools we may need.  Everyone had to know exactly what they were responsible for, and had to be sure to touch nothing they did not have to.
      </p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/wd-old-shop.jpg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Inside the old shop before the earthquake</p>
      
      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-02-10_14-49-23_624.jpeg"
          alt="Costa 3-head Sander Move"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">Thanks to some neighbors with a big lift, we were able to move the 3 head 53&quot; width belt sander to the new building in one afternoon.  For this move, we have to disconnect and jack it up high enough to fit the forks on the previous time alloted to go into the building, so all in all moving this just 400 yards took close to 2 weeks.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-01-08_16-23-15_217.jpeg"
          alt="Costa 3-head Sander Move"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">The neighbors were not available for this move, so we made it work with what we had.  Lift up, back in the truck, set it down and drive out.</p>

      <div className="relative w-full aspect-[16/4] mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/1101-nimitz-empty.jpg"
          alt="New Space Empty"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">The new space just down the road.  What it hard to see is the earthquake also damaged this building, it would be almost 3 months before we were allowed in the back 40 feet as that upper part of the wall had separated from the lower concrete portion.</p>

      <p>
        This project was many projects in itself, I am only going to show a small snippet of everything I did, and only the things I was the lead on, or in most cases, I was the only person working on.
      </p>

      <p>The new building had these pneumatic operated louvers on the roof, they were switched with solenoid valves and relayes.  Since much of the other air handling equipment had been removed, I had to troubshoot the existing and then augment with my own ideas.</p>
      <p>For this project I first hooked up a bunch of push buttons to open and close them, then built a parallel relay array and used an off the shelf power 120 volt ethernet power switch to control them from the shop floor computers.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-02-04_17-29-01_590.jpeg"
          alt="New Space Empty"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">Roof Vent Diagram</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/015a80d890c3d97ad467e94bb165c575db7dd79a01.jpg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Pneumatic Valve Array</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/01b57430e0e8b3a0438d6d4902a39fd7c5355a55a0.jpg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Manual Control</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-02-04_15-18-10_000.jpeg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Relays</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-11-13_10-31-39_537.jpeg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Web Power Switch</p>

      <p>There was a lot of moving pieces and a lot of supplies required during the build of the new shop, and all this was done while our production continued in the same space.  Machine were temporarily hooked up with flexible cables and covered to make sure trip hazards were minimal.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-10-26_18-29-45_867.jpeg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">I built this cabinet and drawers early on to hold all the nuts, bolts, electrical connectors, and other supplies I needed in the space over the next 18 months.  You can see one of the shop touchscreen terminals above which allowed checking and updating job schedules along with operating vents, heaters, fans and lighting.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/469055994_10162150025094549_4023274800264753185_n.jpg"
          alt="Old Shop"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-6">Most of what you see is temporary setup, I would work from 5pm until midnight or later to move and perminantly install the equipment so it could be ready for the next day.</p>

      <p>
        Hiring an electrician was not in the budget, so I bought a copy of the National and California Electrical code and started drawing plans for the new shop.  I had to figure out how to wire the new space, and how to get power to all the machines, lights, and outlets.  Our supply voltage in the new space was 480 volt 3 phase and the old shop was 240 volt, so I had to calculate all the loads and spec out the transformers we would need.
      </p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-08-20_11-16-48_256.jpeg"
          alt="Conduit"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">There was a lot of conduit to bend, from 3/4&quot; all the way up to 2&quot;</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2015-08-20_16-32-55_098.jpeg"
          alt="Conduit Supports"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">I built these supports to carry the conduit and air lines out of new pallet rack endframe and double sided unistrut.  Along the way I had to calculate the load and show that the weight of the planned conduit, wire and air lines were withen the acceptable load capacity of the unitstrut spans.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2016-07-25_16-06-31_000.jpeg"
          alt="Dust Collection"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Dust Collection had to be re-engineered and reinstall as well.  The old shop used the building&apos;s original 24&quot; dust collector installed by the Navy.  We had to scrounge whatever dust collectors we could find for cheap and install them machine by machine.</p>

      <p>Code compliance also meant labeling everything properly.</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2016-04-29_10-38-01_288.jpeg"
          alt="Breaker Labels"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">Breakers</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2016-04-29_10-37-35_808.jpeg"
          alt="Breaker Labels"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">More Breakers</p>

      <div className="relative w-full aspect-[4/3] relative mb-4 mt-6">
        <Image
          src="https://cdn.bodwell.org/kevin/2016-04-29_10-57-23_136.jpeg"
          alt="Exit Sign"
          fill
          className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
          sizes="(max-width: 768px) 100vw, 600px"
          priority
        />
      </div>
      <p className="pb-1">And of course Exit signs with braile as well.</p>
      <p>Each sign researched, ordered and installed.</p>

      <p className="mt-6 text-sm text-gray-300"></p>
    </main>
  );
}
