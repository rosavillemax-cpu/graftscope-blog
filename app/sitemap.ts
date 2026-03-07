import type { MetadataRoute } from "next";
import {
  getArticleSlugs,
  getCategorySlugs,
  getAllArticles,
} from "@/lib/articles";

const SITE_URL = "https://graftscope.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  const articleSlugs = getArticleSlugs();
  const categorySlugs = getCategorySlugs();

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

  const categoryEntries: MetadataRoute.Sitemap = categorySlugs.map(
    (slug) => ({
      url: `${SITE_URL}/kategori/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })
  );

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    ...articleEntries,
    ...categoryEntries,
  ];
}
