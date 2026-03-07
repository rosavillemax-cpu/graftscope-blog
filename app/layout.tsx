import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://graftscope.org";

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
    default: "Graftscope | Saç Ekim Klinikleri İçin Rehber",
    template: "%s | Graftscope",
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
  logo: `${SITE_URL}/og-image.jpg`,
  description:
    "Saç ekim klinikleri için klinik yönetimi, hasta büyümesi ve sektör analizleri.",
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

const jsonLd = [
  organizationSchema,
  blogSchema,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
