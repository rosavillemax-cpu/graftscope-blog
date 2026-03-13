import type { Metadata } from "next";

const SITE_URL = "https://www.graftscope.com/blog";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hair Transplant Clinic Software | GraftScope",
    template: "%s | GraftScope Blog",
  },
  description: "Hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      'tr': `${SITE_URL}/`,
      'en': `${SITE_URL}/en`,
      'de': `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/`,
    }
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
