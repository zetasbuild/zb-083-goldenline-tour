'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface SlideItem {
  image: string;
  alt?: string;
  location?: string;
}

interface BackgroundAutoSliderProps {
  slides?: SlideItem[];
  intervalMs?: number;
  showIndicators?: boolean;
  className?: string;
  overlayGradient?: string;
}

const DEFAULT_SLIDES: SlideItem[] = [
  {
    image: '/images/sigiriya.jpg',
    alt: 'Sigiriya Ancient Rock Citadel at Sunrise',
    location: 'Sigiriya Rock Fortress',
  },
  {
    image: '/images/hero-ella.jpg',
    alt: 'Nine Arch Bridge & Scenic Mountain Railway Ella',
    location: 'Ella Highlands',
  },
  {
    image: '/images/mirissa.jpg',
    alt: 'Pristine Golden Sand Tropical Beaches of Mirissa',
    location: 'Mirissa & South Coast',
  },
  {
    image: '/images/nuwaraeliya.jpg',
    alt: 'Lush Emerald Tea Estates of Nuwara Eliya',
    location: 'Tea Country Highlands',
  },
  {
    image: '/images/yala.jpg',
    alt: 'Wild Elephant Gathering & Leopard Safari in Yala',
    location: 'Yala National Park Safari',
  },
  {
    image: '/images/gallefort.png',
    alt: 'Historic Galle Lighthouse and Dutch Coastal Fort',
    location: 'Galle Fort Heritage',
  },
];

export const BackgroundAutoSlider: React.FC<BackgroundAutoSliderProps> = ({
  slides = DEFAULT_SLIDES,
  intervalMs = 4500,
  showIndicators = true,
  className = '',
  overlayGradient = 'bg-gradient-to-b from-black/80 via-black/45 to-[#041B2D]',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [slides.length, intervalMs]);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Slide Images with Ken-Burns and Cross-fade */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.image + idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-1' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt || `Sri Lanka Landscape Slide ${idx + 1}`}
              fill
              priority={idx === 0}
              className={`object-cover object-center filter brightness-90 transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-108' : 'scale-100'
              }`}
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* Dark Luxury Contrast Overlay */}
      <div className={`absolute inset-0 ${overlayGradient} z-10`} />

      {/* Optional Interactive Mini Indicators */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 z-20 flex items-center gap-2 pointer-events-auto">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${slide.location || slide.alt}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-8 h-1.5 bg-[#cba258] shadow-sm'
                    : 'w-2 h-1.5 bg-[#F5F2E6]/40 hover:bg-[#F5F2E6]/80'
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
