"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, Palette, Users, Dribbble, Music, Book, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function StudentLifeContent() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-deep-carmine to-vivid-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            {t.studentLife.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-pretty">
            {t.studentLife.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sports */}
            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine/10 size-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="size-10 text-deep-carmine" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {t.studentLife.sports}
              </h3>
              <p className="text-slate-gray">{t.studentLife.sportsDesc}</p>
            </div>

            {/* Arts */}
            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine/10 size-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="size-10 text-deep-carmine" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {t.studentLife.arts}
              </h3>
              <p className="text-slate-gray">{t.studentLife.artsDesc}</p>
            </div>

            {/* Clubs */}
            <div className="bg-white p-8 rounded-xl border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine/10 size-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="size-10 text-deep-carmine" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                {t.studentLife.clubs}
              </h3>
              <p className="text-slate-gray">{t.studentLife.clubsDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Gallery */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              Sports & Athletics
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              Our comprehensive sports program develops physical fitness,
              teamwork, and competitive spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/sports.webp"
                alt="Sports at Circle Spring"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Dribbble className="size-5" />
                  <h4 className="font-bold text-lg">Football</h4>
                </div>
                <p className="text-sm text-white/80">Team sports and competitions</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/annualsports.webp"
                alt="Annual Sports Day"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="size-5" />
                  <h4 className="font-bold text-lg">Athletics</h4>
                </div>
                <p className="text-sm text-white/80">Track and field events</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/images/studentlife.webp"
                alt="Student Activities"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="size-5" />
                  <h4 className="font-bold text-lg">Team Sports</h4>
                </div>
                <p className="text-sm text-white/80">Building teamwork skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arts & Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-deep-carmine/10 text-deep-carmine rounded-full text-sm font-semibold mb-4">
                Creative Expression
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
                Arts & Culture
              </h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                Our arts program nurtures creativity and self-expression through
                various mediums including visual arts, music, drama, and cultural
                performances.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <Music className="size-6 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal">Music</h4>
                  <p className="text-sm text-slate-gray">Choir & Instruments</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Palette className="size-6 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal">Visual Arts</h4>
                  <p className="text-sm text-slate-gray">Painting & Crafts</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <Users className="size-6 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal">Drama</h4>
                  <p className="text-sm text-slate-gray">Theater & Acting</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <HeartHandshake className="size-6 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal">Cultural</h4>
                  <p className="text-sm text-slate-gray">Traditional Dance</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/culture.webp"
                alt="Cultural activities"
                width={300}
                height={200}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="/images/studentlife0.webp"
                alt="Student activities"
                width={300}
                height={200}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="/images/studentlife1.webp"
                alt="Student performance"
                width={300}
                height={200}
                className="rounded-lg object-cover h-48 w-full"
              />
              <Image
                src="/images/fair.webp"
                alt="School fair"
                width={300}
                height={200}
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              Clubs & Societies
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              A variety of clubs that cater to diverse interests and help students
              discover new passions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Book className="size-8 text-deep-carmine mb-4" />
              <h4 className="font-bold text-charcoal mb-2">Debate Club</h4>
              <p className="text-slate-gray text-sm">
                Develop public speaking and critical thinking skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Users className="size-8 text-deep-carmine mb-4" />
              <h4 className="font-bold text-charcoal mb-2">Scouts</h4>
              <p className="text-slate-gray text-sm">
                Leadership, outdoor skills, and community service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <HeartHandshake className="size-8 text-deep-carmine mb-4" />
              <h4 className="font-bold text-charcoal mb-2">Environment Club</h4>
              <p className="text-slate-gray text-sm">
                Conservation and environmental awareness activities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Palette className="size-8 text-deep-carmine mb-4" />
              <h4 className="font-bold text-charcoal mb-2">Art Club</h4>
              <p className="text-slate-gray text-sm">
                Creative expression through various art forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-carmine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Experience Student Life at Circle Spring
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a visit to see our vibrant campus community in action.
          </p>
          <Link
            href="/contact"
            className="bg-white text-deep-carmine font-bold py-4 px-8 rounded-full inline-block hover:bg-muted transition"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </main>
  );
}
