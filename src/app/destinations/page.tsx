'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { LotusBackground, TropicalLeafBackground } from '@/components/DecorativeBackgrounds';
import { WalkersCustomTripForm } from '@/components/WalkersCustomTripForm';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { DESTINATIONS } from '@/data/travelData';
import { Destination, DestinationCategory } from '@/types';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import {
  MapPin,
  Search,
  ChevronDown,
  ArrowRight,
  Heart,
  Star,
  Compass,
  Mountain,
  Palmtree,
  Landmark,
  Footprints,
  Sparkles,
  Droplets,
  Sun,
  Layers,
  MessageSquare,
} from 'lucide-react';

export default function DestinationsPage() {
  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('All');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [wishlist, setWishlist] = useState<string[]>(['mirissa', 'sigiriya']);

  // Modals state
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('General Destination Inquiry');

  // Categories list with matching Lucide icons
  const categories = [
    { id: 'All', label: 'All Places', icon: Layers },
    { id: 'Beaches', label: 'Beaches', icon: Palmtree },
    { id: 'Mountains', label: 'Hill Country', icon: Mountain },
    { id: 'Cultural', label: 'Cultural & Sacred', icon: Landmark },
    { id: 'Wildlife', label: 'Wildlife & Safari', icon: Footprints },
    { id: 'Adventure', label: 'Adventure', icon: Compass },
    { id: 'Heritage', label: 'Heritage Forts', icon: Landmark },
    { id: 'Waterfalls', label: 'Waterfalls', icon: Droplets },
    { id: 'Island', label: 'Islands & Marine', icon: Sun },
  ] as const;

  const destinationSlides = [
    { image: '/images/sigiriya.jpg', alt: 'Sigiriya Ancient Rock Fortress', location: 'Sigiriya' },
    { image: '/images/hero-ella.jpg', alt: 'Ella Nine Arch Bridge and Tea Hills', location: 'Ella' },
    { image: '/images/mirissa.jpg', alt: 'Mirissa Palm Trees and Tropical Ocean', location: 'Mirissa' },
    { image: '/images/yala.jpg', alt: 'Yala National Park Wildlife Safari', location: 'Yala' },
    { image: '/images/nuwaraeliya.jpg', alt: 'Nuwara Eliya Tea Gardens', location: 'Nuwara Eliya' },
    { image: '/images/gallefort.png', alt: 'Historic Galle Fort & Lighthouse', location: 'Galle Fort' },
  ];

  const regions = [
    'All Regions',
    'South Coast',
    'Central Province',
    'Cultural Triangle',
    'Hill Country',
    'East Coast',
    'Southern Province',
    'Uva Province',
  ];

  // Toggle wishlist item
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const handleOpenInquireWithInterest = (interest: string) => {
    setInquireInterest(interest);
    setIsInquireOpen(true);
  };

  // Filter destinations based on search, category, and region
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      const matchesSearch =
        searchQuery === '' ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || dest.category === selectedCategory;

      const matchesRegion =
        selectedRegion === 'All Regions' || dest.region === selectedRegion;

      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchQuery, selectedCategory, selectedRegion]);

  const scrollToGrid = () => {
    const el = document.getElementById('destinations-grid');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2E6] relative">
      {/* Walkers Style Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => handleOpenInquireWithInterest('Destination Guide Inquiry')}
      />

      {/* Hero Banner Section with Background Auto Slider */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <BackgroundAutoSlider
          slides={destinationSlides}
          intervalMs={4500}
          overlayGradient="bg-gradient-to-b from-black/80 via-black/40 to-black/85"
        />

        {/* Hero Central Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
          {/* Top Script Text */}
          <span 
            data-reveal="fade-down"
            data-reveal-delay="100"
            className="font-caveat text-4xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-10px] sm:mb-[-15px] z-10 -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Explore the Wonder of
          </span>
          
          {/* Huge Serif Main Title */}
          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[95px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6"
          >
            DESTINATIONS
          </h1>

          {/* Subtitle */}
          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md"
          >
            From mist-veiled mountain peaks and sacred ancient citadels to wild leopard sanctuaries and pristine tropical beaches.
          </p>

          {/* Action Buttons */}
          <div data-reveal="zoom-in" data-reveal-delay="450" className="flex items-center gap-4">
            <button
              onClick={scrollToGrid}
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Discover Places</span>
            </button>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 pointer-events-none">
          <span className="text-[10px] uppercase tracking-widest mb-1">Scroll</span>
          <div className="w-0.5 h-6 bg-[#F5F2E6]/40 animate-pulse" />
        </div>
      </section>

      {/* Floating Filter Card */}
      <section data-reveal="zoom-in" data-reveal-delay="200" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14 w-full">
        <div className="bg-[#F5F2E6] rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,43,73,0.15)] border border-[#e2ede7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Field 1: Keyword Search */}
            <div className="md:col-span-5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1.5">
                Search Destination or Landmark
              </label>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-[#f8fbfa] transition-colors">
                <Search className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Ella, Sigiriya, Mirissa..."
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Field 2: Category Selector */}
            <div className="md:col-span-4">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1.5">
                Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as DestinationCategory)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-[#f8fbfa] text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer pr-10"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Region Selector */}
            <div className="md:col-span-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-1.5">
                Region
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-[#f8fbfa] text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer pr-10"
                >
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="destinations-grid" className="pt-20 pb-24 lg:pt-28 lg:pb-32 bg-[#f8fbfa] relative overflow-hidden">
        {/* Decorative Background SVGs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <LotusBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[var(--color-primary)]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header with Signature Cursive */}
          <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <span 
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Handcrafted Highlights
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-4">
              Iconic Places of Sri Lanka
            </h2>
            <p className="text-gray-600 sm:text-base leading-relaxed">
              Showing <strong className="text-[var(--color-primary)]">{filteredDestinations.length}</strong> remarkable destinations tailored for bespoke adventures.
            </p>
          </div>

          {/* Quick Category Tabs */}
          <div data-reveal="fade-down" className="flex sm:flex-wrap items-center gap-2 sm:gap-3 mb-10 overflow-x-auto no-scrollbar pb-3 sm:pb-0 sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={(e) => {
                    setSelectedCategory(cat.id as DestinationCategory);
                    e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[var(--color-primary)] text-white shadow-md scale-105'
                      : 'bg-[#F5F2E6] text-[var(--color-primary)] hover:bg-[#eaf3f8] border border-gray-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Destinations Grid (Matching Walkers Luxury Card UI) */}
          {filteredDestinations.length === 0 ? (
            <div className="bg-[#F5F2E6] rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm border border-gray-200">
              <Compass className="w-12 h-12 text-[#cba258] mx-auto mb-4 animate-bounce" />
              <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] mb-2">No Destinations Found</h3>
              <p className="text-xs text-gray-500 mb-6">
                Try clearing your search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedRegion('All Regions');
                }}
                className="bg-[var(--color-primary)] hover:bg-[#cba258] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredDestinations.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/tours`}
                  className="hover-box group flex-shrink-0 h-[440px] sm:h-[460px] cursor-pointer rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#041B2D] block"
                >
                  {/* Full Background Image */}
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover hover-box__img"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/95 via-[#041B2D]/35 to-transparent group-hover:from-[#041B2D]/98 transition-colors duration-300" />

                  {/* Top Badges (Category + Wishlist) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#cba258] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {dest.category}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(dest.id, e);
                      }}
                      aria-label="Save to wishlist"
                      className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Heart
                        className={`w-4 h-4 transition-colors ${
                          wishlist.includes(dest.id)
                            ? 'fill-[#cba258] text-[#cba258]'
                            : 'text-white'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Footer Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end z-10">
                    <div className="border-b border-white/20 pb-3 mb-3 group-hover:border-white/40 transition-colors">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#cba258] font-bold tracking-widest uppercase mb-1">
                        <MapPin className="w-3 h-3" />
                        <span>{dest.region}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#cba258] transition-colors">
                        {dest.name}
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mt-2 leading-relaxed">
                        {dest.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs font-bold text-white">
                        <Star className="w-3.5 h-3.5 fill-[#cba258] text-[#cba258]" />
                        <span>{dest.rating}</span>
                        <span className="text-gray-400 font-normal text-[11px]">({dest.reviewsCount})</span>
                      </div>

                      {/* Next Button Style */}
                      <div className="next-btn next-btn--white">
                        <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Tailor-Made Bespoke Callout Section */}
      <section className="py-20 lg:py-28 bg-[#F5F2E6] border-t border-[#e2ede7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div>
                <span 
                  className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
                  style={{ fontFamily: 'var(--font-caveat), cursive' }}
                >
                  Tailor-made Itineraries
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6 mt-2">
                  Can't Decide Where to Go?
                </h2>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[var(--color-primary)] mb-3">
                Let our destination specialists build your dream holiday.
              </h3>

              <p className="text-sm sm:text-base text-[#55697a] font-normal leading-relaxed mb-8">
                Every traveler is unique. Whether you want to witness wild elephants in Yala, climb the ancient citadel of Sigiriya at sunrise, or unwind in secluded coastal boutique villas, our team crafts seamless bespoke journeys tailored specifically to your desires.
              </p>

              <button
                onClick={() => {
                  const el = document.getElementById('custom-tour-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="next-btn next-btn--blue group cursor-pointer"
              >
                <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Plan Your Custom Trip</span>
              </button>
            </div>

            {/* Right Photography Layout */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl z-10 w-full sm:w-5/6 ml-auto group">
                <Image
                  src="https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80"
                  alt="Scenic Sri Lanka Highlands"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Small Overlapping Foreground Image */}
              <div className="hidden sm:block absolute -bottom-8 -left-4 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-20 group">
                <Image
                  src="/images/sigiriya.jpg"
                  alt="Sigiriya Heritage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="260px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded On-Page Custom Itinerary Planning Form */}
      <WalkersCustomTripForm id="custom-tour-form" />

      {/* Mega Footer */}
      <WalkersFooter />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="floating-whatsapp">
        <a
          href="https://wa.me/94771234567"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all cursor-pointer"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Modals & Drawers */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => {
          setSearchQuery(term);
          scrollToGrid();
        }}
      />
    </main>
  );
}
