'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, Compass } from 'lucide-react';

interface WalkersBrandsExperiencesProps {
  onSelectBrand: (brandName: string) => void;
}

export const WalkersBrandsExperiences: React.FC<WalkersBrandsExperiencesProps> = ({
  onSelectBrand,
}) => {
  const brands = [
    {
      id: 'luxury',
      badge: 'Artisan in Travel',
      title: 'Curating Luxury',
      icon: Sparkles,
      desc: 'Experts in tailor-made luxury travel, crafting bespoke journeys that highlight Sri Lanka’s culture, authenticity, and hospitality while offering discerning travelers immersive and off-beat experiences with refined elegance.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Luxury Travel',
    },
    {
      id: 'wellness',
      badge: 'Curating Your',
      title: 'Healing Journey',
      icon: Heart,
      desc: 'Ayu combines traditional Ayurveda wellness, mindful meditation, and medical rejuvenation, prioritizing holistic health, tranquility, and personalized therapies for every type of traveler.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Wellness Travel',
    },
    {
      id: 'adventure',
      badge: 'Escape the',
      title: 'Ordinary Explorer',
      icon: Compass,
      desc: 'Experience the wild world, one journey at a time. Where untamed safari tracks, white-water rapids, and misty peaks await at every turn. Escape the ordinary and discover paths only few dare to take.',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
      ctaText: 'Adventure Travel',
    },
  ];

  return (
    <section id="experiences" className="py-20 lg:py-28 bg-[#F5F2E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div data-reveal="fade-up" className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[var(--color-primary)] leading-tight mb-4">
            A Symphony of <br />
            <span className="font-bold">Exclusive Experiences</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed">
            GoldenLine TOUR offers dedicated signature brands specializing in luxury, holistic wellness, accessible tourism, and raw adventure.
          </p>
        </div>

        {/* 3 Brand Experience Cards */}
        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => {
            const Icon = brand.icon;
            return (
              <div
                key={brand.id}
                onClick={() => onSelectBrand(brand.title)}
                className="bg-[#f7fafc] rounded-3xl p-6 sm:p-8 border border-[#e2edf2] hover:border-[var(--color-primary)]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover-lift"
              >
                <div>
                  {/* Brand Image Preview */}
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-gray-200">
                    <Image
                      src={brand.image}
                      alt={brand.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[#F5F2E6]/90 backdrop-blur-md flex items-center justify-center text-[var(--color-primary)] shadow-sm">
                      <Icon className="w-4 h-4 text-[#0077b6]" />
                    </div>
                  </div>

                  <span className="text-xs uppercase tracking-widest text-[#0077b6] font-bold block mb-1">
                    {brand.badge}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] leading-snug mb-3">
                    {brand.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55697a] leading-relaxed mb-6">
                    {brand.desc}
                  </p>
                </div>

                <div className="next-btn next-btn--blue pt-4 border-t border-gray-200/60">
                  <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">{brand.ctaText}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
