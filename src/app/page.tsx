'use client';

import { useProjects } from '@/hooks/useProjects';
import Image from 'next/image';
import Link from 'next/link';
import ProjectList from '@/components/ProjectList';

export default function HomePage() {
  const { projects, loading } = useProjects();
  const homepageProjects = projects.filter((p) => p.homepage);

  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-6 px-4">
        <div className="w-60 h-60 relative mb-6">
          <Image
            src="https://cdn.bodwell.org/kevin/kevin-cody-cartoon.jpg"
            alt="Kevin Bodwell"
            fill
            className="rounded-3xl border-4 border-blue-500 object-cover shadow-lg"
            sizes="160px"
            priority
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-4">Hi, I&apos;m Kevin Bodwell</h1>
        <p className="text-xl max-w-xl mb-6">
          Seasoned engineering leader and software architect with over 25 years of experience across e-commerce, manufacturing automation, industrial maintenance, and IT infrastructure. Proven ability to guide complex projects from conception to deployment, lead cross-functional teams, and implement innovative technical solutions that streamline operations and improve end-user experience. Fast learner with a passion for adopting new technologies and enhancing developer experience through automation. Combines hands-on development with strategic planning and systems thinking.
        </p>
        <Link
          href="#projects"
          className="px-6 py-3 rounded-full hover:bg-blue-700 transition coco"
        >
          See My Work
        </Link>
      </section>

      <section id="about" className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="text-lg leading-relaxed terminal space-y-4">
          <p>
            I have always been a Jack of all trades. I love to learn new things, and I love to build things. I have a passion for technology, design, and storytelling, and I enjoy blending these elements into projects that people love to use or wear.
          </p>
          <p>
            I am a developer, builder, and creative problem solver based in Florida. Since 2017 I have been primarily working inside small and medium sized businesses working to make sure their eCommerce presence is top notch. Most this has been developing and maintaining Magento 2 / Adobe Commerce sites with several hosted on Adobe Commerce Cloud infrastructure.
          </p>
          <p>
            Whether I&apos;m building scalable web apps, debugging gnarly integration bugs, or creating a shirt brand from fictional national parks, I bring a hands-on, future-forward approach to every project.
          </p>
          <p>
            I love working with technologies like Next.js, TypeScript, Tailwind, and OpenCV, but I&apos;m just as comfortable getting my hands dirty with bash scripts, Raspberry Pi hacks, or physical product prototyping.
          </p>
        </div>
      </section>

      <section id="skills" className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          {[
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Node.js',
            'Magento 2',
            'MySQL',
            'Prisma',
            'REST APIs',
            'Power Automate',
            'OpenCV',
            'Bash Scripting',
            'Raspberry Pi',
            'Home Assistant',
            'Ecommerce Strategy',
            'CI/CD',
            'Playwright',
            'Adobe Commerce',
            'Python',
            'GitHub Actions',
            'Docker'
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full font-medium coco">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects…</p>
        ) : (
          <>
            <ProjectList projects={homepageProjects} />
          </>
        )}
      </section>
    </main>
  );
}
