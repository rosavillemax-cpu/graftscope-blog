import { getPricingUrl } from "@/lib/getPricingUrl";
import { redirect } from "next/navigation";

export default function PricingPage() {
  redirect(getPricingUrl("tr"));
}

export const metadata = {
  title: "Fiyatlandırma | GraftScope",
  description: "GraftScope saç ekimi klinik yönetim yazılımı fiyatlandırma seçenekleri.",
};
