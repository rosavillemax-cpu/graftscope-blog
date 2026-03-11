import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/SchemaMarkup";
import CookieConsent from "./components/CookieConsent";
import { generateOrganizationSchema } from "@/lib/schema";

const SITE_URL = "https://www.graftscope.org";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Saç Ekimi Klinik Yönetim Yazılımı | GraftScope",
    template: "%s | GraftScope – Hair Transplant Clinic Software",
  },
  description:
    "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri. Türkiye, UK ve Almanya pazarları için uzman içerikler.",
  keywords: [
    "saç ekim",
    "hair transplant",
    "klinik yönetimi",
    "CRM",
    "saç ekim yazılımı",
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png', 
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Graftscope | Saç Ekim Klinikleri İçin Rehber",
    description:
      "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri. Türkiye, UK ve Almanya pazarları için uzman içerikler.",
    url: SITE_URL,
    siteName: "Graftscope",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Graftscope",
  url: SITE_URL,
  logo: `${SITE_URL}/graftscope-logo.png`,
  description:
    "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri.",
  sameAs: [
    "https://www.instagram.com/graftscope",
    "https://www.linkedin.com/company/graftscope",
    "https://www.facebook.com/graftscope"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Graftscope Insights",
  url: SITE_URL,
  description: "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["tr", "en", "de"]
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Graftscope Blog",
  description:
    "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri.",
  url: `${SITE_URL}`,
  publisher: {
    "@type": "Organization",
    name: "Graftscope",
    url: SITE_URL,
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "GraftScope",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  "offers": {
    "@type": "Offer",
    "price": "179",
    "priceCurrency": "EUR"
  }
};

const jsonLd = [
  organizationSchema,
  webSiteSchema,
  blogSchema,
  softwareApplicationSchema,
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="alternate" hrefLang="tr" href="https://www.graftscope.org" />
        <link rel="alternate" hrefLang="en" href="https://www.graftscope.org/en" />
        <link rel="alternate" hrefLang="de" href="https://www.graftscope.org/de" />
        <link rel="alternate" hrefLang="x-default" href="https://www.graftscope.org" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2J0631XKKF"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2J0631XKKF');
            `,
          }}
        />
        <SchemaMarkup schema={generateOrganizationSchema()} />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
