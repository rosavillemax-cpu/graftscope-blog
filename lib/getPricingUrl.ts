export function getPricingUrl(locale: string): string {
  const localeMap: Record<string, string> = {
    en: "https://www.clinixglow.com/en#pricing",
    de: "https://www.clinixglow.com/de#pricing",
    tr: "https://www.clinixglow.com/tr#pricing",
  };
  return localeMap[locale] ?? localeMap["tr"];
}
