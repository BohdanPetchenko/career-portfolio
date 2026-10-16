/**
 * Absolute site origin for metadata, sitemap and robots.
 * Set NEXT_PUBLIC_SITE_URL in production; on Vercel the production domain is used automatically.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.NODE_ENV === "production") {
    console.warn("NEXT_PUBLIC_SITE_URL is not set: metadata, sitemap and robots will point to localhost.");
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
