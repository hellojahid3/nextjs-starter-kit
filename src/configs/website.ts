import { type Metadata } from 'next';

import { getBaseUrl } from '@/lib/get-base-url';

const APP_URL = getBaseUrl();

export const websiteMetadata: Metadata = {
  title: 'Next.js Starter Kit',
  description:
    'Explore Next.js Starter Kit featuring full-stack web projects, frontend and backend expertise, technical writing, and modern development practices.',
  metadataBase: APP_URL,
  openGraph: {
    type: 'website',
    url: APP_URL,
  },
  authors: [],
  category: 'Starter Kit',
  keywords: ['Boilerplate', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};
