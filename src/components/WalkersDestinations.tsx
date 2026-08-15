'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { DESTINATIONS } from '@/data/travelData';
import { Destination } from '@/types';

interface WalkersDestinationsProps {
  onSelectDestination?: (dest: Destination) => void;
}

export const WalkersDestinations: React.FC<WalkersDestinationsProps> = () => {
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
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="destinations" className="pt-10 pb-10 lg:pt-16 lg:pb-16 bg-white relative overflow-x-clip overflow-y-visible">
      {/* Background Watermark Text */}
      <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[#f4f7f6]">destinations</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-0">
        {/* Centered Header matching Tour Packages UI */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Explore the Wonder of
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002b49] mb-3 mt-1">
            Destinations in Sri Lanka
          </h2>
          <p className="text-[#55697a] sm:text-base leading-relaxed">
            Discover the breathtaking beauty, ancient heritage, and hidden tropical paradises across our beautiful island.
          </p>
        </div>

        {/* Actions & Navigation */}
        <div className="flex justify-end items-center w-full mb-3">
          {/* Explore Button */}
          <Link 
            href="/destinations"
            className="next-btn next-btn--blue group cursor-pointer"
          >
            <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all duration-300">
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#002b49]">Explore</span>
          </Link>
        </div>

        {/* Destinations Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations?q=${encodeURIComponent(dest.name)}`}
              className="hover-box group flex-shrink-0 w-[260px] sm:w-[290px] h-[400px] sm:h-[440px] cursor-pointer snap-start rounded-2xl overflow-hidden relative block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
