"use client";

import { usePathname } from "next/navigation";
import { getPricingUrl } from "@/lib/getPricingUrl";

export default function ArticleCTA() {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : 
                 pathname?.startsWith("/de") ? "de" : "tr";
  const pricingUrl = getPricingUrl(locale);

  return (
    <div className="article-cta-block">
      <div className="article-cta-content">
        <div className="article-cta-header">
          "Managing your clinic efficiently starts with the right tools."
        </div>
        <div className="article-cta-buttons">
          <a 
            href={pricingUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="article-cta-btn article-cta-btn-outline"
          >
            Explore ClinixGlow Pro →
          </a>
          <a 
            href={locale === "en" ? "/en/demo" : locale === "de" ? "/de/demo" : "/demo"}
            className="article-cta-btn article-cta-btn-solid"
          >
            Request a Free Demo →
          </a>
        </div>
      </div>
    </div>
  );
}
