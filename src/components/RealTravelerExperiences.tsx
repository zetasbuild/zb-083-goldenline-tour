'use client';

import React from 'react';
import Image from 'next/image';
import { Star, CheckCircle, Quote } from 'lucide-react';

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

  const reviews: ReviewItem[] = [
    {
      author: 'Bhuvaneshwaran P',
      location: 'International',
      tour: 'Review about Nihar',
      text: 'We had an unforgettable experience with Nihar during our Sri Lanka trip. From the very first day, he was more than just a driver he genuinely cared about making our journey enjoyable and memorable.\n\nNihar was always punctual, courteous, and incredibly professional. He consistently checked on our comfort, suggested great places to visit, and made sure we had the best possible experience throughout the trip. His friendly nature, local knowledge, and safe driving gave us complete peace of mind.\n\nWhat stood out the most was how much he cared about our happiness. He went above and beyond to ensure we enjoyed every moment of our vacation.\n\nThank you, Nihar, for your kindness and exceptional service. We highly recommend him to anyone visiting Sri Lanka. He truly made our trip special!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Jul 2026',
    },
    {
      author: 'Robin R',
      location: 'International',
      tour: 'Best taxi ever',
      text: 'We had the best experience ever, when we come back to Sri Lanka and we will we will use nihar for all our trips getting g around.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Jun 2026',
    },
    {
      author: 'omar i',
      location: 'International',
      tour: 'Lovely',
      text: 'Great hospitality and lovely person',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'May 2026',
    },
    {
      author: 'faisal m',
      location: 'International',
      tour: 'When i meet pure person fromsri lanka 🇱🇰',
      text: 'He was amazing guide calm and gentle person book a ride with him and enjoy tha holiday vist sri lanka and enjoyevery moments',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Jan 2026',
    },
    {
      author: 'Prem Jacob',
      location: 'International',
      tour: 'Nihar - Best Recommend Guide & Driver',
      text: 'We were in Lanka for 5 days, and our tour agency gave us Nihar. He was extremely professional, punctual and polite. Multilingual, he can speak English, Tamil, Hindi and the local languages of Lanka making him a best companion for our local expeditions. He knew the OG places for local cuisine and not much visited spots for better experiences. He drove us safely around from airport to airport. Overall, I must say we had a good experience with him negotiating the best deals for us. I would thoroughly recommend Nihar for your trip to Lanka.',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Nov 2025',
    },
    {
      author: 'Chandra Sekhar M',
      location: 'International',
      tour: 'Highly recommended to anyone looking for a personal tour driver.',
      text: 'We were incredibly lucky to have Mr. Nihar as our driver for 9 days. He is a wonderful person—kind, professional, and truly made our trip perfect. He was always on time, and his driving was absolutely safe and reliable. The vehicle was well maintained and very comfortable throughout.\n\nWhat stood out most was his willingness to help at every step. He took us wherever we wished—whether it was for sightseeing, local experiences, or food stops—always with a smile and never a complaint. We felt completely at ease with him, and his support made our journey stress-free and enjoyable.\n\nHighly recommended to anyone looking for a personal tour driver.',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Aug 2025',
    },
    {
      author: 'Jeni Maria',
      location: 'International',
      tour: 'Experience Srilanka like a local',
      text: 'We had the most amazing experience in Sri Lanka thanks to our tour guide! From the moment we met him, he was warm, friendly, and incredibly professional. His knowledge about the country’s history, culture, hidden gems, and local stories added so much depth to our trip.\nHe was always punctual, flexible with our plans, and genuinely cared about making sure we were comfortable and enjoying every moment. Whether it was recommending the best local food spots, arranging smooth transport, or guiding us through crowded attractions with ease, he handled everything flawlessly.\nWhat stood out the most was his kindness and attention to detail. He went above and beyond to make the experience feel personal and memorable — something you don’t get with every guide.\nIf you’re visiting Sri Lanka, I highly recommend booking him. You won’t just see the country, you’ll experience it the way locals do. Easily the best decision we made for our trip!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Nov 2025',
    },
    {
      author: 'Maria M',
      location: 'International',
      tour: '200% recommended',
      text: 'We could not choose better!! It has been a great success to have Nihar for our trip, a very punctual, polite and helpful man. Thanks to him we have been able to make our trip even better than we expected. Thank you very much Nihar for everything, I will definitely count on you next time and of course, I will recommend it to anyone who travels to Sri Lanka!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Sep 2025',
    },
    {
      author: 'Nalin',
      location: 'International',
      tour: 'Perfect',
      text: 'Hugely professional and friendly guide. Always thinks along with you and has a lot of knowledge of the country that he likes to teach you.\nRecommend it to everyone!',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      date: 'Mar 2025',
    }
  ];



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
          </div>
        </div>

        {/* Carousel Controls */}
        <div data-reveal="fade-up" data-reveal-delay="100" className="flex justify-between items-center w-full mb-4 px-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#55697a]">
            Verified Guest Reviews
          </span>
        </div>

        {/* Auto Slider Cards Track (Continuous Infinite Loop) */}
        <div className="relative w-full overflow-hidden flex group mt-6 pb-8 pt-2">
          {/* First loop track */}
          <div className="animate-marquee flex gap-5 sm:gap-6 min-w-full justify-around shrink-0 pr-5 sm:pr-6 group-hover:[animation-play-state:paused]">
            {reviews.map((review, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#e2ede7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0 w-[300px] sm:w-[370px] md:w-[390px] relative"
              >
                <Quote className="w-10 h-10 text-[#cba258]/15 absolute top-6 right-6 pointer-events-none" />

                {/* Stars and Tour Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#cba258] text-[#cba258]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#cba258] bg-[#F5F2E6] px-2.5 py-1 rounded-full whitespace-nowrap">
                    Verified Trip
                  </span>
                </div>
                
                {/* Review Text */}
                <p className="text-[#243e34] italic leading-relaxed mb-6 flex-grow text-sm sm:text-base whitespace-pre-wrap line-clamp-6 overflow-hidden">
                  "{review.text}"
                </p>
                
                {/* Author & Tour Info */}
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3.5 mt-auto">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[#041B2D] font-bold text-sm sm:text-base truncate">
                        {review.author}
                      </h4>
                    </div>
                    <p className="text-[#55697a] text-xs font-medium truncate mt-0.5">
                      {review.location} · <span className="text-[#cba258] font-semibold">{review.tour}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second loop track (Clone for seamless infinity) */}
          <div className="animate-marquee flex gap-5 sm:gap-6 min-w-full justify-around shrink-0 pr-5 sm:pr-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {reviews.map((review, idx) => (
              <div 
                key={`clone-${idx}`}
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#e2ede7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0 w-[300px] sm:w-[370px] md:w-[390px] relative"
              >
                <Quote className="w-10 h-10 text-[#cba258]/15 absolute top-6 right-6 pointer-events-none" />

                {/* Stars and Tour Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#cba258] text-[#cba258]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#cba258] bg-[#F5F2E6] px-2.5 py-1 rounded-full whitespace-nowrap">
                    Verified Trip
                  </span>
                </div>
                
                {/* Review Text */}
                <p className="text-[#243e34] italic leading-relaxed mb-6 flex-grow text-sm sm:text-base whitespace-pre-wrap line-clamp-6 overflow-hidden">
                  "{review.text}"
                </p>
                
                {/* Author & Tour Info */}
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3.5 mt-auto">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[#041B2D] font-bold text-sm sm:text-base truncate">
                        {review.author}
                      </h4>
                    </div>
                    <p className="text-[#55697a] text-xs font-medium truncate mt-0.5">
                      {review.location} · <span className="text-[#cba258] font-semibold">{review.tour}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TripAdvisor Link */}
        <div className="mt-12 flex justify-center pb-4" data-reveal="fade-up">
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g12272474-d28158011-Reviews-Nihar_Srilanka_Tours_Travels-Meemure_Kandy_District_Central_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-[#34E0A1]/40 hover:border-[#34E0A1] text-[#041B2D] font-bold text-sm sm:text-base rounded-full shadow-sm hover:shadow-lg transition-all duration-300 group"
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
