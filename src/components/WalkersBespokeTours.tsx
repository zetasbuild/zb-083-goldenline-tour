'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface WalkersBespokeToursProps {
  onPlanTrip: () => void;
}

export const WalkersBespokeTours: React.FC<WalkersBespokeToursProps> = ({ onPlanTrip }) => {
  return (
    <section id="bespoke" className="py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#002b49] leading-tight mb-6">
              <span className="font-bold">Tailor-made</span><br />
              Bespoke Tours
            </h2>

            <h3 className="text-base sm:text-lg font-bold text-[#002b49] mb-3">
              Create your perfect Sri Lankan adventure with us…
            </h3>

            <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed mb-8">
              Tailor-made tours are our hallmark specialty at Ceylon Journeys. For decades, we have been crafting bespoke Sri Lankan journeys tailored to individual client requests. Our expert planners and guides ensure every guest enjoys a truly unique, seamless, and personalized experience.
            </p>

            <button
              onClick={onPlanTrip}
              className="next-btn next-btn--blue group cursor-pointer"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Plan Your Tour</span>
            </button>
          </div>

          {/* Right Dual Overlapping Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl z-10 w-full sm:w-4/5 ml-auto group">
              <Image
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Luxury Highlands Sri Lanka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Small Overlapping Foreground Image */}
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-60 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
              <Image
                src="/images/sigiriya.jpg"
                alt="Sigiriya Heritage Journey"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
