import type { PortableBlock } from '@/types/portable';
export type Project = {
  title: string;
  company: string;
  companySlug: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
  href: string;
  homepage?: boolean;
  body?: PortableBlock[];
};