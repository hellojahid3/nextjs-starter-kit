import { type Metadata } from 'next';

import { env } from '@/env';

export const websiteMetadata: Metadata = {
  title: 'Next.js Starter Kit',
  description: 'A starter kit for Next.js projects.',
  metadataBase: env.NEXT_PUBLIC_APP_URL,
  openGraph: {
    type: 'website',
    url: env.NEXT_PUBLIC_APP_URL,
  },
  authors: [],
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
};
