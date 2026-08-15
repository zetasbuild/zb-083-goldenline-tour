'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Users, Briefcase, Cog, CheckCircle2, ChevronLeft, ChevronRight, Shield, Fuel, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { VEHICLES } from '@/data/travelData';
import { Vehicle } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';

interface VehicleRentalsSectionProps {
  onSelectVehicle: (v: Vehicle) => void;
  onViewAllVehicles: () => void;
}

export const VehicleRentalsSection: React.FC<VehicleRentalsSectionProps> = ({
  onSelectVehicle,
  onViewAllVehicles,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { formatPrice } = useCurrency();

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const guarantees = [
    { text: 'Well Maintained Vehicles', icon: Wrench },
    { text: 'Unlimited Mileage Options', icon: Sparkles },
    { text: 'Clean & Sanitized', icon: CheckCircle2 },
    { text: '24/7 Roadside Assistance', icon: Shield },
  ];

  return (
    <section id="rentals" className="py-20 bg-[#fbfdfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Luxury Emerald Box Container */}
        <div className="dark-luxury-bg rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-[#1b4e3c]">
          {/* Subtle Background Glow Accent */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1f664a]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#e5a83b]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 relative z-10">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#e5a83b] uppercase bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">
                VEHICLE RENTALS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ride in Comfort, Travel in Style
              </h2>
            </div>

            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <button
                onClick={onViewAllVehicles}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer"
              >
                View All Vehicles
              </button>
              <button
                onClick={() => handleScroll('left')}
                aria-label="Previous vehicles"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Next vehicles"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Vehicle Cards Row */}
          <div
            ref={scrollRef}
            className="flex space-x-5 overflow-x-auto no-scrollbar pb-6 relative z-10 snap-x snap-mandatory"
          >
            {VEHICLES.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => onSelectVehicle(vehicle)}
                className="group flex-shrink-0 w-[260px] sm:w-[280px] bg-[#0c241c]/90 hover:bg-[#113328] backdrop-blur-md rounded-3xl p-5 border border-white/10 hover:border-[#e5a83b]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer snap-start"
              >
                {/* Vehicle Image Container */}
                <div>
                  <div className="relative h-36 w-full rounded-2xl overflow-hidden bg-black/20 mb-4 flex items-center justify-center">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.category}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 260px, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c241c] via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Category & Model */}
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f3c26d] transition-colors leading-snug">
                    {vehicle.category}
                  </h3>
                  <div className="text-xs text-gray-400 font-medium mb-4">
                    {vehicle.model}
                  </div>

                  {/* Vehicle Specs Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-gray-300 text-xs mb-4">
                    <div className="flex items-center gap-1.5 justify-center">
                      <Users className="w-3.5 h-3.5 text-[#e5a83b]" />
                      <span>{vehicle.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center border-x border-white/10">
                      <Briefcase className="w-3.5 h-3.5 text-[#e5a83b]" />
                      <span>{vehicle.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center">
                      <Cog className="w-3.5 h-3.5 text-[#e5a83b]" />
                      <span>{vehicle.transmission}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Book Button */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <div className="text-[13px] sm:text-sm font-bold text-[#e5a83b]">
                      {formatPrice(vehicle.pricePerDayLKR)}
                    </div>
                    <div className="text-[10px] text-gray-400">/ Day (Self or Driver)</div>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#e5a83b] text-white group-hover:text-[#072118] flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-6 border-t border-white/10 text-xs text-gray-300 relative z-10">
            {guarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#e5a83b]/20 flex items-center justify-center text-[#e5a83b] shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
