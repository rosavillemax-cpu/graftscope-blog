import { getPricingUrl } from "@/lib/getPricingUrl";
import { redirect } from "next/navigation";

export default function PricingPage() {
  redirect(getPricingUrl("en"));
}

export const metadata = {
  title: "Pricing | GraftScope",
  description: "GraftScope hair transplant clinic management software pricing options.",
};
