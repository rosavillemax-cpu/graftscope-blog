export function getPricingUrl(locale: string): string {
  const localeMap: Record<string, string> = {
    en: "https://www.graftscope.com/en#pricing",
    de: "https://www.graftscope.com/de#pricing",
    tr: "https://www.graftscope.com/tr#pricing",
  };
  return localeMap[locale] ?? localeMap["tr"];
}
