"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  GraduationCap,
  Laptop,
  Languages,
  Medal,
  Check,
  Star,
  CalendarCheck,
  Music,
  Trophy,
  ChessKnight,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { HeroCarousel } from "@/components/hero-carousel";
import { siteConfig } from "@/lib/constants";

const heroImages = [
  { src: "/images/hero.webp", alt: "Students at Circle Spring Academy" },
  { src: "/images/hero2.webp", alt: "Learning environment" },
  { src: "/images/hero3.webp", alt: "Campus life" },
];

export function HomeContent() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden text-white min-h-screen flex items-center">
        <HeroCarousel images={heroImages} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance font-heading">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed text-pretty">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-deep-carmine hover:bg-vivid-burgundy text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {t.hero.applyNow}
                <ChevronRight className="size-5" />
              </Link>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {siteConfig.stats.yearsExperience}
              </div>
              <div className="text-sm opacity-90">{t.stats.yearsExperience}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {siteConfig.stats.students}
              </div>
              <div className="text-sm opacity-90">{t.stats.students}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {siteConfig.stats.successRate}
              </div>
              <div className="text-sm opacity-90">{t.stats.successRate}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {siteConfig.stats.qualifiedStaff}
              </div>
              <div className="text-sm opacity-90">{t.stats.qualifiedStaff}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mt-8 bg-white rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="size-8 text-deep-carmine mr-3" />
                <h2 className="text-2xl font-bold text-charcoal font-heading">
                  {t.academics.title}
                </h2>
              </div>
              <p className="text-slate-gray mb-4">{t.academics.cbcDescription}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-deep-carmine">
                  <Laptop className="size-4 text-deep-carmine mr-2" />
                  <span className="text-charcoal font-medium">
                    {t.academics.ictProgram}
                  </span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-deep-carmine">
                  <Languages className="size-4 text-deep-carmine mr-2" />
                  <span className="text-charcoal font-medium">
                    {t.academics.frenchLanguage}
                  </span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full border border-deep-carmine">
                  <Medal className="size-4 text-deep-carmine mr-2" />
                  <span className="text-charcoal font-medium">
                    {t.academics.karateTraining}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pre School */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="bg-deep-carmine h-48 flex items-center justify-center relative">
                <Image
                  src="/images/early.webp"
                  alt="Pre School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {t.academics.preSchool}
                </h3>
                <p className="text-slate-gray mb-4">{t.academics.preSchoolDesc}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2">
                    {t.academics.keyFocusAreas}
                  </h4>
                  <ul className="text-slate-gray text-sm flex flex-col gap-1">
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.languageCommunication}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.environmentalActivities}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.creativeActivities}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/academics"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.academics.learnMore} &rarr;
                </Link>
              </div>
            </div>

            {/* Lower Primary */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="bg-deep-carmine h-48 flex items-center justify-center relative">
                <Image
                  src="/images/lab.webp"
                  alt="Lower Primary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {t.academics.lowerPrimary}
                </h3>
                <p className="text-slate-gray mb-4">
                  {t.academics.lowerPrimaryDesc}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2">
                    {t.academics.specialFeatures}
                  </h4>
                  <ul className="text-slate-gray text-sm flex flex-col gap-1">
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.readingPhonics}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.practicalMath}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.artCraft}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/academics"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.academics.learnMore} &rarr;
                </Link>
              </div>
            </div>

            {/* Upper Primary */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="bg-deep-carmine h-48 flex items-center justify-center relative">
                <Image
                  src="/images/enrichment.webp"
                  alt="Upper Primary"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {t.academics.upperPrimary}
                </h3>
                <p className="text-slate-gray mb-4">
                  {t.academics.upperPrimaryDesc}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-charcoal mb-2">
                    {t.academics.featuredPrograms}
                  </h4>
                  <ul className="text-slate-gray text-sm flex flex-col gap-1">
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.karateSelfDefense}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.codingRobotics}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="size-3 text-deep-carmine mt-1" />
                      <span>{t.academics.musicPerformingArts}</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/academics"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.academics.learnMore} &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Enrichment Programs */}
          <div className="mt-16 bg-muted rounded-xl p-8 text-charcoal">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
                {t.enrichment.title}
              </h3>
              <p className="text-xl max-w-3xl mx-auto">{t.enrichment.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/50 rounded-lg">
                <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Music className="size-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{t.enrichment.ballet}</h4>
                <p className="text-charcoal">{t.enrichment.balletDesc}</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-lg">
                <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Medal className="size-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">
                  {t.enrichment.taekwondo}
                </h4>
                <p className="text-charcoal">{t.enrichment.taekwondoDesc}</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-lg">
                <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <Trophy className="size-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">
                  {t.enrichment.brassBand}
                </h4>
                <p className="text-charcoal">{t.enrichment.brassBandDesc}</p>
              </div>

              <div className="text-center p-6 bg-white/50 rounded-lg">
                <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <ChessKnight className="size-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">
                  {t.enrichment.chessClub}
                </h4>
                <p className="text-charcoal">{t.enrichment.chessDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.admissions.title}
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              {t.admissions.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Admissions Process */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <CalendarCheck className="size-6 text-deep-carmine" />
                {t.admissions.processTitle}
              </h3>
              <p className="text-slate-gray mb-6">{t.admissions.processDesc}</p>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.submitInquiry}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.scheduleTour}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.completeApplication}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.studentAssessment}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.enrollment}
                  </span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-deep-carmine hover:bg-vivid-burgundy text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
              >
                {t.admissions.applyNow}
              </Link>
            </div>

            {/* Scholarships */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                <GraduationCap className="size-6 text-deep-carmine" />
                {t.admissions.scholarshipsTitle}
              </h3>
              <p className="text-slate-gray mb-6">
                {t.admissions.scholarshipsDesc}
              </p>
              <ul className="flex flex-col gap-3 mb-6">
                <li className="flex items-start gap-3">
                  <Star className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.academicExcellence}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.artsSports}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.financialAid}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="size-5 text-deep-carmine mt-0.5" />
                  <span className="text-slate-gray">
                    {t.admissions.siblingDiscounts}
                  </span>
                </li>
              </ul>
              <Link
                href="/academics"
                className="bg-deep-carmine hover:bg-vivid-burgundy text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
              >
                {t.academics.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.news.title}
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              {t.news.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="/images/annualsports.webp"
                  alt="Interclasses Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-deep-carmine font-medium mb-2">
                  Sports
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Annual Sports Day 2024
                </h3>
                <p className="text-slate-gray mb-4">
                  Students competed in various athletic events showcasing their
                  skills and teamwork.
                </p>
                <Link
                  href="/activities"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.news.readMore} &rarr;
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="/images/culture.webp"
                  alt="Cultural Day"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-deep-carmine font-medium mb-2">
                  Culture
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Cultural Day Celebration
                </h3>
                <p className="text-slate-gray mb-4">
                  A vibrant celebration of Kenya&apos;s diverse cultural heritage through
                  music, dance, and traditional attire.
                </p>
                <Link
                  href="/activities"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.news.readMore} &rarr;
                </Link>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition duration-300">
              <div className="h-48 relative">
                <Image
                  src="/images/fair.webp"
                  alt="Science Fair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-deep-carmine font-medium mb-2">
                  Academics
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Science Fair Projects
                </h3>
                <p className="text-slate-gray mb-4">
                  Students showcased innovative science projects demonstrating
                  their understanding of scientific concepts.
                </p>
                <Link
                  href="/academics"
                  className="text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  {t.news.readMore} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-gray italic text-center mb-6">
                &quot;Circle Spring has transformed our children&apos;s educational
                journey. The teachers are dedicated and caring, and the CBC
                curriculum prepares students for future success.&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="size-12 bg-deep-carmine rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  MN
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Mary Njoroge</div>
                  <div className="text-deep-carmine text-sm">
                    Parents of Grade 3 Student
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-gray italic text-center mb-6">
                &quot;The teachers go above and beyond, and the small class sizes
                ensure each child gets personalized attention. We are so
                grateful for the six years he spent here in Thika.&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="size-12 bg-deep-carmine rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  JK
                </div>
                <div>
                  <div className="font-semibold text-charcoal">Jane Kamau</div>
                  <div className="text-deep-carmine text-sm">
                    Parent of Alumni
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-5 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-gray italic text-center mb-6">
                &quot;As new residents in Salama Estate, we were worried about
                finding the right school. Circle Spring exceeded our
                expectations with their warm welcome and excellent
                communication.&quot;
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="size-12 bg-deep-carmine rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  DO
                </div>
                <div>
                  <div className="font-semibold text-charcoal">David Ochieng</div>
                  <div className="text-deep-carmine text-sm">
                    Parent of Grade 1 Student
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
