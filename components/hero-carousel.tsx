"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number;
}

export function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((image, idx) => (
        <div
          key={idx}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            activeSlide === idx ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/80" />
        </div>
      ))}
    </div>
  );
}
