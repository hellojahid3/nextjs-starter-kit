/**
 * Hosting provider configurations.
 */
const DEPLOYMENT_CONFIGURATIONS = [
  { name: 'Vercel', envVars: ['VERCEL_PROJECT_PRODUCTION_URL', 'VERCEL_URL'] },
  { name: 'Railway', envVars: ['RAILWAY_PUBLIC_DOMAIN', 'RAILWAY_STATIC_URL'] },
  { name: 'Netlify', envVars: ['URL', 'DEPLOY_PRIME_URL', 'DEPLOY_URL'] },
  { name: 'Render', envVars: ['RENDER_EXTERNAL_URL'] },
  { name: 'DigitalOcean', envVars: ['DIGITALOCEAN_APP_URL'] },
  { name: 'Cloudflare', envVars: ['CF_PAGES_URL'] },
  { name: 'GitHub Pages', envVars: ['GITHUB_PAGES_URL'] },
  { name: 'GitLab Pages', envVars: ['CI_PAGES_URL'] },
  {
    name: 'Heroku',
    envVars: ['HEROKU_APP_NAME'],
    transform: (value: string) => `https://${value}.herokuapp.com`,
  },
];

/**
 * Ensures the URL has https:// prefix (unless it's localhost).
 */
function ensureHttps(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `https://${url}`;
}

/**
 * Gets the base URL with auto-detects hosting providers domain.
 */
export function getBaseUrl(fallback = null): string {
  const env = process.env as Record<string, string | undefined>;
  const fallbackUrl =
    fallback || `http://localhost:${process.env.PORT || 3000}`;

  // 1. Check common custom URL environment variables
  const customVars = ['APP_URL', 'NEXT_PUBLIC_APP_URL'];
  for (const key of customVars) {
    if (env[key]) return ensureHttps(env[key]);
  }

  // 2. Check provider-specific environment variables
  for (const provider of DEPLOYMENT_CONFIGURATIONS) {
    for (const envVar of provider.envVars) {
      const value = env[envVar];

      if (value) {
        const url = provider.transform ? provider.transform(value) : value;
        return ensureHttps(url);
      }
    }
  }

  // 3. Fallback to localhost
  return fallbackUrl;
}
