'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Users, Briefcase, Cog, CarFront, Route, Sparkles, Headset, ArrowRight } from 'lucide-react';
import { VEHICLES } from '@/data/travelData';
import { Vehicle } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import { AnimatedCounter } from '@/components/AnimatedCounter';

interface WalkersVehicleRentalsProps {
  onSelectVehicle: (v: Vehicle) => void;
  onViewAllVehicles?: () => void;
}

export const WalkersVehicleRentals: React.FC<WalkersVehicleRentalsProps> = ({
  onSelectVehicle,
  onViewAllVehicles,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { formatPrice } = useCurrency();

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto Slider functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        
        if (scrollRef.current.scrollLeft >= maxScrollLeft - 10) {
          // If we reached the end, snap back to the beginning
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, slide right
          scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4500); // Slide every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  const guarantees = [
    { text: 'Well Maintained Vehicles', icon: CarFront },
    { text: 'Unlimited Mileage Options', icon: Route },
    { text: 'Clean & Sanitized', icon: Sparkles },
    { text: '24/7 Roadside Assistance', icon: Headset },
  ];

  return (
    <section id="rentals" className="pt-20 pb-10 lg:pt-32 lg:pb-16 bg-[#f8fbfa] relative overflow-hidden">
      {/* Background Watermark Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
        <span className="watermark-text text-[#eef4f2]">comfortable</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header matching Tour Packages UI */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8ed1fc] uppercase mb-4 inline-block">
            VEHICLE RENTALS
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002b49] mb-6">
            Ride in Comfort, Travel in Style
          </h2>
          <p className="text-gray-600 sm:text-lg leading-relaxed">
            Experience Sri Lanka in ultimate comfort with our modern luxury fleet, driven by certified professional chauffeur guides.
          </p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end items-center gap-3 mb-6 pr-4">
          {onViewAllVehicles && (
            <button
              onClick={onViewAllVehicles}
              className="hidden lg:block border border-gray-300 hover:bg-[#002b49] hover:text-white hover:border-[#002b49] text-[#002b49] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer mr-2"
            >
              View All
            </button>
          )}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous vehicle"
            className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-[#002b49] hover:text-white hover:border-[#002b49] flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next vehicle"
            className="w-10 h-10 rounded-full border border-gray-300 text-gray-500 hover:bg-[#002b49] hover:text-white hover:border-[#002b49] flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Vehicles Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory"
        >
          {VEHICLES.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => onSelectVehicle(vehicle)}
              className="hover-box group flex-shrink-0 w-[280px] sm:w-[320px] h-[400px] sm:h-[440px] cursor-pointer snap-start rounded-3xl overflow-hidden relative"
            >
              {/* Vehicle Image (Full Background) */}
              <Image
                src={vehicle.image}
                alt={vehicle.category}
                fill
                className="object-cover hover-box__img"
                sizes="(max-width: 640px) 280px, 320px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/40 to-transparent group-hover:from-[#001726]/98 transition-colors duration-300" />

              {/* Card Footer Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end z-10">
                <div className="border-b border-white/20 pb-4 mb-4 group-hover:border-white/40 transition-colors">
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-[#8ed1fc] font-bold tracking-widest uppercase mb-2">
                    <Cog className="w-3.5 h-3.5" />
                    <span>{vehicle.model}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-none mb-4 group-hover:text-[#8ed1fc] transition-colors">
                    {vehicle.category}
                  </h3>
                  
                  {/* Specs row */}
                  <div className="flex items-center gap-4 text-xs text-gray-300">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#8ed1fc]" />
                      <span className="font-medium">{vehicle.passengers} Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5 border-l border-white/20 pl-4">
                      <Briefcase className="w-4 h-4 text-[#8ed1fc]" />
                      <span className="font-medium">{vehicle.luggage} Bags</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#8ed1fc] transition-colors">
                      {formatPrice(vehicle.pricePerDayLKR)}
                    </div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">/ Day</div>
                  </div>

                  <div className="next-btn next-btn--white">
                    <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-[#002b49]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-8 border-t border-gray-200 text-sm text-[#002b49]">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-[#eef4f2] flex items-center justify-center text-[#8ed1fc] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Bottom Impact Image Section (Stats) */}
        <div className="relative mt-16 rounded-3xl overflow-hidden h-[240px] sm:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
            alt="Sri Lanka Coastline"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#002b49]/60 backdrop-blur-[2px]" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center w-full max-w-5xl px-4">
              <div>
                <AnimatedCounter end={10} suffix="+" className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2" />
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-300">Years of Excellence</div>
              </div>
              <div>
                <AnimatedCounter end={500} suffix="+" className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2" />
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-300">Happy Travelers Daily</div>
              </div>
              <div>
                <AnimatedCounter end={50} suffix="+" className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2" />
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-300">Destinations</div>
              </div>
              <div>
                <AnimatedCounter end={100} suffix="+" className="font-serif text-4xl sm:text-5xl font-bold text-white mb-2" />
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-300">Vehicles in Fleet</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
