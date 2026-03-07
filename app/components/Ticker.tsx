"use client";

import { usePathname } from "next/navigation";

const TR_TICKER_ITEMS = [
  "Türkiye saç ekimi pazarı 2025'te %12 büyüme bekliyor",
  "Avrupa'da FUE talep artışı devam ediyor",
  "Klinik yönetiminde CRM kullanımı hasta dönüşümünü artırıyor",
  "Uluslararası hasta akışında dil ve paket stratejileri öne çıkıyor",
  "Dijital pazarlama saç ekimi klinikleri için kritik hale geldi",
];

const EN_TICKER_ITEMS = [
  "Turkey's hair transplant market expected to grow 12% in 2025",
  "Rising FUE demand continues across Europe",
  "Digital marketing becomes critical for hair transplant clinics",
  "International patient flow drives language and package strategies",
];

export default function Ticker() {
  const pathname = usePathname();
  const isEnglishPage = pathname?.startsWith("/en");
  
  const tickerItems = isEnglishPage ? EN_TICKER_ITEMS : TR_TICKER_ITEMS;
  const ariaLabel = isEnglishPage ? "Industry news" : "Sektör haberleri";

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
