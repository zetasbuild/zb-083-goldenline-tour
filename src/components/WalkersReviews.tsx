'use client';

import React, { useState } from 'react';
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
    },
    {
      title: 'A Delightful Stay & Exceptional Chauffeur Service',
      text: 'Ceylon Journeys arranged all our transport and private tours in Sri Lanka. The vehicle was an immaculate luxury SUV with high comfort for long mountain stretches. Our driver was also a certified naturalist who shared deep historical context for every temple and fortress. All vehicles and drivers were of an exceptional five-star standard.',
      author: 'Joe & Margaret Richardson',
      origin: 'Australia',
      tour: 'Cultural Triangle & Coastlines',
    },
    {
      title: 'Unforgettable 10-Day Wildlife and Tea Hills Tour',
      text: 'The tour was exceptionally well-organized from the moment we landed at Colombo airport. Our guides answered all our questions and showed genuine warmth. We felt completely safe and nothing was too much trouble for this team. They even organized a surprise birthday cake and celebration for our daughter in Kandy! A holiday we will never forget.',
      author: 'Karin De Silva & Friends',
      origin: 'Canada',
      tour: 'Highlands & Yala Safari',
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
    <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Watermark */}
        <div className="text-center -mb-8 sm:-mb-14 overflow-hidden">
          <span className="watermark-text">real stories</span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#002b49]">
            <span className="font-bold">Real Experiences</span>
          </h2>
        </div>

        {/* Review Box Container */}
        <div className="max-w-4xl mx-auto bg-[#f8fbfa] border border-[#e2ede7] rounded-3xl p-8 sm:p-12 shadow-lg relative">
          <div className="flex justify-center mb-4 text-[#0077b6]">
            <Quote className="w-10 h-10 fill-[#0077b6]/15" />
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#002b49] text-center mb-4">
            "{currentReview.title}"
          </h3>

          <p className="text-sm sm:text-base text-[#4a6358] text-center leading-relaxed font-light mb-8 max-w-3xl mx-auto italic">
            {currentReview.text}
          </p>

          <div className="text-center border-t border-gray-200/80 pt-6">
            <div className="font-serif text-base font-bold text-[#002b49]">
              — {currentReview.author} —
            </div>
            <div className="text-xs text-gray-500 mt-0.5">
              {currentReview.origin} · <span className="text-[#0077b6] font-medium">{currentReview.tour}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-3 right-3 pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#002b49] flex items-center justify-center shadow-md hover:bg-[#002b49] hover:text-white transition-all pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 text-[#002b49] flex items-center justify-center shadow-md hover:bg-[#002b49] hover:text-white transition-all pointer-events-auto cursor-pointer"
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
                currentIndex === idx ? 'w-8 bg-[#002b49]' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
