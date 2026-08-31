'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface WalkersBespokeToursProps {
  onPlanTrip: () => void;
}

export const WalkersBespokeTours: React.FC<WalkersBespokeToursProps> = ({ onPlanTrip }) => {
  return (
    <section id="bespoke" className="py-20 lg:py-28 bg-[#F5F2E6] border-t border-[#E7E0D0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div data-reveal="fade-right" data-reveal-duration="850" className="lg:col-span-6">
            <div>
              <span 
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Tailored Journeys
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                Craft Your Perfect<br />Ceylon Holiday
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6B635B] font-normal leading-relaxed mb-8">
              Every traveler is unique. Whether you wish to explore undiscovered wild safari corridors, unwind in colonial tea bungalows, or track down the finest street food in Pettah, our travel specialists design an itinerary tailored precisely to your schedule, preferences, and desires.
            </p>
            <button
              onClick={onPlanTrip}
              className="next-btn next-btn--blue group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#C85A32] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Plan Your Bespoke Tour</span>
            </button>
          </div>

          {/* Right Dual Overlapping Photography */}
          <div data-reveal="fade-left" data-reveal-duration="850" data-reveal-delay="200" className="lg:col-span-7 relative">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl z-10 w-full sm:w-4/5 ml-auto group hover-lift">
              <Image
                src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                alt="Bespoke Luxury Highlands Sri Lanka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>

            {/* Small Overlapping Foreground Image */}
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-60 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group hover-lift">
              <Image
                src="/images/locations/sigiriya.webp"
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
