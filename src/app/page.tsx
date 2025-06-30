// src/app/page.tsx
import Image from 'next/image';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <div className="w-40 h-40 relative mb-6">
          <Image
            src="/kevin-cody-fun.png"
            alt="Kevin Bodwell"
            fill
            className="rounded-3xl border-4 border-blue-500 object-cover shadow-lg"
            sizes="160px"
            priority
          />
        </div>

        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Kevin Bodwell</h1>
        <p className="text-xl max-w-xl mb-6">
          Full-stack developer, technical leader, and creative builder. I bring ideas to life with code — from Magento and ecommerce to home automation and game design.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full hover:bg-blue-700 transition coco"
        >
          See My Work
        </a>
      </section>
      <section id="about" className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="text-lg leading-relaxed terminal space-y-4">
          <p>
            I’m Kevin Bodwell — a developer, builder, and creative problem solver based in Florida. By day, I lead ecommerce and Magento development at Ripple Junction. By night, I run my own projects, blending tech, design, and storytelling into things people love to use or wear.
          </p>
          <p>
            Whether I’m building scalable web apps, debugging gnarly integration bugs, or creating a shirt brand from fictional national parks, I bring a hands-on, future-forward approach to every project.
          </p>
          <p>
            I love working with technologies like Next.js, TypeScript, Tailwind, and OpenCV, but I’m just as comfortable getting my hands dirty with bash scripts, Raspberry Pi hacks, or physical product prototyping.
          </p>
        </div>
      </section>
      <section id="skills" className="max-w-4xl mx-auto py-20 px-4">
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
            'Docker',
          ].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full font-medium coco"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section id="projects" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Magento Site Optimization',
              description:
                'Improved load speed by 40%, implemented CI/CD, and upgraded infrastructure for Ripple Junction’s ecommerce platform.',
              tags: ['Magento 2', 'Performance', 'CI/CD', 'New Relic'],
              href: '/projects/magento-optimization',
            },
            {
              title: 'Parclore Adventure Game',
              description:
                'Designed a physical-digital hybrid game using AI trivia, GPS tracking, and mobile web UX to create park-based team challenges.',
              tags: ['Next.js', 'PostgreSQL', 'Redis', 'Game Design'],
              href: '/projects/parclore',
            },
          ].map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="block bg-terminal-dk border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="coco-lt px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="terminal terminal-hover mt-4 inline-block font-medium">Learn more →</p>
            </a>
          ))}
          <div className="text-center col-span-2">
            <a
              href="/projects"
              className="px-6 py-3 rounded-full hover:bg-blue-700 transition coco"
            >
              See All Projects
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
