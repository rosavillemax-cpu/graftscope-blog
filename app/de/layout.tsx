import type { Metadata } from "next";

const SITE_URL = "https://www.clinixglow.com/blog";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Haartransplantations-Software | ClinixGlow",
    template: "%s | ClinixGlow Blog",
  },
  description: "Haartransplantations-Klinikmanagement-Software mit CRM, KI-Analyse, Terminsystem und Enterprise-Dashboard.",
  alternates: {
    canonical: `${SITE_URL}/de`,
    languages: {
      'tr': `${SITE_URL}/`,
      'en': `${SITE_URL}/en`,
      'de': `${SITE_URL}/de`,
      'x-default': `${SITE_URL}/en`,
    }
  },
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
