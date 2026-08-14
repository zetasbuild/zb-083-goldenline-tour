'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Globe, Trees } from 'lucide-react';

interface WalkersSustainabilityProps {
  onExplore: () => void;
}

export const WalkersSustainability: React.FC<WalkersSustainabilityProps> = ({ onExplore }) => {
  return (
    <section id="sustainability" className="py-20 lg:py-28 bg-[#0d3827] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#8ee0bc] text-xs font-bold uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" />
              <span>Responsible Travel</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6">
              <span className="font-bold">Travel Smart,</span><br />
              Tread Lightly
            </h2>

            <h3 className="text-base sm:text-lg font-bold text-[#8ee0bc] mb-3">
              Join us in our responsible journey to give back to mother earth…
            </h3>

            <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed mb-8">
              With care for our communities and biodiversity at the core of our operation, we are committed to operating Asia’s first certified Carbon-Neutral vehicle fleet, minimizing single-use plastics, and supporting village reforestation projects across Sri Lanka.
            </p>

            <button
              onClick={onExplore}
              className="next-btn next-btn--white group cursor-pointer"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ee0bc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#0d3827] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Learn More</span>
            </button>
          </div>

          {/* Right Column: Dual Images */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80"
                  alt="Reforestation and Tea Estates"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                  Eco-Certified Highlands
                </div>
              </div>

              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl group hidden sm:block mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80"
                  alt="Wildlife Conservation Sri Lanka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-xs font-semibold text-white">
                  Wild Animal Protection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
