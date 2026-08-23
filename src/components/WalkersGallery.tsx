'use client';

import React from 'react';
import Image from 'next/image';

export const WalkersGallery: React.FC = () => {
  const images = Array.from({ length: 11 }, (_, i) => `/images/${i + 1}.jpeg`);

  return (
    <section className="pt-10 pb-6 lg:pt-16 lg:pb-8 bg-[#F5F2E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-12">
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Memories of
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-3 mt-1">
            Our Happy Guests
          </h2>
          <p className="text-[#55697a] sm:text-base leading-relaxed">
            Beautiful moments captured by our travelers during their unforgettable journeys across Sri Lanka.
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-4 pr-4 min-w-max group-hover:[animation-play-state:paused]">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Guest memory ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-4 pr-4 min-w-max group-hover:[animation-play-state:paused]" aria-hidden="true">
          {images.map((src, index) => (
            <div
              key={`dup-${index}`}
              className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={src}
                alt={`Guest memory ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
