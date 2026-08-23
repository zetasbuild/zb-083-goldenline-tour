'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

export const RealTravelerExperiences: React.FC = () => {
  const reviews = [
    {
      author: 'Daniel K.',
      location: 'Australia · Classic Sri Lanka 7 Days',
      text: 'Our trip was perfectly organized from start to finish. Excellent service, friendly team and unforgettable experiences. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
    },
    {
      author: 'Sophie & Liam Martin',
      location: 'United Kingdom · Highlands & Wildlife Tour',
      text: 'We rented a Toyota Rush with a private chauffeur for 10 days. Chaminda our driver was outstanding! He knew all the secret photography spots and best local tea houses.',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80',
    },
    {
      author: 'Marco Rossi',
      location: 'Italy · Cultural Triangle & Beaches',
      text: 'Sri Lanka is magic, and GoldenLine TOUR made it effortless. The private van was pristine, always on time, and the customized itinerary was spot on!',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="pt-4 pb-16 lg:pt-8 lg:pb-24 bg-[#F5F2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Real Traveler Experiences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#041B2D] mb-4 mt-2">
            Loved By Travelers Worldwide
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#cba258] text-[#cba258]" />
              ))}
            </div>
            <span className="text-[#55697a] text-sm sm:text-base font-medium">
              (4.9/5 Average Rating)
            </span>
          </div>
        </div>

        <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#e2ede7] hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-[#cba258] text-[#cba258]" />
                ))}
              </div>
              
              <p className="text-[#243e34] italic leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>
              
              <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-[#041B2D] font-bold text-sm sm:text-base">
                    {review.author}
                  </h4>
                  <p className="text-[#55697a] text-xs mt-0.5">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
