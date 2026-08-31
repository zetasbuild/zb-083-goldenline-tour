'use client';

import React from 'react';
import { Star, Quote, Pencil } from 'lucide-react';
import { TripAdvisorIcon } from '@/components/TripAdvisorIcon';

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
    <section className="py-20 lg:py-28 bg-[#FAF7EE] relative overflow-hidden border-t border-[#E7E0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <span 
            className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Real Traveler Experiences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-3 mt-1 leading-tight">
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
          <span className="text-xs uppercase tracking-widest font-bold text-[#6B635B]">
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
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#E7E0D0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0 w-[300px] sm:w-[370px] md:w-[390px] relative"
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
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-grow text-sm sm:text-base whitespace-pre-wrap line-clamp-6 overflow-hidden">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                {/* Author & Tour Info */}
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3.5 mt-auto">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[var(--color-primary)] font-bold text-sm sm:text-base truncate">
                        {review.author}
                      </h4>
                    </div>
                    <p className="text-[#6B635B] text-xs font-medium truncate mt-0.5">
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
                className="bg-white rounded-3xl p-7 sm:p-9 shadow-sm border border-[#E7E0D0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-shrink-0 w-[300px] sm:w-[370px] md:w-[390px] relative"
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
                <p className="text-gray-700 italic leading-relaxed mb-6 flex-grow text-sm sm:text-base whitespace-pre-wrap line-clamp-6 overflow-hidden">
                  &ldquo;{review.text}&rdquo;
                </p>
                
                {/* Author & Tour Info */}
                <div className="border-t border-gray-100 pt-5 flex items-center gap-3.5 mt-auto">
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-[var(--color-primary)] font-bold text-sm sm:text-base truncate">
                        {review.author}
                      </h4>
                    </div>
                    <p className="text-[#6B635B] text-xs font-medium truncate mt-0.5">
                      {review.location} · <span className="text-[#cba258] font-semibold">{review.tour}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons (Write a Review & Read More on TripAdvisor) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pb-4" data-reveal="fade-up">
          {/* Write a Review Button */}
          <a
            href="https://www.tripadvisor.com/UserReviewEdit-g12272474-d28158011-Nihar_Srilanka_Tours_Travels-Meemure_Kandy_District_Central_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C39A4D] hover:bg-[#b0883d] text-white font-bold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <Pencil className="w-4 h-4 text-white" />
            <span>Write a Review</span>
          </a>

          {/* Read more reviews on TripAdvisor Button */}
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g12272474-d28158011-Reviews-Nihar_Srilanka_Tours_Travels-Meemure_Kandy_District_Central_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#FAF7EE] text-[#1C1917] hover:text-[#00aa6c] border border-[#00aa6c]/30 hover:border-[#00aa6c] font-bold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            <TripAdvisorIcon className="w-5 h-5 text-[#00aa6c] shrink-0" />
            <span>Read more reviews on Tripadvisor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
