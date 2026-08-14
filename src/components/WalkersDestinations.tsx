'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { DESTINATIONS } from '@/data/travelData';
import { Destination } from '@/types';

interface WalkersDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export const WalkersDestinations: React.FC<WalkersDestinationsProps> = ({
  onSelectDestination,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto Slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollRef.current.scrollLeft >= maxScrollLeft - 10) {
          // If we reached the end, snap back to the beginning
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, slide right
          scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="destinations" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[#f4f7f6]">destinations</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Header matching Tour Packages UI */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002b49] mb-6">
            Destinations in Sri Lanka
          </h2>
          <p className="text-[#55697a] sm:text-lg leading-relaxed">
            Discover the breathtaking beauty, ancient heritage, and hidden tropical paradises across our beautiful island.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end items-center gap-3 mb-6">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous destination"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#002b49] hover:border-[#002b49] hover:text-white text-[#002b49] shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next destination"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-[#002b49] hover:border-[#002b49] hover:text-white text-[#002b49] shadow-sm flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Destinations Carousel (Same Tall Card UI) */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="hover-box group flex-shrink-0 w-[260px] sm:w-[290px] h-[400px] sm:h-[440px] cursor-pointer snap-start rounded-2xl overflow-hidden relative"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover hover-box__img"
                sizes="(max-width: 640px) 260px, 290px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Card Footer Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end z-10">
                <div className="border-b border-white/30 pb-4 mb-4 group-hover:border-white transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#8ed1fc] font-bold tracking-widest uppercase mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.region}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-none">
                    {dest.name}
                  </h3>
                </div>

                <div className="next-btn next-btn--white">
                  <div className="next-btn-circle group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#002b49]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
