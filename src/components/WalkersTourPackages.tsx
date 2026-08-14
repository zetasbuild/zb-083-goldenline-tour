'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Clock, Star } from 'lucide-react';
import { useCurrency } from '@/context/CurrencyContext';
import { TourPackage } from '@/types';

interface WalkersTourPackagesProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export const WalkersTourPackages: React.FC<WalkersTourPackagesProps> = ({
  onSelectPackage,
}) => {
  const { formatPrice } = useCurrency();

  const packages: (TourPackage & { featured?: boolean; categoryLabel?: string })[] = [
    {
      id: 'deep-dive-wild',
      title: 'Deep Dive into the Wild',
      categoryLabel: 'Wildlife Tours',
      duration: '16 Nights & 17 Days',
      badge: 'Most Popular Tour',
      featured: true,
      priceLKR: 145000,
      rating: 4.9,
      reviewsCount: 380,
      image: '/images/wildlife.webp',
      description: 'An immersive wildlife odyssey across Yala, Wilpattu, Udawalawe, and Minneriya tracking leopards, elephant gatherings, and endemic bird species.',
      destinationsCovered: ['Wilpattu', 'Minneriya', 'Gal Oya', 'Yala', 'Sinharaja'],
      includes: ['4x4 Safari Jeeps with Naturalist Guides', 'Luxury Jungle Lodges', 'All National Park Permits', 'Private Luxury Transport'],
    },
    {
      id: 'escape-hills',
      title: 'A Quick Escape to the Hills',
      categoryLabel: 'Hill Country Tours',
      duration: '08 Nights & 09 Days',
      priceLKR: 78000,
      rating: 4.8,
      reviewsCount: 290,
      image: '/images/hillcountry.jpg',
      description: 'Scenic journey through mist-covered tea plantations of Nuwara Eliya, iconic Ella Nine Arch train, and dramatic peak viewpoints.',
      destinationsCovered: ['Kandy', 'Nuwara Eliya', 'Ella', 'Haputale'],
      includes: ['Scenic Train Tickets', 'Tea Estate Bungalow Stays', 'Private Chauffeur Guide', 'Breakfast & Dinners'],
    },
    {
      id: 'family-escapade',
      title: 'Family Escapade in Paradise',
      categoryLabel: 'Family Tours',
      duration: '18 Nights & 19 Days',
      priceLKR: 165000,
      rating: 4.9,
      reviewsCount: 340,
      image: '/images/family.jpg',
      description: 'The ultimate family adventure combining turtle hatcheries, cultural rock climbs, scenic trains, wildlife safaris, and safe golden beaches.',
      destinationsCovered: ['Negombo', 'Sigiriya', 'Kandy', 'Ella', 'Yala', 'Bentota'],
      includes: ['Family-Friendly Suites', 'Dedicated Private Van', 'Kid-Friendly Excursions', 'All Breakfasts & Transfers'],
    },
    {
      id: 'cultural-odyssey',
      title: 'The Cultural Odyssey',
      categoryLabel: 'Cultural Tours',
      duration: '08 Nights & 09 Days',
      priceLKR: 82000,
      rating: 4.8,
      reviewsCount: 220,
      image: '/images/cultural.jpg',
      description: 'Traverse 2,500 years of regal civilization through ancient ruins of Anuradhapura, Polonnaruwa, Sigiriya Rock, and Kandy Temple.',
      destinationsCovered: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla', 'Kandy'],
      includes: ['Official Archaeological Guides', 'Heritage Boutique Stays', 'All Monument Entry Passes', 'Air-Conditioned Vehicle'],
    },
    {
      id: 'wander-awaken',
      title: 'Wander & Awaken',
      categoryLabel: 'Ayurvedic Tours',
      duration: '10 Nights & 11 Days',
      priceLKR: 110000,
      rating: 4.9,
      reviewsCount: 175,
      image: '/images/ayurvedic.avif',
      description: 'Restorative wellness and Ayurvedic retreat balancing body, mind, and spirit with yoga, meditation, herbal treatments, and wholesome dining.',
      destinationsCovered: ['Wadduwa', 'Beruwala', 'Tangalle', 'Kandy Hills'],
      includes: ['Daily Ayurvedic Doctor Consultation', 'Daily Herbal Massages & Treatments', 'Full Board Organic Dining', 'Yoga Sessions'],
    },
    {
      id: 'adventure-love',
      title: 'Adventure, Culture & Love',
      categoryLabel: 'Honeymoon Tours',
      duration: '16 Nights & 17 Days',
      priceLKR: 155000,
      rating: 5.0,
      reviewsCount: 260,
      image: '/images/honeymoon.jpg',
      description: 'Romantic bespoke honeymoon escape featuring private candlelit dinners, luxury private pool villas, catamaran sunset cruises, and scenic highlands.',
      destinationsCovered: ['Colombo', 'Sigiriya', 'Nuwara Eliya', 'Ella', 'Mirissa', 'Galle'],
      includes: ['5-Star Luxury Honeymoon Villas', 'Private Chauffeur in Executive Sedan', 'Complimentary Champagne & Spa', 'Sunset Yacht Sail'],
    },
  ];

  return (
    <section id="packages" className="pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white relative overflow-x-clip overflow-y-visible">
      {/* Subtle Background Watermark Text */}
      <div className="absolute -top-4 sm:top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text">unforgettable</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-24 lg:mt-32">

        {/* Packages Grid - Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-min">
          {packages.map((pkg, index) => {
            if (index === 0) {
              return (
                <React.Fragment key={pkg.id}>
                  {/* The Large Left Card */}
                  <div
                    onClick={() => onSelectPackage(pkg)}
                    className="lg:col-span-1 lg:row-span-2 h-[460px] md:h-[600px] lg:h-full w-full group bg-[#001726] rounded-3xl overflow-hidden shadow-lg border-[8px] border-white relative cursor-pointer flex flex-col justify-end"
                  >
                    {/* Background Image */}
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover hover-box__img"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/40 to-transparent group-hover:from-[#001726]/98 transition-colors duration-300" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-[#c75d2f] text-white text-[11px] font-bold px-3 py-3 rounded-lg shadow-sm leading-tight w-24">
                      MOST<br />POPULAR<br />TOUR
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 relative z-10 text-white flex flex-col justify-end">
                      <span className="text-[11px] uppercase tracking-widest text-[#8ed1fc] font-bold block mb-1">
                        {pkg.categoryLabel}
                      </span>
                      <h3 className="font-serif text-2xl font-bold tracking-wide leading-snug mb-2 group-hover:text-[#8ed1fc] transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 pb-3 border-b border-white/20">
                        <Clock className="w-3.5 h-3.5 text-[#8ed1fc]" />
                        <span className="font-medium">{pkg.duration}</span>
                        <span className="mx-1">·</span>
                        <span className="text-[#8ed1fc] font-bold">From {formatPrice(pkg.priceLKR)}</span>
                      </div>
                      <div className="next-btn next-btn--white">
                        <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-[#002b49]" />
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">Explore</span>
                      </div>
                    </div>
                  </div>

                  {/* The Text Block (Col 2 & 3, Row 1) */}
                  <div className="lg:col-span-2 flex flex-col justify-center px-4 sm:px-8 py-8 lg:py-12 relative z-10 lg:pr-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight font-sans tracking-tight">
                      Tour Packages
                    </h2>
                    <p className="text-sm sm:text-base text-gray-800 mb-8 leading-relaxed max-w-2xl">
                      Embark on an unforgettable journey through Sri Lanka's stunning landscapes, rich history, and culture. Whether it be adventure or relaxation, Walkers Tours crafts seamless, tailor-made experiences just for you.
                    </p>
                    <button className="flex items-center gap-4 text-xs font-bold text-[#002b49] uppercase tracking-widest hover:opacity-80 transition-opacity w-fit">
                      <div className="w-10 h-10 rounded-full bg-[#002b49] text-white flex items-center justify-center">
                        <span className="text-xl font-light leading-none">+</span>
                      </div>
                      Explore
                    </button>
                  </div>
                </React.Fragment>
              );
            }

            // Normal Small Cards
            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className="hover-box group bg-[#001726] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end relative cursor-pointer h-[350px]"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover hover-box__img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/40 to-transparent group-hover:from-[#001726]/98 transition-colors duration-300" />

                {/* Card Body */}
                <div className="p-6 sm:p-7 relative z-10 text-white flex flex-col justify-end">
                  <span className="text-[11px] uppercase tracking-widest text-[#8ed1fc] font-bold block mb-1">
                    {pkg.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold tracking-wide leading-snug mb-2 group-hover:text-[#8ed1fc] transition-colors">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300 mb-4 pb-3 border-b border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#8ed1fc]" />
                    <span className="font-medium">{pkg.duration}</span>
                    <span className="mx-1">·</span>
                    <span className="text-[#8ed1fc] font-bold">From {formatPrice(pkg.priceLKR)}</span>
                  </div>
                  <div className="next-btn next-btn--white">
                    <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-[#002b49]" />
                    </div>
                    <span className="text-xs uppercase tracking-widest font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">Explore</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
