'use client';

import { Suspense } from 'react';
import ProjectPageClient from './ProjectPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ProjectPageClient />
    </Suspense>
  );
}
