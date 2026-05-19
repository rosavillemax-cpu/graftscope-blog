import { getPricingUrl } from "@/lib/getPricingUrl";
import { redirect } from "next/navigation";

export default function PricingPage() {
  redirect(getPricingUrl("de"));
}

export const metadata = {
  title: "Preise | ClinixGlow",
  description: "ClinixGlow Haartransplantationsklinik Management Software Preisoptionen.",
};
