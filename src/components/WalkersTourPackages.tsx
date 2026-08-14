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
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
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
      image: '/images/hero-ella.jpg',
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
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
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
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80',
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
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
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
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      description: 'Romantic bespoke honeymoon escape featuring private candlelit dinners, luxury private pool villas, catamaran sunset cruises, and scenic highlands.',
      destinationsCovered: ['Colombo', 'Sigiriya', 'Nuwara Eliya', 'Ella', 'Mirissa', 'Galle'],
      includes: ['5-Star Luxury Honeymoon Villas', 'Private Chauffeur in Executive Sedan', 'Complimentary Champagne & Spa', 'Sunset Yacht Sail'],
    },
  ];

  return (
    <section id="packages" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle Background Watermark Text */}
        <div className="text-center -mb-8 sm:-mb-14 overflow-hidden">
          <span className="watermark-text">unforgettable</span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#002b49]">
            <span className="font-bold">Tour Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-[#55697a] max-w-xl mx-auto mt-4 font-normal leading-relaxed">
            Embark on an unforgettable journey through Sri Lanka’s stunning landscapes, rich history, and vibrant culture crafted by our expert travel planners.
          </p>
        </div>

        {/* Packages Grid - Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            let layoutClass = 'min-h-[460px] md:min-h-[350px]';
            if (index === 0) {
              layoutClass = 'md:col-span-2 md:row-span-2 min-h-[460px] md:min-h-[732px]';
            }

            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className={`hover-box group bg-[#001726] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-end relative cursor-pointer ${layoutClass}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/50 to-transparent group-hover:from-[#001726]/98 transition-colors duration-300" />

              {/* Vertical Featured Badge if featured */}
              {pkg.featured && (
                <div className="absolute top-4 right-4 bg-[#0077b6] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8ed1fc]" />
                  <span>Most Popular Tour</span>
                </div>
              )}

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
                  <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
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
