import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";
import CookieConsent from "../components/CookieConsent";
import { generateOrganizationSchema } from "@/lib/schema";

const SITE_URL = "https://www.graftscope.com/blog";

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
    default: "Hair Transplant Clinic Software | GraftScope",
    template: "%s | GraftScope – Hair Transplant Clinic Software",
  },
  description:
    "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard. Built for clinics in Turkey, UK and Germany.",
  keywords: [
    "hair transplant",
    "clinic management",
    "CRM",
    "hair transplant software",
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png', 
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Graftscope | Hair Transplant Clinic Software Guide",
    description:
      "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard. Built for clinics in Turkey, UK and Germany.",
    url: SITE_URL,
    siteName: "Graftscope",
    locale: "en_US",
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
    canonical: `${SITE_URL}/en`,
    languages: {
      'tr': `${SITE_URL}/`,
      'en': `${SITE_URL}/en`,
      'de': `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/en`,
    }
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Graftscope",
  url: SITE_URL,
  logo: `${SITE_URL}/graftscope-logo.png`,
  description:
    "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
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
  url: `${SITE_URL}/en`,
  description: "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/en?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "inLanguage": ["tr", "en", "de"]
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Graftscope Blog",
  description:
    "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  url: `${SITE_URL}/en`,
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
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
        <div style={{ overflowX: 'hidden' }}>
          {children}
          <CookieConsent />
          <Footer />
        </div>
      </body>
    </html>
  );
}
