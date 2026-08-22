'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Clock, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { TOUR_PACKAGES } from '@/data/travelData';
import { TourPackage } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';

interface TourPackagesSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onViewAllPackages: () => void;
}

export const TourPackagesSection: React.FC<TourPackagesSectionProps> = ({
  onSelectPackage,
  onViewAllPackages,
}) => {
  const { formatPrice } = useCurrency();

  return (
    <section id="tours" className="py-20 bg-[#F5F2E6] border-t border-[#edf3f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-[#e9f4ef] px-3 py-1 rounded-full mb-3 inline-block">
              POPULAR TOUR PACKAGES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072118] tracking-tight">
              Handcrafted Journeys<br className="hidden sm:inline" /> Just For You
            </h2>
          </div>
          <button
            onClick={onViewAllPackages}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#AA8C2C] group py-2 border-b-2 border-[#D4AF37] self-start md:self-auto cursor-pointer"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => onSelectPackage(pkg)}
              className="group bg-[#F5F2E6] rounded-3xl overflow-hidden border border-[#e2ede7] hover:border-[#D4AF37]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Badge if available */}
                {pkg.badge && (
                  <div className="absolute top-3 left-3 bg-[#FFDF00] text-[#072118] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#FFDF00]" />
                  <span>{pkg.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#D4AF37] group-hover:text-[#AA8C2C] transition-colors leading-snug mb-2">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-gray-700 mb-4">
                    <div className="flex items-center text-[#FFDF00]">
                      <Star className="w-3.5 h-3.5 fill-[#FFDF00]" />
                    </div>
                    <span className="font-bold text-gray-800">{pkg.rating}</span>
                    <span className="text-gray-400">({pkg.reviewsCount}+)</span>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      From
                    </div>
                    <div className="text-base font-black text-[#D4AF37]">
                      {formatPrice(pkg.priceLKR)}
                    </div>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-[#edf5f1] group-hover:bg-[#D4AF37] group-hover:text-white text-[#D4AF37] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
