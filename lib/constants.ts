export const siteConfig = {
  name: "Circle Spring Academy",
  phone: "+254 0111 427 110",
  phoneClean: "+2540111427110",
  email: "circlespringschool@gmail.com",
  address: "Salama Estate, Thika",
  region: "Kiambu",
  country: "Kenya",
  website: "https://www.circlespringschool.co.ke",
  socialLinks: {
    facebook: "https://www.facebook.com/circlespringschool",
    instagram: "https://www.instagram.com/circlespringschool",
    twitter: "#",
    linkedin: "#",
  },
  whatsappMessage:
    "Hello Circle Spring Academy, I'm interested in learning more about your school.",
  hours: {
    weekdays: "8:00AM - 4:00PM",
    weekends: "Closed",
  },
  stats: {
    yearsExperience: "6+",
    students: "500+",
    successRate: "98%",
    qualifiedStaff: "25+",
  },
} as const;

export const CONTACT_INFO = {
  // Used by `components/contact-content.tsx`
  address: `${siteConfig.address}, ${siteConfig.region}`,
  phone: siteConfig.phoneClean,
  phone2: "",
  email: siteConfig.email,
} as const;

export const SOCIAL_LINKS = [
  { name: "facebook", url: siteConfig.socialLinks.facebook },
  { name: "instagram", url: siteConfig.socialLinks.instagram },
  { name: "twitter", url: siteConfig.socialLinks.twitter },
  // Brand icons in your Lucide version may not include YouTube, but the UI expects this key.
  { name: "youtube", url: "#" },
] as const;
