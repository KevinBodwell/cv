// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'Kevin Bodwell • Portfolio',
  description: 'The official portfolio of Kevin Bodwell — developer, builder, and creative mind.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="sticky top-0 z-50 bg-[var(--background)] border-b border-gray-200">
          <nav className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
            <Link href="/" className="text-xl font-bold hover:opacity-80">
              Kevin Bodwell
            </Link>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/#about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/cv" className="hover:underline">CV</Link>
              </li>              
              <li>
                <Link href="/projects" className="hover:underline">Projects</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
      <GoogleAnalytics gaId="G-VTBSSK3GF7" />
    </html>
  );
}
