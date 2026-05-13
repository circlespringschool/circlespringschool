"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function ContactContent() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px]">
        <Image
          src="/images/school2.webp"
          alt="Contact Circle Spring Academy"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
              {t.contactUs}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              {language === "en" 
                ? "We'd love to hear from you. Get in touch with us today."
                : "Tungependa kusikia kutoka kwako. Wasiliana nasi leo."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-primary">
                {language === "en" ? "Get In Touch" : "Wasiliana Nasi"}
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === "en" ? "Location" : "Mahali"}
                    </h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === "en" ? "Phone" : "Simu"}
                    </h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
                    <p className="text-muted-foreground">{CONTACT_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === "en" ? "Email" : "Barua pepe"}
                    </h3>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {language === "en" ? "Office Hours" : "Saa za Ofisi"}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === "en" 
                        ? "Monday - Friday: 8:00 AM - 5:00 PM"
                        : "Jumatatu - Ijumaa: 8:00 AM - 5:00 PM"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "en" 
                        ? "Saturday: 9:00 AM - 1:00 PM"
                        : "Jumamosi: 9:00 AM - 1:00 PM"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">
                  {language === "en" ? "Follow Us" : "Tufuate"}
                </h3>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = socialIcons[social.name as keyof typeof socialIcons]
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary/10 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.name}
                      >
                        <Icon />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="text-2xl font-bold mb-6 font-serif text-primary">
                {language === "en" ? "Send Us a Message" : "Tutumie Ujumbe"}
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto mb-4 text-green-600" size={64} />
                  <h3 className="text-2xl font-bold mb-2">
                    {language === "en" ? "Message Sent!" : "Ujumbe Umetumwa!"}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "en" 
                      ? "Thank you for contacting us. We'll get back to you soon."
                      : "Asante kwa kuwasiliana nasi. Tutawasiliana nawe hivi karibuni."}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2 text-primary border border-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {language === "en" ? "Send Another Message" : "Tuma Ujumbe Mwingine"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Full Name" : "Jina Kamili"} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder={language === "en" ? "John Doe" : "Jina Lako"}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {language === "en" ? "Email Address" : "Barua Pepe"} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {language === "en" ? "Phone Number" : "Nambari ya Simu"}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      {language === "en" ? "Subject" : "Somo"} *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">{language === "en" ? "Select a subject" : "Chagua somo"}</option>
                      <option value="admissions">{language === "en" ? "Admissions Inquiry" : "Maswali ya Udahili"}</option>
                      <option value="academics">{language === "en" ? "Academic Information" : "Taarifa za Masomo"}</option>
                      <option value="fees">{language === "en" ? "Fees & Payments" : "Ada na Malipo"}</option>
                      <option value="visit">{language === "en" ? "School Visit" : "Kutembelea Shule"}</option>
                      <option value="other">{language === "en" ? "Other" : "Mengine"}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {language === "en" ? "Message" : "Ujumbe"} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder={language === "en" ? "Write your message here..." : "Andika ujumbe wako hapa..."}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full border-2 border-primary-foreground border-t-transparent size-5" />
                        {language === "en" ? "Sending..." : "Inatuma..."}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {language === "en" ? "Send Message" : "Tuma Ujumbe"}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif text-primary">
              {language === "en" ? "Find Us" : "Tutafute"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Located in the heart of Kikuyu, easily accessible from Nairobi and surrounding areas."
                : "Iko katikati ya Kikuyu, inaweza kufikika kwa urahisi kutoka Nairobi na maeneo ya jirani."}
            </p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.018839127771!2d36.66858287486074!3d-1.2441289356293892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f0b6c1e8a89%3A0x4c7f9a5a5a5a5a5a!2sKikuyu%2C%20Kenya!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Circle Spring Academy Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            {language === "en" ? "Visit Our Campus" : "Tembelea Chuo Chetu"}
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            {language === "en"
              ? "Experience the Circle Spring Academy difference firsthand. Schedule a campus tour today and see why we're the best choice for your child's education."
              : "Pata uzoefu wa tofauti ya Circle Spring Academy. Panga ziara ya chuo leo na uone kwa nini sisi ni chaguo bora kwa elimu ya mtoto wako."}
          </p>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-primary rounded-full hover:bg-white/90 transition-colors"
          >
            <Phone size={20} />
            {language === "en" ? "Call Us Now" : "Tupigie Sasa"}
          </a>
        </div>
      </section>
    </main>
  )
}
