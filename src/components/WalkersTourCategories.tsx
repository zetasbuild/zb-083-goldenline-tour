'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface WalkersTourCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

export const WalkersTourCategories: React.FC<WalkersTourCategoriesProps> = ({
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: 'beach',
      title: 'Beach Tours',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'cultural',
      title: 'Cultural Tours',
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'wildlife',
      title: 'Wildlife Tours',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'family',
      title: 'Family Tours',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'adventure',
      title: 'Adventure Tours',
      image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ramayana',
      title: 'Ramayana Trail',
      image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'hill-country',
      title: 'Hill Country Tours',
      image: '/images/hero-ella.jpg',
    },
    {
      id: 'ayurvedic',
      title: 'Ayurvedic Wellness',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'honeymoon',
      title: 'Honeymoon Tours',
      image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'golf',
      title: 'Golf Tours',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 lg:py-24 bg-[#eaf3f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#002b49] leading-tight">
              <span>Tour</span><br />
              <span className="font-bold">Categories</span>
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed">
              As Sri Lanka’s leading travel agency, we craft seamless journeys to iconic UNESCO heritage citadels and hidden tropical paradises.
            </p>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Previous category"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#002b49] hover:text-white text-[#002b49] shadow-sm flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              aria-label="Next category"
              className="w-10 h-10 rounded-full bg-white hover:bg-[#002b49] hover:text-white text-[#002b49] shadow-sm flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto no-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              className="hover-box group flex-shrink-0 w-[260px] sm:w-[290px] h-[400px] sm:h-[440px] cursor-pointer snap-start"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover hover-box__img"
                sizes="(max-width: 640px) 260px, 290px"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Card Footer Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end">
                <div className="border-b-2 border-white/40 pb-3 mb-4 group-hover:border-white transition-colors">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                <div className="next-btn next-btn--white">
                  <div className="next-btn-circle group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#002b49]" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
