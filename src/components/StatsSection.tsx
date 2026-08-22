'use client';

import React from 'react';
import Image from 'next/image';
import { STATS } from '@/data/travelData';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/mirissa.jpg"
          alt="Sri Lanka Tropical Coastline"
          fill
          className="object-cover object-center filter brightness-90"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#072118]/85 via-[#D4AF37]/75 to-[#072118]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F5F2E6]/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/15 hover:border-[#FFDF00]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFDF00] mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white/90 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
