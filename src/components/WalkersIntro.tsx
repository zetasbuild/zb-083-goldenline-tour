'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface WalkersIntroProps {
  onAboutClick: () => void;
}

export const WalkersIntro: React.FC<WalkersIntroProps> = ({ onAboutClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Column Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Portrait Image */}
          <div className="md:col-span-3">
            <div className="relative h-[400px] sm:h-[480px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/sigiriya.jpg"
                alt="Sigiriya Fortress Sri Lanka"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Center Content Matching 1st Image */}
          <div className="md:col-span-6 px-0 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-3 block">
              Why Travel With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-5 leading-tight">
              We Make Your Journey Extraordinary
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-8">
              We are committed to providing exceptional travel experiences with the best service, comfort, and unforgettable memories.
            </p>

            <ul className="space-y-4 mb-10 w-full">
              {[
                'Best Price Guarantee',
                'Safe & Reliable Travel',
                'Professional Local Guides',
                '24/7 Customer Support',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#cba258]" strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full justify-between border-t border-gray-100 pt-8 mt-2">
              <span className="font-caveat text-4xl text-[#cba258] -rotate-2" style={{ fontFamily: 'var(--font-caveat), cursive' }}>
                Ceylon Journeys Team
              </span>
              
              {/* Circular Next Button */}
              <button
                onClick={onAboutClick}
                className="next-btn next-btn--blue group cursor-pointer shrink-0"
              >
                <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">About Us</span>
              </button>
            </div>
          </div>

          {/* Right Portrait Image */}
          <div className="md:col-span-3 hidden md:block">
            <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/images/mirissa.jpg"
                alt="Mirissa Tropical Beach Coastline"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
