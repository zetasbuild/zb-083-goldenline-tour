'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, CheckCircle, Quote } from 'lucide-react';

interface ReviewItem {
  author: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
  tour: string;
  date?: string;
}

export const RealTravelerExperiences: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: ReviewItem[] = [
    {
      author: 'Daniel K.',
      location: 'Australia',
      tour: 'Classic Sri Lanka 7 Days',
      text: 'Our trip was perfectly organized from start to finish. Excellent service, friendly team and unforgettable experiences. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'February 2026',
    },
    {
      author: 'Sophie & Liam Martin',
      location: 'United Kingdom',
      tour: 'Highlands & Wildlife Tour',
      text: 'We rented a Toyota Rush with a private chauffeur for 10 days. Chaminda our driver was outstanding! He knew all the secret photography spots and best local tea houses.',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'January 2026',
    },
    {
      author: 'Marco Rossi',
      location: 'Italy',
      tour: 'Cultural Triangle & Beaches',
      text: 'Sri Lanka is magic, and GoldenLine TOUR made it effortless. The private van was pristine, always on time, and the customized itinerary was spot on!',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'December 2025',
    },
    {
      author: 'Elena & Tom',
      location: 'Germany',
      tour: 'Bespoke Honeymoon Tour',
      text: 'A flawless experience. The attention to detail in our custom itinerary was incredible. Our driver was essentially a local guide, friend, and guardian all rolled into one!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'March 2026',
    },
    {
      author: 'James Wilson',
      location: 'USA',
      tour: 'Scenic Escapes Tour',
      text: 'Highly professional service from booking to drop-off. The luxury van we hired for our family of 6 was spacious, spotless, and handled the winding hill country roads perfectly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'November 2025',
    },
    {
      author: 'The Chen Family',
      location: 'Singapore',
      tour: 'Wild Adventures & Safari',
      text: 'We saw leopards, elephants, and bears on our safari. The glamping experience was out of this world, and the guides were true wildlife experts. Thank you GoldenLine TOUR!',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'January 2026',
    },
  ];

  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20);

      // Compute active dot index
      const cardWidth = 400; // approximate width
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), reviews.length - 1));
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 320 : 400;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 320 : 400;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  // Auto Slider functionality with Pause-on-Hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = clientWidth < 640 ? 320 : 400;

        if (scrollLeft + clientWidth >= scrollWidth - 25) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollState, { passive: true });
      return () => el.removeEventListener('scroll', updateScrollState);
    }
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#F5F2E6] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text" style={{ color: 'rgba(4, 27, 45, 0.05)' }}>
          experiences
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Real Traveler Experiences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#041B2D] mb-3 mt-1 leading-tight">
            Loved By Travelers Worldwide
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#cba258] text-[#cba258]" />
              ))}
            </div>
            <span className="text-[#55697a] text-sm sm:text-base font-semibold">
              (4.9/5 Average Rating · 1,500+ Reviews)
            </span>
          </div>
        </div>

        {/* Carousel Controls */}
        <div data-reveal="fade-up" data-reveal-delay="100" className="flex justify-between items-center w-full mb-4 px-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#55697a]">
            Verified Guest Reviews
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous review"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-white border-[#e2ede7] text-[#041B2D] shadow-sm hover:bg-[#041B2D] hover:text-white'
                  : 'bg-white/60 border-gray-200 text-gray-400 cursor-default'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next review"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-[#041B2D] border-[#041B2D] text-white shadow-md hover:bg-[#0077b6]'
                  : 'bg-white/60 border-gray-200 text-gray-400 cursor-default'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Auto Slider Cards Track */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          data-reveal-stagger
          className="flex space-x-5 sm:space-x-6 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#e2ede7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0 w-[300px] sm:w-[370px] md:w-[390px] snap-start relative group"
            >
              <Quote className="w-10 h-10 text-[#cba258]/15 absolute top-6 right-6 pointer-events-none" />

              {/* Stars and Tour Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#cba258] text-[#cba258]" />
                  ))}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#cba258] bg-[#F5F2E6] px-2.5 py-1 rounded-full">
                  Verified Trip
                </span>
              </div>
              
              {/* Review Text */}
              <p className="text-[#243e34] italic leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                "{review.text}"
              </p>
              
              {/* Author & Tour Info */}
              <div className="border-t border-gray-100 pt-5 flex items-center gap-3.5 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-[#cba258]/30">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-[#041B2D] font-bold text-sm sm:text-base truncate">
                      {review.author}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  </div>
                  <p className="text-[#55697a] text-xs font-medium truncate mt-0.5">
                    {review.location} · <span className="text-[#cba258] font-semibold">{review.tour}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-8 bg-[#041B2D]'
                  : 'w-2 bg-[#041B2D]/20 hover:bg-[#041B2D]/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
