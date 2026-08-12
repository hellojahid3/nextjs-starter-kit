import type { MetadataRoute } from 'next';

import { env } from '@/env';

export const dynamic = 'force-static';

const APP_URL = env.NEXT_PUBLIC_APP_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
