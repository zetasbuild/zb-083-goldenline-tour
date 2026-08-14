'use client';

import React from 'react';
import Image from 'next/image';
import { Play, Award, Clock, Compass, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo }) => {
  return (
    <section id="home" className="relative min-h-[580px] lg:min-h-[640px] pt-24 lg:pt-28 pb-32 flex items-center overflow-hidden">
      {/* Scenic Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero-ella.jpg"
          alt="Nine Arch Bridge Ella Sri Lanka"
          fill
          priority
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          sizes="100vw"
        />
        {/* Soft gradient overlay to ensure text contrast while retaining lush colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:via-white/70 sm:w-2/3 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/10 opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-8 flex flex-col items-start z-10">
            {/* Script overline */}
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="font-script text-3xl sm:text-4xl text-[#0e382b] font-medium tracking-wide">
                Uncover the Magic of
              </span>
            </div>

            {/* Grand Title */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black text-[#072118] tracking-tight leading-[1.05] mb-4">
              SRI LANKA
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#324b40] max-w-xl font-normal leading-relaxed mb-8">
              Premium tours, unforgettable experiences and reliable travel services tailored to create lifetime memories.
            </p>

            {/* 4 Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2 border-t border-[#0e382b]/10 w-full max-w-2xl">
              {/* Badge 1 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0e382b]/5 border border-[#0e382b]/15 flex items-center justify-center text-[#0e382b] shrink-0">
                  <Award className="w-4 h-4 text-[#e5a83b]" />
                </div>
                <div className="text-xs font-semibold text-[#18362b] leading-snug">
                  Best Price<br /><span className="text-gray-500 font-normal">Guarantee</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0e382b]/5 border border-[#0e382b]/15 flex items-center justify-center text-[#0e382b] shrink-0">
                  <Clock className="w-4 h-4 text-[#0e382b]" />
                </div>
                <div className="text-xs font-semibold text-[#18362b] leading-snug">
                  24/7<br /><span className="text-gray-500 font-normal">Support</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0e382b]/5 border border-[#0e382b]/15 flex items-center justify-center text-[#0e382b] shrink-0">
                  <Compass className="w-4 h-4 text-[#e5a83b]" />
                </div>
                <div className="text-xs font-semibold text-[#18362b] leading-snug">
                  Local Expert<br /><span className="text-gray-500 font-normal">Guides</span>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#0e382b]/5 border border-[#0e382b]/15 flex items-center justify-center text-[#0e382b] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#0e382b]" />
                </div>
                <div className="text-xs font-semibold text-[#18362b] leading-snug">
                  Trusted &amp;<br /><span className="text-gray-500 font-normal">Safe Travel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating "Watch Video" Trigger Badge */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <button
              onClick={onOpenVideo}
              className="group flex items-center gap-3.5 bg-white/80 hover:bg-white backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-11 h-11 bg-[#0e382b]/20 rounded-full animate-ping opacity-75" />
                <div className="w-10 h-10 rounded-full bg-[#0e382b] text-white flex items-center justify-center shadow-md group-hover:bg-[#165b40] transition-colors">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#0e382b] group-hover:text-[#165b40]">
                  Watch Video
                </div>
                <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1">
                  <span>Sri Lanka Awaits</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e5a83b]" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
