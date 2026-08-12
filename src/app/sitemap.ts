import type { MetadataRoute } from 'next';

import { env } from '@/env';

export const dynamic = 'force-static';
export const revalidate = 86_400;

const APP_URL = env.NEXT_PUBLIC_APP_URL;
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}
