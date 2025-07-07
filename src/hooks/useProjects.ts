'use client';

import { useEffect, useState } from 'react';
import type { Project } from '@/types/project';

const CACHE_KEY = 'projectsCache';
const DEV_MODE = process.env.NODE_ENV !== 'production';
const CACHE_TTL = DEV_MODE ? 0 : 10 * 60 * 1000; // 0 in dev, 10 min in prod

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = Date.now();

    if (!DEV_MODE) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (now - timestamp < CACHE_TTL) {
            setProjects(data);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Invalid cache in localStorage:', err);
      }
    }

    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        if (!DEV_MODE) {
          localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: now }));
        }
      })
      .catch((err) => console.error('Failed to load projects.json:', err))
      .finally(() => setLoading(false));
  }, []);

  return { projects, loading };
}
