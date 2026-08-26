'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/data/travelData';

export const WhyUsAndTestimonials: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const highlights = [
    'Best Price Guarantee',
    'Safe & Reliable Travel',
    'Professional Local Guides',
    '24/7 Customer Support',
  ];

  return (
    <section id="why-us" className="py-20 bg-[#F5F2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Why Travel With Us + Image Collage */}
          <div data-reveal="fade-right" data-reveal-duration="850" className="lg:col-span-6 flex flex-col items-start">
            <span className="font-script text-3xl sm:text-4xl text-[#d49a37] font-semibold tracking-wide mb-4 inline-block w-max">
              Why Travel With Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072118] tracking-tight leading-tight mb-4">
              We Make Your Journey<br className="hidden sm:inline" /> Extraordinary
            </h2>
            <p className="text-sm text-[#4a6358] leading-relaxed mb-6">
              We are committed to providing exceptional travel experiences with the best service, comfort, and unforgettable memories across the teardrop island of Sri Lanka.
            </p>

            {/* Checklist */}
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#edf7f2] flex items-center justify-center text-[#D4AF37] shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#18382d]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Aesthetic Sri Lanka Image Collage */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* Top Main Image */}
              <div className="col-span-2 relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md group hover-lift">
                <Image
                  src="/images/locations/hero-ella.webp"
                  alt="Scenic Ella Train Sri Lanka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-semibold">
                  Scenic Mountain Railways
                </div>
              </div>

              {/* Bottom Left: Elephant / Wildlife */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md group hover-lift">
                <Image
                  src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80"
                  alt="Wild Elephant Sri Lanka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 left-3 text-white text-[11px] font-semibold">
                  Wildlife Safaris
                </div>
              </div>

              {/* Bottom Right: Mirissa Tropical Beach */}
              <div className="relative h-32 sm:h-36 rounded-2xl overflow-hidden shadow-md group hover-lift">
                <Image
                  src="/images/locations/mirissa.webp"
                  alt="Mirissa Beach Coastline"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-2 left-3 text-white text-[11px] font-semibold">
                  Pristine Tropical Beaches
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: What Our Travelers Say & Testimonial Carousel */}
          <div data-reveal="fade-left" data-reveal-duration="850" data-reveal-delay="200" className="lg:col-span-6 flex flex-col items-start justify-center">
            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-[#e9f4ef] px-3 py-1 rounded-full mb-3 inline-block">
              WHAT OUR TRAVELERS SAY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072118] tracking-tight leading-tight mb-8">
              Trusted by Thousands
            </h2>

            {/* Testimonial Card */}
            <div className="w-full bg-[#fafdfc] border border-[#e2ede7] rounded-3xl p-7 sm:p-9 shadow-lg relative flex flex-col justify-between min-h-[300px]">
              {/* Decorative Quote Mark */}
              <div className="text-[#D4AF37]/15 mb-4">
                <Quote className="w-10 h-10 fill-[#D4AF37]/10 text-[#D4AF37]" />
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-[#243e34] leading-relaxed font-normal mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info + Rating */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFDF00] shadow-sm">
                    <Image
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#D4AF37]">
                      {currentTestimonial.author}
                    </h4>
                    <div className="text-xs text-gray-500 font-medium">
                      {currentTestimonial.country} · <span className="text-[#D4AF37]">{currentTestimonial.tourTaken}</span>
                    </div>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFDF00] text-[#FFDF00]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center space-x-2 w-full mt-6">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonialIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentTestimonialIndex === idx
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
