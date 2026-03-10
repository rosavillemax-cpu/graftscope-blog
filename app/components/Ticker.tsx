"use client";

import { usePathname } from "next/navigation";

const TR_TICKER_ITEMS = [
  "Türkiye 2026'da 1 milyon saç ekim işlemi hedefliyor",
  "FUE tekniği küresel pazarda %68 paya ulaştı",
  "Medikal turizm geliri Türkiye'de rekor kırdı",
  "Dijital hasta yönetimi kliniklerde verimliği %40 artırıyor",
  "İstanbul saç ekim turizminde Avrupa lideri konumunu koruyor",
  "Yapay zeka destekli saç analizi kliniklerde yaygınlaşıyor",
];

const EN_TICKER_ITEMS = [
  "Türkiye targets 1 million hair transplant procedures in 2026",
  "FUE technique reaches 68% global market share",
  "Medical tourism revenue hits record highs in Turkey",
  "Digital patient management increases clinic efficiency by 40%",
  "Istanbul maintains European leadership in hair transplant tourism",
  "AI-powered hair analysis becomes standard in top clinics",
];

const DE_TICKER_ITEMS = [
  "Türkei strebt 2026 eine Million Haartransplantationen an",
  "FUE-Technik erreicht 68% globalen Marktanteil",
  "Medizintourismus in der Türkei verzeichnet Rekordumsätze",
  "Digitales Patientenmanagement steigert Klinikeffizienz um 40%",
];

export default function Ticker() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  const isGermanPage = pathname?.startsWith("/de");
  
  let tickerItems = TR_TICKER_ITEMS;
  let ariaLabel = "Sektör haberleri";
  
  if (isEnglishPage) {
    tickerItems = EN_TICKER_ITEMS;
    ariaLabel = "Industry news";
  } else if (isGermanPage) {
    tickerItems = DE_TICKER_ITEMS;
    ariaLabel = "Branchennachrichten";
  }

  return (
    <div className="ticker-wrap" aria-label={ariaLabel}>
      <div className="ticker-track">
        <div className="ticker-content">
          {[...tickerItems, ...tickerItems].map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
