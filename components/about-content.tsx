"use client";

import Image from "next/image";
import { Award, Target, Eye, Heart, Lightbulb, Shield, Star } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/constants";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-deep-carmine to-vivid-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
            {t.about.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-pretty">
            {t.about.heroSubtitle}
          </p>
          <a
            href="#our-story"
            className="bg-white text-deep-carmine font-bold py-4 px-8 rounded-full inline-block hover:bg-muted transition"
          >
            {t.about.discoverStory}
          </a>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-deep-carmine/10 text-deep-carmine rounded-full text-sm font-semibold mb-4">
                {t.about.ourJourney}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-heading relative">
                {t.about.ourStory}
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-deep-carmine -mb-3"></span>
              </h2>

              <div className="flex flex-col gap-6 mt-8">
                <p className="text-lg text-slate-gray leading-relaxed">
                  {t.about.storyP1}
                </p>
                <p className="text-lg text-slate-gray leading-relaxed">
                  {t.about.storyP2}
                </p>
                <p className="text-lg text-slate-gray leading-relaxed">
                  {t.about.storyP3}
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-carmine mb-2">
                    5+
                  </div>
                  <div className="text-slate-gray">{t.about.yearsExcellence}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-carmine mb-2">
                    {siteConfig.stats.students}
                  </div>
                  <div className="text-slate-gray">{t.about.studentsEnrolled}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-carmine mb-2">
                    {siteConfig.stats.successRate}
                  </div>
                  <div className="text-slate-gray">
                    {t.about.parentSatisfaction}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-deep-carmine mb-2">
                    {siteConfig.stats.qualifiedStaff}
                  </div>
                  <div className="text-slate-gray">{t.stats.qualifiedStaff}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/logo-BBA39KOS.webp"
                  alt="Circle Spring Academy campus"
                  width={400}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.about.missionVision}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6 gap-4">
                <div className="bg-deep-carmine text-white rounded-full size-12 flex items-center justify-center">
                  <Target className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">
                  {t.about.ourMission}
                </h3>
              </div>
              <p className="text-lg text-slate-gray leading-relaxed">
                {t.about.missionStatement}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6 gap-4">
                <div className="bg-deep-carmine text-white rounded-full size-12 flex items-center justify-center">
                  <Eye className="size-6" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">
                  {t.about.ourVision}
                </h3>
              </div>
              <p className="text-lg text-slate-gray leading-relaxed">
                {t.about.visionStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              {t.about.coreValues}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Excellence */}
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-deep-carmine/10 size-16 rounded-full flex items-center justify-center mb-4">
                <Award className="size-8 text-deep-carmine" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">
                {t.about.excellence}
              </h4>
              <p className="text-slate-gray">{t.about.excellenceDesc}</p>
            </div>

            {/* Integrity */}
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-deep-carmine/10 size-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="size-8 text-deep-carmine" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">
                {t.about.integrity}
              </h4>
              <p className="text-slate-gray">{t.about.integrityDesc}</p>
            </div>

            {/* Respect */}
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-deep-carmine/10 size-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="size-8 text-deep-carmine" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">
                {t.about.respect}
              </h4>
              <p className="text-slate-gray">{t.about.respectDesc}</p>
            </div>

            {/* Innovation */}
            <div className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-deep-carmine/10 size-16 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="size-8 text-deep-carmine" />
              </div>
              <h4 className="text-xl font-bold text-charcoal mb-3">
                {t.about.innovation}
              </h4>
              <p className="text-slate-gray">{t.about.innovationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 font-heading">
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-deep-carmine/30">
              {/* 2020 */}
              <div className="mb-8 relative">
                <div className="absolute -left-[41px] size-4 bg-deep-carmine rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="size-5 text-deep-carmine" />
                    <span className="font-bold text-deep-carmine">2020</span>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    Foundation
                  </h4>
                  <p className="text-slate-gray">
                    Circle Spring Academy was founded in Salama Estate, Thika with a
                    vision to provide quality education.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="mb-8 relative">
                <div className="absolute -left-[41px] size-4 bg-deep-carmine rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="size-5 text-deep-carmine" />
                    <span className="font-bold text-deep-carmine">2021</span>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    Growth & Expansion
                  </h4>
                  <p className="text-slate-gray">
                    Expanded our facilities and programs to accommodate more students
                    and introduce new enrichment activities.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="mb-8 relative">
                <div className="absolute -left-[41px] size-4 bg-deep-carmine rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="size-5 text-deep-carmine" />
                    <span className="font-bold text-deep-carmine">2023</span>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    CBC Implementation
                  </h4>
                  <p className="text-slate-gray">
                    Successfully implemented the Competency-Based Curriculum (CBC)
                    across all grade levels.
                  </p>
                </div>
              </div>

              {/* Today */}
              <div className="relative">
                <div className="absolute -left-[41px] size-4 bg-deep-carmine rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="size-5 text-deep-carmine" />
                    <span className="font-bold text-deep-carmine">Today</span>
                  </div>
                  <h4 className="text-xl font-bold text-charcoal mb-2">
                    Continued Excellence
                  </h4>
                  <p className="text-slate-gray">
                    Serving over 500 students with a dedicated team of qualified
                    educators and state-of-the-art facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
