const TICKER_ITEMS = [
  "Türkiye saç ekimi pazarı 2025’te %12 büyüme bekliyor",
  "Avrupa’da FUE talep artışı devam ediyor",
  "Klinik yönetiminde CRM kullanımı hasta dönüşümünü artırıyor",
  "Uluslararası hasta akışında dil ve paket stratejileri öne çıkıyor",
  "Dijital pazarlama saç ekimi klinikleri için kritik hale geldi",
];

export default function Ticker() {
  return (
    <div className="ticker-wrap" aria-label="Sektör haberleri">
      <div className="ticker-track">
        <div className="ticker-content">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((text, i) => (
            <span key={i} className="ticker-item">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
