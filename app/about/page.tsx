import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/about-content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Circle Spring Academy in Salama Estate, Thika - a premier educational institution offering quality primary education since 2020.",
};

export default function AboutPage() {
  return (
    <LanguageProvider>
      <Header />
      <AboutContent />
      <Footer />
    </LanguageProvider>
  );
}
