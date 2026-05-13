import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StudentLifeContent } from "@/components/student-life-content"

export const metadata: Metadata = {
  title: "Student Life | Circle Spring Academy",
  description: "Experience the vibrant student life at Circle Spring Academy. Explore our boarding facilities, daily activities, and supportive community environment.",
  openGraph: {
    title: "Student Life | Circle Spring Academy",
    description: "Experience the vibrant student life at Circle Spring Academy.",
    images: ["/images/students1.webp"],
  },
}

export default function StudentLifePage() {
  return (
    <>
      <Header />
      <StudentLifeContent />
      <Footer />
    </>
  )
}
