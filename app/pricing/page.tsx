import { getPricingUrl } from "@/lib/getPricingUrl";
import { redirect } from "next/navigation";

export default function PricingPage() {
  redirect(getPricingUrl("tr"));
}

export const metadata = {
  title: "Fiyatlandırma | ClinixGlow",
  description: "ClinixGlow saç ekimi klinik yönetim yazılımı fiyatlandırma seçenekleri.",
};
