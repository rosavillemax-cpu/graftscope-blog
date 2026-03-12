export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap location
Sitemap: https://www.graftscope.com/blog/sitemap.xml

# Disallow admin and API routes (if they exist)
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

# Crawl delay for bots (optional)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
