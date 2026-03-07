import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");
const EN_ARTICLES_DIR = path.join(process.cwd(), "content/en/articles");

export interface ArticleFrontmatter {
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  readTime: number;
  /** Optional region/market tags for sidebar filtering: Türkiye, UK, Almanya, Asya, Global */
  markets?: string[];
}

export interface Article {
  slug: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  const files = fs.readdirSync(ARTICLES_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => getSlugFromFilename(f));
}

export function getArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null);
  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

/** URL slug → frontmatter category name (for nav and /kategori/[slug]) */
export const CATEGORY_SLUG_TO_NAME: Record<string, string> = {
  "klinik-yonetimi": "Klinik Yönetimi",
  "hasta-buyumesi": "Hasta Büyümesi",
  "teknoloji": "Teknoloji",
  "pazar-analizi": "Pazar Analizi",
  turkiye: "Türkiye Pazarı",
  global: "Global",
};

export function getCategoryNameBySlug(slug: string): string | null {
  return CATEGORY_SLUG_TO_NAME[slug] ?? null;
}

export function getArticlesByCategory(categoryName: string): Article[] {
  return getAllArticles().filter(
    (a) => a.frontmatter.category === categoryName
  );
}

export function getCategorySlugs(): string[] {
  return Object.keys(CATEGORY_SLUG_TO_NAME);
}

// English article functions
export function getEnglishArticleSlugs(): string[] {
  if (!fs.existsSync(EN_ARTICLES_DIR)) return [];
  const files = fs.readdirSync(EN_ARTICLES_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => getSlugFromFilename(f));
}

export function getEnglishArticleBySlug(slug: string): Article | null {
  const fullPath = path.join(EN_ARTICLES_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getAllEnglishArticles(): Article[] {
  const slugs = getEnglishArticleSlugs();
  const articles = slugs
    .map((slug) => getEnglishArticleBySlug(slug))
    .filter((a): a is Article => a !== null);
  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

// English category functions
export function getEnglishArticlesByCategory(categoryName: string): Article[] {
  return getAllEnglishArticles().filter(
    (a) => a.frontmatter.category === categoryName
  );
}

export function getEnglishCategorySlugs(): string[] {
  const articles = getAllEnglishArticles();
  const categories = new Set(articles.map((a) => a.frontmatter.category));
  return Array.from(categories).map((category) => 
    category.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
  );
}

export function getEnglishCategoryNameBySlug(slug: string): string | null {
  const articles = getAllEnglishArticles();
  const categoryMap = new Map(
    Array.from(new Set(articles.map((a) => a.frontmatter.category))).map((category) => [
      category.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-'),
      category
    ])
  );
  return categoryMap.get(slug) ?? null;
}
