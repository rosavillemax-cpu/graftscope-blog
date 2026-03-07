import type { Article } from "./articles";

export type MarketFilterKey =
  | "Tümü"
  | "All"
  | "Türkiye"
  | "Turkey"
  | "UK"
  | "Almanya"
  | "Germany"
  | "Asya"
  | "Asia"
  | "Global";

export const MARKET_FILTER_OPTIONS: MarketFilterKey[] = [
  "Tümü",
  "Türkiye",
  "UK",
  "Almanya",
  "Asya",
  "Global",
];

export const MARKET_FILTER_OPTIONS_EN: MarketFilterKey[] = [
  "All",
  "Turkey",
  "UK",
  "Germany",
  "Asia",
  "Global",
];

export function articleMatchesMarket(
  article: Article,
  marketKey: MarketFilterKey
): boolean {
  if (marketKey === "Tümü" || marketKey === "All") return true;

  const cat = article.frontmatter.category;
  const markets = article.frontmatter.markets ?? [];

  switch (marketKey) {
    case "Türkiye":
    case "Turkey":
      return cat === "Türkiye Pazarı" || cat === "Turkey Market" || markets.includes("Türkiye") || markets.includes("Turkey");
    case "UK":
      return markets.includes("UK");
    case "Almanya":
    case "Germany":
      return markets.includes("Almanya") || markets.includes("Germany");
    case "Asya":
    case "Asia":
      return markets.includes("Asya") || markets.includes("Asia");
    case "Global":
      return (
        cat === "Global" ||
        cat === "Pazar Analizi" ||
        cat === "Market Analysis" ||
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
