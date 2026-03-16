import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/get-base-url';

export const dynamic = 'force-static';
export const revalidate = 86_400;

const APP_URL = getBaseUrl();
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
