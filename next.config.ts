import './src/env';

import type { NextConfig } from 'next';

/**
 * Next.js can be configured through the next.config.ts file.
 * @see {@link https://nextjs.org/docs/app/api-reference/config/next-config-js}
 */
const nextConfig: NextConfig = {
  distDir: 'dist',
  devIndicators: false,
  transpilePackages: ['@t3-oss/env-nextjs'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
