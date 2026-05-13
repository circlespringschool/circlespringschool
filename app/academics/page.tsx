import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AcademicsContent } from "@/components/academics-content";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Explore our comprehensive CBC curriculum programs for Pre-School, Lower Primary, and Upper Primary students at Circle Spring Academy.",
};

export default function AcademicsPage() {
  return (
    <LanguageProvider>
      <Header />
      <AcademicsContent />
      <Footer />
    </LanguageProvider>
  );
}
