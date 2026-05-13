import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeContent } from "@/components/home-content";

export default function HomePage() {
  return (
    <LanguageProvider>
      <Header />
      <HomeContent />
      <Footer />
    </LanguageProvider>
  );
}
