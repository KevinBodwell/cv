export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-4 text-center">
      <h1 className="text-4xl font-bold text-terminal-link mb-4">404 – Not Found</h1>
      <p className="text-gray-400 mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <a
        href="/projects"
        className="inline-block px-4 py-2 bg-terminal-link text-black rounded-full font-mono text-sm hover:bg-terminal-hover transition"
      >
        ← Back to Projects
      </a>
    </main>
  );
}
