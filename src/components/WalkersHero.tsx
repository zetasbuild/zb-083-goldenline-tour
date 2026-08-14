'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';

interface WalkersHeroProps {
  onExploreClick: () => void;
}

export const WalkersHero: React.FC<WalkersHeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full filter brightness-95 scale-105 transition-transform duration-1000"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>
        {/* Top Dark Gradient for Navigation Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/35 to-black/75 z-10" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Top Script Text */}
        <span 
          className="font-caveat text-4xl sm:text-5xl md:text-6xl text-[#e5dbcc] mb-[-10px] sm:mb-[-15px] z-10 rotate-[-2deg]"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
        >
          Uncover the Magic of
        </span>
        
        {/* Huge Serif Main Title */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6">
          SRI LANKA
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Premium tours, unforgettable experiences and reliable travel services.
        </p>

        {/* Circular Next Button in Walkers Tours Style */}
        <button
          onClick={onExploreClick}
          className="next-btn next-btn--white group cursor-pointer"
        >
          <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
            <ArrowRight className="w-4 h-4 text-[#002b49] group-hover:translate-x-0.5 transition-transform" />
          </div>
          <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
        </button>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest mb-1">Scroll</span>
        <div className="w-0.5 h-6 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};
