"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Book,
  Calculator,
  Palette,
  Medal,
  Code,
  Music,
  Languages,
  Laptop,
  Check,
  ChevronRight,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function AcademicsContent() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-deep-carmine to-vivid-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            {t.academics.title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-pretty">
            {t.academics.cbcDescription}
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              Our Academic Programs
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              Comprehensive CBC-aligned programs tailored for every stage of your
              child&apos;s development
            </p>
          </div>

          {/* Program Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pre School */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition duration-300">
              <div className="h-56 relative">
                <Image
                  src="/images/early.webp"
                  alt="Pre School Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-deep-carmine px-3 py-1 rounded-full text-sm font-medium">
                    Ages 3-5
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  {t.academics.preSchool}
                </h3>
                <p className="text-slate-gray mb-4">{t.academics.preSchoolDesc}</p>

                <h4 className="font-semibold text-charcoal mb-3">
                  {t.academics.keyFocusAreas}
                </h4>
                <ul className="flex flex-col gap-2 mb-4">
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Check className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.languageCommunication}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Check className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.environmentalActivities}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Check className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.creativeActivities}
                  </li>
                </ul>

                <div className="flex items-center gap-4 text-sm text-slate-gray mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>15-20 per class</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>8AM - 12PM</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  Enroll Now
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Lower Primary */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition duration-300">
              <div className="h-56 relative">
                <Image
                  src="/images/lab.webp"
                  alt="Lower Primary Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-deep-carmine px-3 py-1 rounded-full text-sm font-medium">
                    Ages 6-8
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  {t.academics.lowerPrimary}
                </h3>
                <p className="text-slate-gray mb-4">
                  {t.academics.lowerPrimaryDesc}
                </p>

                <h4 className="font-semibold text-charcoal mb-3">
                  {t.academics.specialFeatures}
                </h4>
                <ul className="flex flex-col gap-2 mb-4">
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Book className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.readingPhonics}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Calculator className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.practicalMath}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Palette className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.artCraft}
                  </li>
                </ul>

                <div className="flex items-center gap-4 text-sm text-slate-gray mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>20-25 per class</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>8AM - 3PM</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  Enroll Now
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>

            {/* Upper Primary */}
            <div className="bg-white rounded-xl overflow-hidden border border-border hover:shadow-xl transition duration-300">
              <div className="h-56 relative">
                <Image
                  src="/images/enrichment.webp"
                  alt="Upper Primary Program"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-deep-carmine px-3 py-1 rounded-full text-sm font-medium">
                    Ages 9-11
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-charcoal mb-3">
                  {t.academics.upperPrimary}
                </h3>
                <p className="text-slate-gray mb-4">
                  {t.academics.upperPrimaryDesc}
                </p>

                <h4 className="font-semibold text-charcoal mb-3">
                  {t.academics.featuredPrograms}
                </h4>
                <ul className="flex flex-col gap-2 mb-4">
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Medal className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.karateSelfDefense}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Code className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.codingRobotics}
                  </li>
                  <li className="flex items-center gap-2 text-slate-gray">
                    <Music className="size-4 text-deep-carmine flex-shrink-0" />
                    {t.academics.musicPerformingArts}
                  </li>
                </ul>

                <div className="flex items-center gap-4 text-sm text-slate-gray mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>25-30 per class</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>8AM - 4PM</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-deep-carmine font-semibold hover:text-vivid-burgundy transition"
                >
                  Enroll Now
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CBC Curriculum Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-deep-carmine/10 text-deep-carmine rounded-full text-sm font-semibold mb-4">
                CBC Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading">
                Competency-Based Curriculum
              </h2>
              <p className="text-lg text-slate-gray mb-6 leading-relaxed">
                The Competency-Based Curriculum (CBC) focuses on developing skills,
                knowledge, attitudes, and values that prepare learners for life.
                Our implementation emphasizes practical application and real-world
                problem-solving.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <GraduationCap className="size-8 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal mb-1">
                    Academic Excellence
                  </h4>
                  <p className="text-sm text-slate-gray">
                    Strong foundation in core subjects
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Award className="size-8 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal mb-1">
                    Values Integration
                  </h4>
                  <p className="text-sm text-slate-gray">
                    Character development and ethics
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Code className="size-8 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal mb-1">
                    Digital Literacy
                  </h4>
                  <p className="text-sm text-slate-gray">
                    Technology integration in learning
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <Users className="size-8 text-deep-carmine mb-2" />
                  <h4 className="font-semibold text-charcoal mb-1">
                    Collaborative Learning
                  </h4>
                  <p className="text-sm text-slate-gray">
                    Teamwork and communication skills
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/school-life.webp"
                alt="Students learning with CBC"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.enrichment.title}
            </h2>
            <p className="text-xl text-slate-gray max-w-2xl mx-auto">
              {t.enrichment.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Music className="size-7" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">
                {t.enrichment.ballet}
              </h4>
              <p className="text-slate-gray text-sm">{t.enrichment.balletDesc}</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Medal className="size-7" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">
                {t.enrichment.taekwondo}
              </h4>
              <p className="text-slate-gray text-sm">
                {t.enrichment.taekwondoDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Music className="size-7" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">
                {t.enrichment.brassBand}
              </h4>
              <p className="text-slate-gray text-sm">
                {t.enrichment.brassBandDesc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition text-center">
              <div className="bg-deep-carmine size-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <GraduationCap className="size-7" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-2">
                {t.enrichment.chessClub}
              </h4>
              <p className="text-slate-gray text-sm">{t.enrichment.chessDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-deep-carmine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Circle Spring Academy and give your child the foundation for a
            successful future.
          </p>
          <Link
            href="/contact"
            className="bg-white text-deep-carmine font-bold py-4 px-8 rounded-full inline-block hover:bg-muted transition"
          >
            {t.admissions.applyNow}
          </Link>
        </div>
      </section>
    </main>
  );
}
