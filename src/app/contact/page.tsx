export const dynamic = 'force-static';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1>
      <div className="space-y-8">
        <div className="bg-terminal-dk border border-gray-200 rounded-xl shadow p-6">
          <p className="text-gray-300 mb-3">
            Feel free to reach out!
          </p>
          <p className="text-gray-300 mb-3">
            You can find me on the following networks:
          </p>
          <div className="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_38px,_black_calc(100%-60px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none">
              <li>
                <Link href="https://www.linkedin.com/in/kevin-bodwell/" className="text-blue-500 hover:underline" target="_blank">
                  <Image src="/LinkedIn_icon.svg" alt="LinkedIn" width={24} height={24} className="inline-block mr-2" />
                </Link>
              </li>
              <li>
                <Link href="https://www.facebook.com/bodwell" className="text-blue-500 hover:underline" target="_blank">
                  <Image src="/Facebook_f_logo_2021.svg" alt="LinkedIn" width={24} height={24} className="inline-block mr-2" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/kevinbodwell/" className="text-blue-500 hover:underline" target="_blank">
                  <Image src="/Instagram_logo_2022.svg" alt="Instagram" width={24} height={24} className="inline-block mr-2" />
                </Link>
              </li>
              <li>
                <Link href="https://bsky.app/profile/kevinbodwell.bsky.social" className="text-blue-500 hover:underline" target="_blank">
                  <Image src="/Bluesky_Logo.svg" alt="Bluesky" width={24} height={24} className="inline-block mr-2" />
                </Link>
              </li>
            </ul>         
          </div>
        </div>
      </div>
    </main>
  );
}
