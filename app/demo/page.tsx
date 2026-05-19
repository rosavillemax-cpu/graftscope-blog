import type { Metadata } from "next";
import Header from "@/app/components/Header";
import DemoForm from "./DemoForm";

export const metadata: Metadata = {
  title: "Free Demo – Hair Transplant Clinic CRM & Software | ClinixGlow",
  description: "Request a free demo of ClinixGlow - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <DemoForm />
    </>
  );
}
