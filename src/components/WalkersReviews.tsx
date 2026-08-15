'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const WalkersReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      title: 'Wonderful Family Trip to Sri Lanka',
      text: 'Wonderful family trip to Sri Lanka. We were a multi-generational group and our chauffeur guide was able to navigate our interests seamlessly. He was extremely knowledgeable about the sites and provided great suggestions to enhance our experience all the time. For example, he suggested we do a scenic train trip in Ella for a few stops which allowed the kids to experience the journey without the full 8-hour trip. Overall, an incredible experience using Ceylon Journeys!',
      author: 'Shalini Castelli and Family',
      origin: 'United Kingdom',
      tour: '14-Day Bespoke Family Adventure',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      title: 'A Delightful Stay & Exceptional Chauffeur Service',
      text: 'Ceylon Journeys arranged all our transport and private tours in Sri Lanka. The vehicle was an immaculate luxury SUV with high comfort for long mountain stretches. Our driver was also a certified naturalist who shared deep historical context for every temple and fortress. All vehicles and drivers were of an exceptional five-star standard.',
      author: 'Joe & Margaret Richardson',
      origin: 'Australia',
      tour: 'Cultural Triangle & Coastlines',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      title: 'Unforgettable 10-Day Wildlife and Tea Hills Tour',
      text: 'The tour was exceptionally well-organized from the moment we landed at Colombo airport. Our guides answered all our questions and showed genuine warmth. We felt completely safe and nothing was too much trouble for this team. They even organized a surprise birthday cake and celebration for our daughter in Kandy! A holiday we will never forget.',
      author: 'Karin De Silva & Friends',
      origin: 'Canada',
      tour: 'Highlands & Yala Safari',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto Slider functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <section className="pt-16 pb-24 lg:pt-20 lg:pb-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reviws-bg.webp"
          alt="Sri Lanka scenery"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Soft Dark Overlay to ensure high contrast and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/90 via-[#001726]/65 to-[#001726]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Watermark */}
        <div className="text-center mb-2 sm:mb-4 overflow-hidden pointer-events-none select-none">
          <span 
            className="watermark-text"
            style={{ color: 'rgba(255, 255, 255, 0.08)' }}
          >
            real stories
          </span>
        </div>

        {/* Section Heading */}
        <div data-reveal="fade-up" className="text-center mb-12 relative z-10">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Discover Their
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 mt-2 drop-shadow-sm">
            Real Experiences
          </h2>
        </div>

        {/* Translucent Glass Review Box Container */}
        <div data-reveal="zoom-in" data-reveal-duration="900" className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl relative text-white">
          <div className="flex justify-center mb-6 relative">
            <Quote className="w-12 h-12 text-white/15 fill-white/10 absolute -top-4 -left-4" />
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-[3px] border-white/80 shadow-lg relative z-10">
                <img src={currentReview.avatar} alt={currentReview.author} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white text-center mb-4 leading-snug">
            "{currentReview.title}"
          </h3>

          <p className="text-sm sm:text-base text-gray-200 text-center leading-relaxed font-light mb-8 max-w-3xl mx-auto italic">
            {currentReview.text}
          </p>

          <div className="text-center border-t border-white/20 pt-6">
            <div className="font-serif text-base font-bold text-white">
              — {currentReview.author} —
            </div>
            <div className="text-xs text-gray-300 mt-1">
              {currentReview.origin} · <span className="text-[#8ed1fc] font-medium">{currentReview.tour}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-3 right-3 pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-black/40 border border-white/30 text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-[#002b49] transition-all pointer-events-auto cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-black/40 border border-white/30 text-white flex items-center justify-center shadow-lg hover:bg-white hover:text-[#002b49] transition-all pointer-events-auto cursor-pointer backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#8ed1fc]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
