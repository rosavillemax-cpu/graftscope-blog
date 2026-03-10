import type { MetadataRoute } from "next";
import {
  getArticleSlugs,
  getCategorySlugs,
  getAllArticles,
  getEnglishArticleSlugs,
  getAllEnglishArticles,
  getGermanArticleSlugs,
  getAllGermanArticles,
  getGermanCategorySlugs,
} from "@/lib/articles";

const SITE_URL = "https://www.graftscope.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const englishArticles = getAllEnglishArticles();
  const germanArticles = getAllGermanArticles();
  const articleSlugs = getArticleSlugs();
  const englishArticleSlugs = getEnglishArticleSlugs();
  const germanArticleSlugs = getGermanArticleSlugs();
  const categorySlugs = getCategorySlugs();
  const germanCategorySlugs = getGermanCategorySlugs();

  // Dynamic Turkish article URLs
  const articleEntries: MetadataRoute.Sitemap = articleSlugs.map((slug) => {
    const article = articles.find((a) => a.slug === slug);
    return {
      url: `${SITE_URL}/articles/${slug}`,
      lastModified: article
        ? new Date(article.frontmatter.date)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  // Dynamic English article URLs
  const englishArticleEntries: MetadataRoute.Sitemap = englishArticleSlugs.map((slug) => {
    const article = englishArticles.find((a) => a.slug === slug);
    return {
      url: `${SITE_URL}/en/articles/${slug}`,
      lastModified: article
        ? new Date(article.frontmatter.date)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  // Dynamic Turkish category URLs
  const categoryEntries: MetadataRoute.Sitemap = categorySlugs.map(
    (slug) => ({
      url: `${SITE_URL}/kategori/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  // Dynamic English category URLs - generate from actual articles
  const englishCategories = new Set(englishArticles.map((a) => a.frontmatter.category));
  const englishCategoryEntries: MetadataRoute.Sitemap = Array.from(englishCategories).map((category) => {
    const slug = category.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    return {
      url: `${SITE_URL}/en/category/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  // Dynamic German article URLs
  const germanArticleEntries: MetadataRoute.Sitemap = germanArticleSlugs.map((slug) => {
    const article = germanArticles.find((a) => a.slug === slug);
    return {
      url: `${SITE_URL}/de/articles/${slug}`,
      lastModified: article
        ? new Date(article.frontmatter.date)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    };
  });

  // Dynamic German category URLs
  const germanCategoryEntries: MetadataRoute.Sitemap = germanCategorySlugs.map(
    (slug) => ({
      url: `${SITE_URL}/de/category/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  // Static pages only
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/de`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/demo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/en/demo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/de/demo`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...articleEntries,
    ...englishArticleEntries,
    ...germanArticleEntries,
    ...categoryEntries,
    ...englishCategoryEntries,
    ...germanCategoryEntries,
  ];
}
