'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, ArrowRight, MapPin } from 'lucide-react';
import { DESTINATIONS } from '@/data/travelData';
import { Destination } from '@/types';

interface DestinationsSectionProps {
  onSelectDestination: (dest: Destination) => void;
  onViewAll: () => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onSelectDestination,
  onViewAll,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-20 bg-[#fbfdfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
          {/* Left Intro Block */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-[#e9f4ef] px-3 py-1 rounded-full mb-3">
              POPULAR DESTINATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072118] tracking-tight leading-tight mb-3">
              Explore The Beauty<br className="hidden sm:inline" /> of Sri Lanka
            </h2>
            <p className="text-sm text-[#4a6358] leading-relaxed mb-6">
              Sri Lanka is a paradise filled with breathtaking landscapes, rich ancient culture, golden sandy shores, and unforgettable experiences.
            </p>
            <button
              onClick={onViewAll}
              className="bg-[#D4AF37] hover:bg-[#AA8C2C] text-white px-6 py-3 rounded-full text-xs font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 text-[#FFDF00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Cards Carousel Header & Controls */}
          <div className="lg:col-span-8 flex justify-end items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous destinations"
              className="w-10 h-10 rounded-full border border-gray-200 bg-[#F5F2E6] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] text-gray-700 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next destinations"
              className="w-10 h-10 rounded-full border border-gray-200 bg-[#F5F2E6] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] text-gray-700 flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Destination Cards Row */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex space-x-5 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group relative flex-shrink-0 w-[240px] sm:w-[270px] h-[360px] sm:h-[390px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer snap-start"
            >
              {/* Background Image with smooth zoom */}
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 240px, 270px"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/90 transition-colors duration-300" />

              {/* Top Tag & Rating Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#F5F2E6]/90 backdrop-blur-md text-[#D4AF37]">
                  {dest.subtitle}
                </span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-[#FFDF00] text-[#FFDF00]" />
                  <span>{dest.rating}</span>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end text-white z-10">
                <div className="flex items-center gap-1.5 text-xs text-[#FFDF00] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{dest.region}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide leading-snug group-hover:text-[#f3c26d] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
