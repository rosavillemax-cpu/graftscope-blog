import type { Article } from "./articles";

export type MarketFilterKey =
  | "Tümü"
  | "Türkiye"
  | "UK"
  | "Almanya"
  | "Asya"
  | "Global";

export const MARKET_FILTER_OPTIONS: MarketFilterKey[] = [
  "Tümü",
  "Türkiye",
  "UK",
  "Almanya",
  "Asya",
  "Global",
];

export function articleMatchesMarket(
  article: Article,
  marketKey: MarketFilterKey
): boolean {
  if (marketKey === "Tümü") return true;

  const cat = article.frontmatter.category;
  const markets = article.frontmatter.markets ?? [];

  switch (marketKey) {
    case "Türkiye":
      return cat === "Türkiye Pazarı" || markets.includes("Türkiye");
    case "UK":
      return markets.includes("UK");
    case "Almanya":
      return markets.includes("Almanya");
    case "Asya":
      return markets.includes("Asya");
    case "Global":
      return (
        cat === "Global" ||
        cat === "Pazar Analizi" ||
        markets.includes("Global")
      );
    default:
      return true;
  }
}

export function filterArticlesByMarket(
  articles: Article[],
  marketKey: MarketFilterKey
): Article[] {
  if (marketKey === "Tümü") return articles;
  return articles.filter((a) => articleMatchesMarket(a, marketKey));
}
