"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/constants";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-platinum text-charcoal py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Image
              src="/images/logo-BBA39KOS.webp"
              alt="Circle Spring Academy Logo"
              width={64}
              height={64}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-slate-gray mb-6">{t.footer.description}</p>
            <div className="flex gap-4">
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-charcoal hover:bg-deep-carmine hover:border-deep-carmine hover:text-white size-10 rounded-full flex items-center justify-center transition"
              >
                <ExternalLink className="size-4" />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                className="border border-charcoal hover:bg-deep-carmine hover:border-deep-carmine hover:text-white size-10 rounded-full flex items-center justify-center transition"
              >
                <ExternalLink className="size-4" />
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-charcoal hover:bg-deep-carmine hover:border-deep-carmine hover:text-white size-10 rounded-full flex items-center justify-center transition"
              >
                <ExternalLink className="size-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                className="border border-charcoal hover:bg-deep-carmine hover:border-deep-carmine hover:text-white size-10 rounded-full flex items-center justify-center transition"
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.nav.academics}
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.nav.activities}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.programs}</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/academics"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.footer.preschool}
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.footer.lowerPrimary}
                </Link>
              </li>
              <li>
                <Link
                  href="/academics"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.footer.upperPrimary}
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {t.footer.enrichmentPrograms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contactInfo}</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 text-deep-carmine mt-0.5 flex-shrink-0" />
                <span className="text-charcoal">
                  {siteConfig.address}, {siteConfig.region}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-5 text-deep-carmine mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-5 text-deep-carmine mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}?subject=Inquiry%20from%20Website`}
                  className="text-charcoal hover:text-deep-carmine transition"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-5 text-deep-carmine mt-0.5 flex-shrink-0" />
                <span className="text-charcoal">{t.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-gray text-center">
          <p className="text-charcoal">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
