"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { Music, Palette, Trophy, Users, Tent, Globe } from "lucide-react"

export function ActivitiesContent() {
  const { language } = useLanguage()
  const t = translations[language]

  const activities = [
    {
      icon: Music,
      title: language === "en" ? "Music & Drama" : "Muziki na Drama",
      description: language === "en" 
        ? "Our students express their creativity through choir performances, instrumental music, and dramatic presentations. These activities help develop confidence and artistic expression."
        : "Wanafunzi wetu wanaonyesha ubunifu wao kupitia maonyesho ya kwaya, muziki wa vyombo, na uigizaji wa michezo. Shughuli hizi husaidia kukuza ujasiri na usanii.",
      image: "/images/Music.webp"
    },
    {
      icon: Trophy,
      title: language === "en" ? "Sports" : "Michezo",
      description: language === "en"
        ? "We offer a variety of sports including football, netball, volleyball, and athletics. Our teams regularly participate in inter-school competitions and have won numerous awards."
        : "Tunatoa michezo mbalimbali ikiwa ni pamoja na mpira wa miguu, netiboli, mpira wa wavu, na riadha. Timu zetu hushiriki mara kwa mara katika mashindano ya shule kwa shule na zimeshinda tuzo nyingi.",
      image: "/images/sports.webp"
    },
    {
      icon: Palette,
      title: language === "en" ? "Arts & Crafts" : "Sanaa na Ufundi",
      description: language === "en"
        ? "Students explore their artistic talents through drawing, painting, and traditional crafts. Our art program encourages creativity and cultural appreciation."
        : "Wanafunzi wanachunguza vipaji vyao vya kisanaa kupitia kuchora, kupaka rangi, na ufundi wa jadi. Mpango wetu wa sanaa unahimiza ubunifu na kuthamini utamaduni.",
      image: "/images/students5.webp"
    },
    {
      icon: Users,
      title: language === "en" ? "Clubs & Societies" : "Vilabu na Vyama",
      description: language === "en"
        ? "We have various clubs including Science Club, Debate Club, Environmental Club, and more. These provide opportunities for students to pursue their interests and develop leadership skills."
        : "Tuna vilabu mbalimbali ikiwa ni pamoja na Klabu ya Sayansi, Klabu ya Midahalo, Klabu ya Mazingira, na zaidi. Hizi hutoa fursa kwa wanafunzi kufuata maslahi yao na kukuza ujuzi wa uongozi.",
      image: "/images/students2.webp"
    },
    {
      icon: Tent,
      title: language === "en" ? "Scouts & Guides" : "Skauti na Gaidi",
      description: language === "en"
        ? "Our scouting program teaches essential life skills, teamwork, and outdoor survival techniques. Students participate in camping trips and community service projects."
        : "Mpango wetu wa skauti hufundisha ujuzi muhimu wa maisha, kufanya kazi kwa pamoja, na mbinu za kuishi porini. Wanafunzi hushiriki katika safari za kambi na miradi ya huduma kwa jamii.",
      image: "/images/students4.webp"
    },
    {
      icon: Globe,
      title: language === "en" ? "Cultural Activities" : "Shughuli za Kitamaduni",
      description: language === "en"
        ? "We celebrate Kenya's rich cultural heritage through traditional dances, storytelling, and cultural festivals. Students learn to appreciate and preserve their cultural identity."
        : "Tunasherehekea urithi tajiri wa kitamaduni wa Kenya kupitia ngoma za jadi, hadithi, na sherehe za kitamaduni. Wanafunzi hujifunza kuthamini na kuhifadhi utambulisho wao wa kitamaduni.",
      image: "/images/students3.webp"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="/images/Music.webp"
          alt="Student activities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
              {t.activities}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              {language === "en" 
                ? "Discover the many ways our students grow beyond the classroom"
                : "Gundua njia nyingi ambazo wanafunzi wetu hukua nje ya darasa"}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary">
              {language === "en" ? "Beyond Academics" : "Zaidi ya Masomo"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === "en"
                ? "At Circle Spring Academy, we believe in nurturing the whole child. Our diverse range of co-curricular activities ensures that every student finds their passion and develops essential life skills. From sports to arts, from clubs to cultural activities, there's something for everyone."
                : "Katika Circle Spring Academy, tunaamini katika kukuza mtoto mzima. Anuwai yetu ya shughuli za ziada za mtaala inahakikisha kwamba kila mwanafunzi anapata shauku yake na kukuza ujuzi muhimu wa maisha. Kutoka michezo hadi sanaa, kutoka vilabu hadi shughuli za kitamaduni, kuna kitu kwa kila mtu."}
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <activity.icon className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-serif">
                      {activity.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              {language === "en" ? "Our Achievements" : "Mafanikio Yetu"}
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              {language === "en"
                ? "Our students have excelled in various competitions and events"
                : "Wanafunzi wetu wamefanya vizuri katika mashindano na matukio mbalimbali"}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: language === "en" ? "Sports Awards" : "Tuzo za Michezo" },
              { number: "30+", label: language === "en" ? "Music Competitions" : "Mashindano ya Muziki" },
              { number: "20+", label: language === "en" ? "Drama Festivals" : "Tamasha za Drama" },
              { number: "100+", label: language === "en" ? "Active Club Members" : "Wanachama wa Vilabu" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-primary">
            {language === "en" ? "Join Our Community" : "Jiunge na Jumuiya Yetu"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {language === "en"
              ? "Give your child the opportunity to discover their talents and passions. Enroll at Circle Spring Academy today."
              : "Mpe mtoto wako fursa ya kugundua vipaji na shauku zao. Sajili katika Circle Spring Academy leo."}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            {t.contactUs}
          </a>
        </div>
      </section>
    </main>
  )
}
