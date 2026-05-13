import { LanguageProvider } from "@/components/language-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeContent } from "@/components/home-content";
import { sanityFetch } from "@/lib/sanity/client";
import { HOMEPAGE_BANNER_QUERY } from "@/lib/sanity/queries";

type HomepageBanner = {
  title?: string;
  subtitle?: string;
  description?: string;
};

export default async function HomePage() {
  const cmsBanner = await sanityFetch<HomepageBanner>(HOMEPAGE_BANNER_QUERY);

  return (
    <LanguageProvider>
      <Header />
      <HomeContent cmsBanner={cmsBanner} />
      <Footer />
    </LanguageProvider>
  );
}
