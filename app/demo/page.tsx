import type { Metadata } from "next";
import Header from "@/app/components/Header";
import DemoForm from "./DemoForm";

export const metadata: Metadata = {
  title: "Free Demo – Hair Transplant Clinic CRM & Software | GraftScope",
  description: "Request a free demo of GraftScope - the all-in-one hair transplant clinic management software with CRM, AI analysis, appointment system and enterprise dashboard.",
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="max-w-xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Request a Free Demo for Your Clinic</h1>
        <p className="text-gray-600 mb-8">
          In a 30-minute introductory session, we will show you how GraftScope can add value to your clinic.
        </p>
        <DemoForm />
      </main>
    </>
  );
}
