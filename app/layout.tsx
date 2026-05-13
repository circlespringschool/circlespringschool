import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Circle Spring Academy | Quality Education in Thika, Kenya",
    template: "%s | Circle Spring Academy",
  },
  description:
    "Circle Spring Academy in Salama Estate, Thika offers quality education with holistic development. Top educational academy in Salama Estate area with excellent academic programs.",
  keywords: [
    "Circle Spring Academy",
    "Salama Estate Thika",
    "Thika schools",
    "education Kenya",
    "best schools in Thika",
    "quality education Nairobi",
    "educational academy",
    "CBC curriculum",
  ],
  authors: [{ name: "Circle Spring Academy" }],
  openGraph: {
    title: "Circle Spring Academy | Quality Education in Thika, Kenya",
    description:
      "Quality education with holistic development in Salama Estate, Thika",
    url: "https://www.circlespringschool.co.ke",
    siteName: "Circle Spring Academy",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/images/logo-BBA39KOS.webp",
        width: 1200,
        height: 630,
        alt: "Circle Spring Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle Spring Academy",
    description: "Best Educational Academy in Salama Estate, Thika Kenya",
  },
  icons: {
    icon: "/images/logo-BBA39KOS.webp",
  },
  metadataBase: new URL("https://www.circlespringschool.co.ke"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#A9203E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", poppins.variable, montserrat.variable)}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
