import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ActivitiesContent } from "@/components/activities-content"

export const metadata: Metadata = {
  title: "Activities | Circle Spring Academy",
  description: "Explore the diverse co-curricular activities at Circle Spring Academy including sports, music, drama, arts, clubs, and cultural programs.",
  openGraph: {
    title: "Activities | Circle Spring Academy",
    description: "Explore the diverse co-curricular activities at Circle Spring Academy.",
    images: ["/images/Music.webp"],
  },
}

export default function ActivitiesPage() {
  return (
    <LanguageProvider>
      <Header />
      <ActivitiesContent />
      <Footer />
    </LanguageProvider>
  )
}
