'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const WalkersReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      title: 'Review about Nihar',
      text: 'We had an unforgettable experience with Nihar during our Sri Lanka trip. From the very first day, he was more than just a driver he genuinely cared about making our journey enjoyable and memorable.\n\nNihar was always punctual, courteous, and incredibly professional. He consistently checked on our comfort, suggested great places to visit, and made sure we had the best possible experience throughout the trip. His friendly nature, local knowledge, and safe driving gave us complete peace of mind.\n\nWhat stood out the most was how much he cared about our happiness. He went above and beyond to ensure we enjoyed every moment of our vacation.\n\nThank you, Nihar, for your kindness and exceptional service. We highly recommend him to anyone visiting Sri Lanka. He truly made our trip special!',
      author: 'Bhuvaneshwaran P',
      origin: 'International',
      tour: 'Jul 2026',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    },
    {
      title: 'Best taxi ever',
      text: 'We had the best experience ever, when we come back to Sri Lanka and we will we will use nihar for all our trips getting g around.',
      author: 'Robin R',
      origin: 'International',
      tour: 'Jun 2026',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      title: 'Lovely',
      text: 'Great hospitality and lovely person',
      author: 'omar i',
      origin: 'International',
      tour: 'May 2026',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      title: 'When i meet pure person fromsri lanka 🇱🇰',
      text: 'He was amazing guide calm and gentle person book a ride with him and enjoy tha holiday vist sri lanka and enjoyevery moments',
      author: 'faisal m',
      origin: 'International',
      tour: 'Jan 2026',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      title: 'Nihar - Best Recommend Guide & Driver',
      text: 'We were in Lanka for 5 days, and our tour agency gave us Nihar. He was extremely professional, punctual and polite. Multilingual, he can speak English, Tamil, Hindi and the local languages of Lanka making him a best companion for our local expeditions. He knew the OG places for local cuisine and not much visited spots for better experiences. He drove us safely around from airport to airport. Overall, I must say we had a good experience with him negotiating the best deals for us. I would thoroughly recommend Nihar for your trip to Lanka.',
      author: 'Prem Jacob',
      origin: 'International',
      tour: 'Nov 2025',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop',
    },
    {
      title: 'Highly recommended to anyone looking for a personal tour driver.',
      text: 'We were incredibly lucky to have Mr. Nihar as our driver for 9 days. He is a wonderful person—kind, professional, and truly made our trip perfect. He was always on time, and his driving was absolutely safe and reliable. The vehicle was well maintained and very comfortable throughout.\n\nWhat stood out most was his willingness to help at every step. He took us wherever we wished—whether it was for sightseeing, local experiences, or food stops—always with a smile and never a complaint. We felt completely at ease with him, and his support made our journey stress-free and enjoyable.\n\nHighly recommended to anyone looking for a personal tour driver.',
      author: 'Chandra Sekhar M',
      origin: 'International',
      tour: 'Aug 2025',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop',
    },
    {
      title: 'Experience Srilanka like a local',
      text: 'We had the most amazing experience in Sri Lanka thanks to our tour guide! From the moment we met him, he was warm, friendly, and incredibly professional. His knowledge about the country’s history, culture, hidden gems, and local stories added so much depth to our trip.\nHe was always punctual, flexible with our plans, and genuinely cared about making sure we were comfortable and enjoying every moment. Whether it was recommending the best local food spots, arranging smooth transport, or guiding us through crowded attractions with ease, he handled everything flawlessly.\nWhat stood out the most was his kindness and attention to detail. He went above and beyond to make the experience feel personal and memorable — something you don’t get with every guide.\nIf you’re visiting Sri Lanka, I highly recommend booking him. You won’t just see the country, you’ll experience it the way locals do. Easily the best decision we made for our trip!',
      author: 'Jeni Maria',
      origin: 'International',
      tour: 'Nov 2025',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      title: '200% recommended',
      text: 'We could not choose better!! It has been a great success to have Nihar for our trip, a very punctual, polite and helpful man. Thanks to him we have been able to make our trip even better than we expected. Thank you very much Nihar for everything, I will definitely count on you next time and of course, I will recommend it to anyone who travels to Sri Lanka!',
      author: 'Maria M',
      origin: 'International',
      tour: 'Sep 2025',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    },
    {
      title: 'Perfect',
      text: 'Hugely professional and friendly guide. Always thinks along with you and has a lot of knowledge of the country that he likes to teach you.\nRecommend it to everyone!',
      author: 'Nalin',
      origin: 'International',
      tour: 'Mar 2025',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    }
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/90 via-[#041B2D]/65 to-[#041B2D]/80" />
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

          <p className="text-sm sm:text-base text-gray-200 text-center leading-relaxed font-light mb-8 max-w-3xl mx-auto italic whitespace-pre-wrap">
            {currentReview.text}
          </p>

          <div className="text-center border-t border-white/20 pt-6">
            <div className="font-serif text-base font-bold text-white">
              — {currentReview.author} —
            </div>
            <div className="text-xs text-gray-300 mt-1">
              {currentReview.origin} · <span className="text-[#cba258] font-medium">{currentReview.tour}</span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-3 right-3 pointer-events-none">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-black/40 border border-white/30 text-white flex items-center justify-center shadow-lg hover:bg-[#F5F2E6] hover:text-[var(--color-primary)] transition-all pointer-events-auto cursor-pointer backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-black/40 border border-white/30 text-white flex items-center justify-center shadow-lg hover:bg-[#F5F2E6] hover:text-[var(--color-primary)] transition-all pointer-events-auto cursor-pointer backdrop-blur-sm"
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
                currentIndex === idx ? 'w-8 bg-[#cba258]' : 'w-2 bg-[#F5F2E6]/30 hover:bg-[#F5F2E6]/60'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        {/* TripAdvisor Link */}
        <div className="mt-12 flex justify-center pb-2" data-reveal="fade-up">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g12272474-d28158011-Reviews-Nihar_Srilanka_Tours_Travels-Meemure_Kandy_District_Central_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white border border-[#34E0A1]/50 hover:border-[#34E0A1] text-white hover:text-[#041B2D] font-bold text-sm sm:text-base rounded-full shadow-lg transition-all duration-300 group"
          >
            <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 fill-[#34E0A1] group-hover:scale-110 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/>
            </svg>
            Read more reviews on Tripadvisor
          </a>
        </div>
      </div>
    </section>
  );
};
