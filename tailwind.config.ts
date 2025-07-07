import type { Config } from 'tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // @ts-expect-error: safelist is valid in Tailwind but missing from type definition
  safelist: [
    'aspect-[4/3]',
    'aspect-[16/9]',
    'aspect-[16/10]',
    `aspect-[4/1]`,
    'aspect-[16/4]',
    'aspect-[3/2]',
    'aspect-[7/4]',
    'aspect-[2/3]',
    'aspect-[3/4]',
    'aspect-[1/1]',
    'infinite-scroll',
    'animate-infinite-scroll'
  ],
  theme: {
    extend: {
      aspectRatio: {
        '7/4': '1.75',
        '4/3': '1.33',
        '3/2': '1.5',
        '16/10': '1.6',
        '16/9': '1.77',
        '4/1': '4',
        '16/4': '4',
        '3/4': '0.75',
        '2/3': '0.66',
        '1/1': '1',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [aspectRatio]
};

export default config;
