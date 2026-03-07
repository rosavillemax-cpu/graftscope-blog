import type { Article } from "./articles";

// Client-side article data - hardcoded to avoid Node.js fs usage
const TURKISH_ARTICLES: Article[] = [
  {
    slug: "antalya-sac-ekim-klinikleri",
    frontmatter: {
      title: "Antalya'da Saç Ekimi Klinikleri: Pazar Analizi ve Rekabet",
      category: "Pazar Analizi",
      excerpt: "Antalya, Türkiye'nin saç ekimi turizminde önemli bir merkezdir. Bu makalede Antalya'daki kliniklerin pazar payı, rekabet avantajları ve hasta profilleri analiz ediliyor.",
      author: "Dr. Mehmet Yılmaz",
      readTime: 8,
      date: "2024-01-15"
    },
    content: "Antalya, Türkiye'nin saç ekimi turizminde önemli bir merkezdir. Bu makalede Antalya'daki kliniklerin pazar payı, rekabet avantajları ve hasta profilleri analiz ediliyor."
  },
  {
    slug: "klinik-yonetim-sistemi",
    frontmatter: {
      title: "Modern Klinik Yönetim Sistemleri: Verimlilik ve Otomasyon",
      category: "Klinik Yönetimi",
      excerpt: "Saç ekimi klinikleri için modern yönetim sistemlerinin önemini, otomasyon fırsatlarını ve operasyonel verimlilik artışını inceliyoruz.",
      author: "Elif Kaya",
      readTime: 6,
      date: "2024-01-10"
    },
    content: "Saç ekimi klinikleri için modern yönetim sistemlerinin önemini, otomasyon fırsatlarını ve operasyonel verimlilik artışını inceliyoruz."
  },
  {
    slug: "hasta-kazanma-stratejileri",
    frontmatter: {
      title: "Hasta Kazanma Stratejileri: Dijital Pazarlama ve Marka",
      category: "Hasta Büyümesi",
      excerpt: "Saç ekimi klinikleri için etkili hasta kazanma stratejileri, dijital pazarlama kanalları ve marka bilinirliği oluşturma yöntemleri.",
      author: "Can Demir",
      readTime: 7,
      date: "2024-01-05"
    },
    content: "Saç ekimi klinikleri için etkili hasta kazanma stratejileri, dijital pazarlama kanalları ve marka bilinirliği oluşturma yöntemleri."
  },
  {
    slug: "ai-teknolojileri",
    frontmatter: {
      title: "Yapay Zeka Teknolojileri: Saç Ekiminde Devrim",
      category: "Teknoloji",
      excerpt: "Saç ekiminde yapay zeka teknolojilerinin kullanımı, otomatik analiz sistemleri ve hasta sonuç tahminleme hakkında detaylı bilgi.",
      author: "Prof. Dr. Ahmet Özkan",
      readTime: 10,
      date: "2024-01-20"
    },
    content: "Saç ekiminde yapay zeka teknolojilerinin kullanımı, otomatik analiz sistemleri ve hasta sonuç tahminleme hakkında detaylı bilgi."
  },
  {
    slug: "turkiye-pazari",
    frontmatter: {
      title: "Türkiye Saç Ekimi Pazarı: 2024 Analizi",
      category: "Türkiye",
      excerpt: "Türkiye saç ekimi pazarının 2024 yılı analizi, büyüme oranları, uluslararası hasta akışı ve sektörel trendler.",
      author: "Ayşe Yılmaz",
      readTime: 12,
      date: "2024-01-25"
    },
    content: "Türkiye saç ekimi pazarının 2024 yılı analizi, büyüme oranları, uluslararası hasta akışı ve sektörel trendler."
  }
];

const ENGLISH_ARTICLES: Article[] = [
  {
    slug: "antalya-clinics",
    frontmatter: {
      title: "Antalya Clinics: Market Analysis and Competition",
      category: "Türkiye",
      excerpt: "Antalya is a major hub in Turkey's hair transplant tourism. This article analyzes market share, competitive advantages, and patient demographics of Antalya clinics.",
      author: "Dr. Mehmet Yılmaz",
      readTime: 8,
      date: "2024-01-15"
    },
    content: "Antalya is a major hub in Turkey's hair transplant tourism. This article analyzes market share, competitive advantages, and patient demographics of Antalya clinics."
  },
  {
    slug: "clinic-management-systems",
    frontmatter: {
      title: "Modern Clinic Management Systems: Efficiency and Automation",
      category: "Clinic Management",
      excerpt: "The importance of modern management systems for hair transplant clinics, automation opportunities, and operational efficiency improvements.",
      author: "Elif Kaya",
      readTime: 6,
      date: "2024-01-10"
    },
    content: "The importance of modern management systems for hair transplant clinics, automation opportunities, and operational efficiency improvements."
  },
  {
    slug: "patient-growth-strategies",
    frontmatter: {
      title: "Patient Growth Strategies: Digital Marketing and Branding",
      category: "Patient Growth",
      excerpt: "Effective patient acquisition strategies for hair transplant clinics, digital marketing channels, and brand building methods.",
      author: "Can Demir",
      readTime: 7,
      date: "2024-01-05"
    },
    content: "Effective patient acquisition strategies for hair transplant clinics, digital marketing channels, and brand building methods."
  },
  {
    slug: "ai-hair-analysis",
    frontmatter: {
      title: "AI Technologies: Revolution in Hair Transplantation",
      category: "Technology",
      excerpt: "The use of AI technologies in hair transplantation, automatic analysis systems, and patient outcome prediction.",
      author: "Prof. Dr. Ahmet Özkan",
      readTime: 10,
      date: "2024-01-20"
    },
    content: "The use of AI technologies in hair transplantation, automatic analysis systems, and patient outcome prediction."
  },
  {
    slug: "turkey-market",
    frontmatter: {
      title: "Turkey Hair Transplant Market: 2024 Analysis",
      category: "Türkiye",
      excerpt: "Analysis of Turkey's hair transplant market for 2024, growth rates, international patient flow, and sector trends.",
      author: "Ayşe Yılmaz",
      readTime: 12,
      date: "2024-01-25"
    },
    content: "Analysis of Turkey's hair transplant market for 2024, growth rates, international patient flow, and sector trends."
  }
];

export function getAllArticlesClient(): Article[] {
  return TURKISH_ARTICLES;
}

export function getAllEnglishArticlesClient(): Article[] {
  return ENGLISH_ARTICLES;
}
