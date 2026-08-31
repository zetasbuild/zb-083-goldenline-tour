'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface WalkersIntroProps {
  onAboutClick: () => void;
}

const LEFT_IMAGES = [
  {
    src: '/images/locations/sigiriya.webp',
    alt: 'Sigiriya Rock Fortress Sri Lanka',
    caption: 'Sigiriya Fortress',
  },
  {
    src: '/images/locations/hero-ella.webp',
    alt: 'Nine Arch Bridge Ella Sri Lanka',
    caption: 'Nine Arch Bridge, Ella',
  },
  {
    src: '/images/locations/wildlife.webp',
    alt: 'Wildlife Safari in Yala National Park',
    caption: 'Yala Safari Naturalist',
  },
  {
    src: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    alt: 'Kandy Sacred Temple & Cultural Triangle',
    caption: 'Cultural Triangle',
  },
];

const RIGHT_IMAGES = [
  {
    src: '/images/locations/mirissa.webp',
    alt: 'Mirissa Tropical Beach Coastline',
    caption: 'Mirissa Beach Coast',
  },
  {
    src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80',
    alt: 'Galle Dutch Fort Lighthouse Coast',
    caption: 'Galle Dutch Fort',
  },
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    alt: 'Bentota Golden Sand Palm Beach',
    caption: 'Bentota Golden Sands',
  },
  {
    src: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=800&q=80',
    alt: 'Nuwara Eliya Misty Tea Hills',
    caption: 'Highland Tea Valleys',
  },
];

export const WalkersIntro: React.FC<WalkersIntroProps> = ({ onAboutClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % LEFT_IMAGES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F5F2E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Portrait Image (Auto Changing with Cross-Fade) */}
          <div data-reveal="fade-right" data-reveal-duration="850" className="md:col-span-3">
            <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg group bg-[#181513] hover-lift">
              {LEFT_IMAGES.map((img, index) => {
                const isActive = activeSlide === index;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Content */}
          <div data-reveal="fade-up" data-reveal-delay="150" className="md:col-span-6 px-0 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] -rotate-2 mb-2 inline-block w-max"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Why Travel With Us
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
              We Make Your Journey Extraordinary
            </h2>

            <p className="text-gray-600 sm:text-lg leading-relaxed mb-8">
              We are committed to providing exceptional travel experiences with the best service, comfort, and unforgettable memories.
            </p>

            <ul data-reveal-stagger className="space-y-4 mb-8 w-full">
              {[
                'Best Price Guarantee',
                'Safe & Reliable Travel',
                'Professional Local Guides',
                '24/7 Customer Support',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base font-semibold text-[var(--color-primary)]">
                  <div className="w-6 h-6 rounded-full bg-[#f4f7f6] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#cba258]" strokeWidth={2.5} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full justify-start border-t border-gray-100 pt-4">
              {/* Circular Next Button */}
              <button
                onClick={onAboutClick}
                className="next-btn next-btn--blue group cursor-pointer shrink-0 hover:scale-105 transition-transform"
              >
                <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#C85A32] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">About Us</span>
              </button>
            </div>
          </div>

          {/* Right Portrait Image (Auto Changing with Cross-Fade) */}
          <div data-reveal="fade-left" data-reveal-duration="850" data-reveal-delay="200" className="md:col-span-3 hidden md:block">
            <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg group bg-[#181513] hover-lift">
              {RIGHT_IMAGES.map((img, index) => {
                const isActive = activeSlide === index;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 pointer-events-none z-0'
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="25vw"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
