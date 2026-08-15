'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { PlanTripModal } from '@/components/Modals/PlanTripModal';
import { TOUR_PACKAGES, CLASSIC_TOURS_INTRO } from '@/data/travelData';
import { useCurrency } from '@/context/CurrencyContext';
import {
  MapPin,
  Star,
  ArrowRight,
  MessageSquare,
  Search,
  ChevronDown,
  Layers,
  Sparkles,
} from 'lucide-react';

export default function ToursOverviewPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('Classic Tours Inquiry');

  const categories = [
    { id: 'All', label: 'All Packages' },
    { id: 'Classic Tours Sri Lanka', label: 'Classic Tours' },
    { id: 'Cultural Tours Sri Lanka', label: 'Cultural Tours' },
    { id: 'Hill Country Scenic Tour', label: 'Hill Country' },
    { id: 'Wildlife and Adventure Tours Sri Lanka', label: 'Wildlife & Adventure' },
    { id: 'Beach Holidays', label: 'Beach Holidays' },
    { id: 'Honeymoon Tours', label: 'Honeymoon Tours' },
    { id: 'Luxury Tours', label: 'Luxury Tours' },
  ];

  const filteredPackages = useMemo(() => {
    return TOUR_PACKAGES.filter((pkg) => {
      const matchCat =
        selectedCategory === 'All' || pkg.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destinationsCovered.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => setIsInquireOpen(true)}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80"
            alt="Sri Lanka Classic Tours"
            fill
            priority
            className="object-cover object-center filter brightness-90 scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[#001726] z-10" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="font-caveat text-4xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-10px] sm:mb-[-15px] z-10 -rotate-2 inline-block"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Explore the Wonder of
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6">
            TOUR PACKAGES
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            {CLASSIC_TOURS_INTRO.description}
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('packages-list');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="next-btn next-btn--white group cursor-pointer"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#002b49]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Discover Itineraries</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section id="packages-list" className="py-16 lg:py-24 bg-[#f8fbfa] relative overflow-hidden">
        {/* Floating Subtle Watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="watermark-text text-[#e8eff4]">journeys</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Handcrafted Itineraries
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002b49] mb-4">
              Classic &amp; Curated Tours
            </h2>
            <p className="text-gray-600 sm:text-base leading-relaxed">
              Explore authentic Sri Lankan journeys with full day-by-day itineraries, verified boutique accommodations, and certified private chauffeur guides.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#002b49] text-white shadow-md scale-105'
                    : 'bg-white text-[#002b49] hover:bg-[#eaf3f8] border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#e2ede7] transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Cover */}
                <div className="relative h-64 w-full bg-[#001726] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/90 via-[#001726]/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-[#002b49]/80 backdrop-blur-md text-[#8ed1fc] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {pkg.duration}
                    </span>
                    {pkg.badge && (
                      <span className="bg-[#cba258] text-[#002b49] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#cba258] mb-1">
                      ★ {pkg.rating} <span className="text-gray-300 font-normal">({pkg.reviewsCount}+ reviews)</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#8ed1fc] transition-colors">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Destinations Covered */}
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                      Key Destinations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.destinationsCovered.slice(0, 5).map((d) => (
                        <span key={d} className="text-[11px] font-semibold text-[#002b49] bg-[#f0f4f8] px-2.5 py-1 rounded-md flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5 text-[#0077b6]" />
                          {d}
                        </span>
                      ))}
                      {pkg.destinationsCovered.length > 5 && (
                        <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                          +{pkg.destinationsCovered.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Price From</div>
                      <div className="font-serif text-xl font-bold text-[#002b49]">
                        {formatPrice(pkg.priceLKR)}
                      </div>
                    </div>

                    <Link
                      href={`/tours/${pkg.id}`}
                      className="next-btn next-btn--blue group"
                    >
                      <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-bold">View Itinerary</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <WalkersFooter />

      {/* Modals */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => setSearchQuery(term)}
      />

      <InquireDrawer
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
        prefilledInterest={inquireInterest}
      />

      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
      />
    </main>
  );
}
