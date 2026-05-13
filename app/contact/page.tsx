import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Circle Spring Academy",
  description: "Get in touch with Circle Spring Academy. Contact us for admissions, inquiries, or to schedule a campus visit. Located in Kikuyu, Kenya.",
  openGraph: {
    title: "Contact Us | Circle Spring Academy",
    description: "Get in touch with Circle Spring Academy for admissions and inquiries.",
    images: ["/images/school2.webp"],
  },
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <Header />
      <ContactContent />
      <Footer />
    </LanguageProvider>
  )
}
