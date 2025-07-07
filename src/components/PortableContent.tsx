'use client';

import React from 'react';
import type { JSX } from 'react';
import { PortableBlock } from '@/types/portable';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  content: PortableBlock[];
};

export default function PortableContent({ content }: Props) {
  return (
    <>
      {content.map((block, idx) => {
        const key = `${block.type}-${idx}`;

        switch (block.type) {
          case 'heading': {
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
              <Tag
                key={key}
                id={block.id}
                className={`font-bold mt-8 mb-4 text-coco scroll-mt-20 ${
                  block.className || ''
                }`}
              >
                {block.text}
              </Tag>
            );
          }

          case 'paragraph':
            return (
              <p
                key={key}
                className={`text-gray-300 mb-4 leading-relaxed ${
                  block.className || ''
                }`}
              >
                {block.text}
              </p>
            );

          case 'image':
            return (
              <div
                key={key}
                className={`relative rounded-3xl ${
                  block.aspectRatio
                    ? `aspect-[${block.aspectRatio}]`
                    : 'aspect-[4/3]'
                } ${block.className || ''}`}
              >
                <Image
                  src={block.src}
                  alt={block.alt || ''}
                  fill
                  className="rounded-3xl border-4 border-green-500 object-cover shadow-lg"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                {block.caption && (
                  <p className="text-sm text-gray-200 bg-image-caption mt-2 absolute bottom-5 left-5 px-4 rounded-2xl">
                    {block.caption}
                  </p>
                )}
              </div>
            );

          case 'youtube':
            return (
              <div
                key={key}
                className={`relative w-full aspect-video mb-6 ${
                  block.className || ''
                }`}
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg border-4 border-red-600"
                  src={`https://www.youtube.com/embed/${block.videoId}`}
                  title={block.title || 'YouTube Video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );

          case 'link':
            return (
              <Link
                key={key}
                href={block.href}
                className={`text-terminal-link underline hover:text-terminal-hover block relative pb-2 ${block.className || ''}`}
                {...(block.newTab && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {block.text}
              </Link>
            );

            case 'taglist':
            return (

                <div key={key} className="flex flex-wrap gap-2 text-sm pt-6 relative ${block.className || ''}"
                >
                    {block.tags.map((tag) => (
                    <span key={tag} className="coco-lt px-2 py-1 rounded-full">
                        {tag}
                    </span>
                    ))}
                </div>              
            );

            case 'bulleted-list':
            return (
              <ul key={key} className={`list-disc pl-5 space-y-2 text-gray-400 relative pt-4 ${block.className || ''}`}>
                {block.items.map((item, itemIdx) => (
                  <li key={`${key}-${itemIdx}`}>{item}</li>
                ))}
              </ul>
            );

            case 'grid':
              return (
                <div
                  key={key}
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 ${block.className || ''}`}
                >
                  <PortableContent content={block.children} />
                </div>
              );

          default:
            return null;
        }
      })}
    </>
  );
}
