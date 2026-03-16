import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/get-base-url';

export const dynamic = 'force-static';

const APP_URL = getBaseUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
