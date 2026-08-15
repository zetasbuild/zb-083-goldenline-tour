'use client';

import React from 'react';
import { Plane, Headphones, ShieldCheck, Clock, Hotel } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const WalkersWhyUsCounters: React.FC = () => {
  const iconBoxes = [
    {
      title: 'A 24/7 operating travel counter at the airport',
      icon: Plane,
    },
    {
      title: '24/7 dedicated travel concierge & call center',
      icon: Headphones,
    },
    {
      title: 'Hassle-free, secure, and seamless booking',
      icon: ShieldCheck,
    },
    {
      title: 'Free cancellation up to 24 hours on all transport services',
      icon: Clock,
    },
    {
      title: 'Partnered with over 600 audited luxury & boutique hotels',
      icon: Hotel,
    },
  ];

  const counters = [
    { value: '56+', label: 'Years of Industry Experience' },
    { value: '200+', label: 'Dedicated Staff Members' },
    { value: '300+', label: 'Certified Chauffeur Guides' },
    { value: '600+', label: 'Luxury & Safari Vehicles' },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#f8fbfa] border-y border-[#e2ede7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#002b49] leading-tight">
              <span className="font-bold">Why Book with</span><br />
              Ceylon Journeys?
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed">
              At Ceylon Journeys, we customize each itinerary to fit your exact preferences, ensuring a seamless, safe, and truly unforgettable experience.
            </p>
          </div>
        </div>

        {/* Content Row: Left 5 Icon Boxes + Right 4 Giant Counters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 5 Icon Boxes */}
          <div className="lg:col-span-6 space-y-4">
            {iconBoxes.map((box, idx) => {
              const Icon = box.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#e5eee9] shadow-sm hover:shadow-md hover:border-[#002b49]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e6f3fa] text-[#002b49] group-hover:bg-[#002b49] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#002b49] leading-snug">
                    {box.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: 4 Giant Bold Counter Metric Boxes */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {counters.map((counter, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e5eee9] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-center"
                >
                  <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#002b49] leading-none mb-2">
                    <AnimatedCounter value={counter.value} />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#55697a]">
                    {counter.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
