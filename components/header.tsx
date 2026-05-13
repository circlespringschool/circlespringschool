"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  X,
  ChevronDown,
  Menu,
  Globe,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/academics", labelKey: "academics" },
  { href: "/student-life", labelKey: "studentLife" },
  { href: "/activities", labelKey: "activities" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
] as const;

export function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Admission Banner */}
      {showBanner && (
        <div className="bg-deep-carmine text-white">
          <div className="container mx-auto px-3 py-2">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                <p className="text-sm font-medium whitespace-nowrap truncate">
                  {t.banner.admissionsOngoing}
                </p>

                {/* Phone Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-sm font-medium transition duration-200 whitespace-nowrap flex-shrink-0"
                  >
                    <Phone className="size-3" />
                    <span className="hidden sm:inline">{siteConfig.phone}</span>
                    <span className="sm:hidden">{t.banner.contact}</span>
                    <ChevronDown className="size-3" />
                  </button>

                  {contactDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-muted"
                        onClick={() => setContactDropdownOpen(false)}
                      >
                        <Phone className="size-4 text-green-500" />
                        {t.banner.callNow}
                      </a>
                      <a
                        href={`https://wa.me/${siteConfig.phoneClean.replace("+", "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-muted"
                        onClick={() => setContactDropdownOpen(false)}
                      >
                        <MessageCircle className="size-4 text-green-500" />
                        WhatsApp
                      </a>
                      <a
                        href={`sms:${siteConfig.phoneClean}?body=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-charcoal hover:bg-muted"
                        onClick={() => setContactDropdownOpen(false)}
                      >
                        <MessageCircle className="size-4 text-green-500" />
                        SMS
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowBanner(false)}
                className="text-white/80 hover:text-white transition flex-shrink-0 ml-2"
              >
                <div className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-sm">
                  <X className="size-3" />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-BBA39KOS.webp"
            alt="Circle Spring Academy Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-semibold transition",
                    pathname === link.href
                      ? "text-deep-carmine"
                      : "text-charcoal hover:text-deep-carmine"
                  )}
                >
                  {t.nav[link.labelKey]}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="bg-muted hover:bg-muted/80 text-charcoal px-3 py-1 rounded-md text-sm font-medium transition flex items-center gap-2"
            >
              <span>{language === "en" ? "English" : "Kiswahili"}</span>
              <ChevronDown className="size-3" />
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-2 z-50">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLanguageDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-charcoal hover:bg-muted hover:text-deep-carmine"
                >
                  <Globe className="size-4 text-slate-gray" />
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("sw");
                    setLanguageDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-charcoal hover:bg-muted hover:text-deep-carmine"
                >
                  <Globe className="size-4 text-slate-gray" />
                  Kiswahili
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="bg-muted hover:bg-muted/80 text-charcoal px-2 py-1 rounded text-xs font-medium flex items-center gap-1"
            >
              <span>{language === "en" ? "EN" : "SW"}</span>
              <ChevronDown className="size-3" />
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg py-2 z-50">
                <button
                  onClick={() => {
                    setLanguage("en");
                    setLanguageDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm text-charcoal hover:bg-muted hover:text-deep-carmine text-left"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage("sw");
                    setLanguageDropdownOpen(false);
                  }}
                  className="block w-full px-4 py-2 text-sm text-charcoal hover:bg-muted hover:text-deep-carmine text-left"
                >
                  Kiswahili
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-charcoal hover:text-deep-carmine text-xl transition"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block font-semibold py-2 transition",
                    pathname === link.href
                      ? "text-deep-carmine"
                      : "text-charcoal hover:text-deep-carmine"
                  )}
                >
                  {t.nav[link.labelKey]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
