import { getAllArticles, getArticleSlugs } from "@/lib/articles";
import fs from "fs";
import path from "path";

const SITE_URL = "https://www.clinixglow.com/blog";
const ARTICLES_DIR = path.join(process.cwd(), "content/articles");
const EN_ARTICLES_DIR = path.join(process.cwd(), "content/en/articles");
const DE_ARTICLES_DIR = path.join(process.cwd(), "content/de/articles");

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFreq: string;
  priority: string;
  alternates?: Array<{
    href: string;
    hreflang: string;
  }>;
}

interface ArticleFrontmatter {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: number;
  markets?: string[];
}

interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

function formatDate(date: string): string {
  return new Date(date).toISOString();
}

function createUrlEntry(
  path: string, 
  lastMod: string = new Date().toISOString(),
  changeFreq: string = "weekly",
  priority: string = "0.8",
  alternates?: SitemapEntry['alternates']
): SitemapEntry {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: lastMod,
    changeFreq,
    priority,
    alternates
  };
}

function getArticlesFromDirectory(dir: string): Article[] {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
    .map((slug) => {
      const fullPath = path.join(dir, `${slug}.md`);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const matter = require('gray-matter');
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
        content,
      };
    });
}

export async function GET() {
  // Get all articles for each language
  const turkishArticles = getArticlesFromDirectory(ARTICLES_DIR);
  const englishArticles = getArticlesFromDirectory(EN_ARTICLES_DIR);
  const germanArticles = getArticlesFromDirectory(DE_ARTICLES_DIR);

  const sitemapEntries: SitemapEntry[] = [];

  // Home pages (highest priority)
  sitemapEntries.push(
    createUrlEntry("/", new Date().toISOString(), "daily", "1.0", [
      { href: `${SITE_URL}/`, hreflang: "tr" },
      { href: `${SITE_URL}/en`, hreflang: "en" },
      { href: `${SITE_URL}/de`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/en", new Date().toISOString(), "daily", "1.0", [
      { href: `${SITE_URL}/`, hreflang: "tr" },
      { href: `${SITE_URL}/en`, hreflang: "en" },
      { href: `${SITE_URL}/de`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/de", new Date().toISOString(), "daily", "1.0", [
      { href: `${SITE_URL}/`, hreflang: "tr" },
      { href: `${SITE_URL}/en`, hreflang: "en" },
      { href: `${SITE_URL}/de`, hreflang: "de" },
    ])
  );

  // Demo page
  sitemapEntries.push(
    createUrlEntry("/demo", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/demo`, hreflang: "tr" },
      { href: `${SITE_URL}/en/demo`, hreflang: "en" },
      { href: `${SITE_URL}/de/demo`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/en/demo", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/demo`, hreflang: "tr" },
      { href: `${SITE_URL}/en/demo`, hreflang: "en" },
      { href: `${SITE_URL}/de/demo`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/de/demo", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/demo`, hreflang: "tr" },
      { href: `${SITE_URL}/en/demo`, hreflang: "en" },
      { href: `${SITE_URL}/de/demo`, hreflang: "de" },
    ])
  );

  // Pricing page
  sitemapEntries.push(
    createUrlEntry("/pricing", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/pricing`, hreflang: "tr" },
      { href: `${SITE_URL}/en/pricing`, hreflang: "en" },
      { href: `${SITE_URL}/de/pricing`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/en/pricing", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/pricing`, hreflang: "tr" },
      { href: `${SITE_URL}/en/pricing`, hreflang: "en" },
      { href: `${SITE_URL}/de/pricing`, hreflang: "de" },
    ])
  );

  sitemapEntries.push(
    createUrlEntry("/de/pricing", new Date().toISOString(), "monthly", "0.7", [
      { href: `${SITE_URL}/pricing`, hreflang: "tr" },
      { href: `${SITE_URL}/en/pricing`, hreflang: "en" },
      { href: `${SITE_URL}/de/pricing`, hreflang: "de" },
    ])
  );

  // Turkish articles
  turkishArticles.forEach((article) => {
    const { slug, frontmatter } = article;
    sitemapEntries.push(
      createUrlEntry(
        `/articles/${slug}`,
        formatDate(frontmatter.date),
        "weekly",
        "0.8",
        [
          { href: `${SITE_URL}/articles/${slug}`, hreflang: "tr" },
          { href: `${SITE_URL}/en/articles/${slug}`, hreflang: "en" },
          { href: `${SITE_URL}/de/articles/${slug}`, hreflang: "de" },
        ]
      )
    );
  });

  // English articles
  englishArticles.forEach((article) => {
    const { slug, frontmatter } = article;
    sitemapEntries.push(
      createUrlEntry(
        `/en/articles/${slug}`,
        formatDate(frontmatter.date),
        "weekly",
        "0.8",
        [
          { href: `${SITE_URL}/articles/${slug}`, hreflang: "tr" },
          { href: `${SITE_URL}/en/articles/${slug}`, hreflang: "en" },
          { href: `${SITE_URL}/de/articles/${slug}`, hreflang: "de" },
        ]
      )
    );
  });

  // German articles
  germanArticles.forEach((article) => {
    const { slug, frontmatter } = article;
    sitemapEntries.push(
      createUrlEntry(
        `/de/articles/${slug}`,
        formatDate(frontmatter.date),
        "weekly",
        "0.8",
        [
          { href: `${SITE_URL}/articles/${slug}`, hreflang: "tr" },
          { href: `${SITE_URL}/en/articles/${slug}`, hreflang: "en" },
          { href: `${SITE_URL}/de/articles/${slug}`, hreflang: "de" },
        ]
      )
    );
  });

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFreq}</changefreq>
    <priority>${entry.priority}</priority>
${entry.alternates ? entry.alternates.map(alt => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n') : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
