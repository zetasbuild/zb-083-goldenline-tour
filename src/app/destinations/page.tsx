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
} from 'lucide-react';

export default function DestinationsPage() {
  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('All');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [wishlist, setWishlist] = useState<string[]>(['mirissa', 'sigiriya']);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
    { image: '/images/locations/sigiriya.webp', alt: 'Sigiriya Ancient Rock Fortress', location: 'Sigiriya' },
    { image: '/images/locations/hero-ella.webp', alt: 'Ella Nine Arch Bridge and Tea Hills', location: 'Ella' },
    { image: '/images/locations/mirissa.webp', alt: 'Mirissa Palm Trees and Tropical Ocean', location: 'Mirissa' },
    { image: '/images/locations/yala.webp', alt: 'Yala National Park Wildlife Safari', location: 'Yala' },
    { image: '/images/locations/nuwaraeliya.webp', alt: 'Nuwara Eliya Tea Gardens', location: 'Nuwara Eliya' },
    { image: '/images/locations/gallefort.webp', alt: 'Historic Galle Fort & Lighthouse', location: 'Galle Fort' },
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
            className="font-caveat text-3xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-8px] sm:mb-[-15px] z-10 -rotate-2"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Explore the Wonder of
          </span>
          
          {/* Huge Serif Main Title */}
          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[95px] font-bold tracking-wider sm:tracking-widest text-[#f8fbfa] uppercase leading-tight sm:leading-none drop-shadow-2xl mb-6 max-w-full"
          >
            DESTINATIONS
          </h1>

          {/* Subtitle */}
          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-xs sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md px-2"
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

      {/* Sticky Quick Filter Bar */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 w-full -mt-8 sm:-mt-10">
        <div className="bg-[#FAF7EE] rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(28,25,23,0.15)] border border-[#E7E0D0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
            
            {/* Search Input */}
            <div className="sm:col-span-2 lg:col-span-5 relative">
              <input
                type="text"
                placeholder="Search by city, activity, landmark..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-white text-xs sm:text-sm font-medium text-gray-800 outline-none focus:border-[var(--color-primary)] focus:bg-white transition-all shadow-xs"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            {/* Region Select */}
            <div className="lg:col-span-4 relative">
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-white text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer pr-10"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r === 'All Regions' ? 'All Regions (Islandwide)' : r}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Category Select */}
            <div className="lg:col-span-3 relative">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as DestinationCategory)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] bg-white text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer pr-10"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Destinations Grid Section */}
      <section id="destinations-grid" className="pt-20 pb-24 lg:pt-28 lg:pb-32 bg-[#FAF7EE] relative overflow-hidden">
        {/* Background Mandala */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <LotusBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Explore Sri Lanka
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-6">
              Iconic Destinations &amp; Wonders
            </h2>
            <p className="text-gray-600 sm:text-lg leading-relaxed">
              Explore the rich tapestry of Sri Lanka across sacred ancient ruins, misty high-elevation tea trails, untamed safari corridors, and turquoise coastline bays.
            </p>
          </div>

          {/* Region Tabs Filter */}
          <div data-reveal="fade-up" data-reveal-delay="100" className="w-full -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto pb-4 mb-12 no-scrollbar py-2">
            <div className="flex items-center justify-start md:justify-center gap-2.5 w-max md:w-auto md:flex-wrap min-w-full px-2 py-1 pr-10 md:pr-2">
              {regions.map((region) => {
                const isSelected = selectedRegion === region;
                return (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--color-primary)] text-[#cba258] shadow-md ring-2 ring-[#cba258]/30'
                        : 'bg-[#F5F2E6] text-[var(--color-primary)] hover:bg-[#EAE4D5] border border-gray-200'
                    }`}
                  >
                    {region}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Grid */}
          {filteredDestinations.length === 0 ? (
            <div className="bg-[#FAF7EE] rounded-3xl p-12 text-center max-w-md mx-auto shadow-sm border border-gray-200">
              <Compass className="w-12 h-12 text-[#cba258] mx-auto mb-4 animate-bounce" />
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-2">
                No Destinations Found
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Try adjusting your search filters or clearing the region selector.
              </p>
              <button
                onClick={() => {
                  setSelectedRegion('All Regions');
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="bg-[var(--color-primary)] hover:bg-[#cba258] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {filteredDestinations.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/destinations/${dest.id}`}
                  className="hover-box group flex-shrink-0 h-[440px] sm:h-[460px] cursor-pointer rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#181513] block"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181513]/95 via-[#181513]/35 to-transparent group-hover:from-[#181513]/98 transition-colors duration-300" />

                  {/* Top Badges (Category + Wishlist) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#cba258] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      {dest.category}
                    </span>
                    <button
                      onClick={(e) => toggleWishlist(dest.id, e)}
                      className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-[#cba258] transition-colors cursor-pointer"
                      aria-label="Save to favorites"
                    >
                      <Heart
                        className={`w-4 h-4 transition-all duration-300 ${
                          wishlist.includes(dest.id)
                            ? 'fill-[#cba258] text-[#cba258]'
                            : 'text-white'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Bottom Body */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white flex flex-col justify-end">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#cba258] font-bold tracking-widest uppercase mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{dest.region}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#cba258] transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-gray-200 line-clamp-2 my-2 leading-relaxed opacity-90 font-light">
                      {dest.shortDesc}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/15 mt-2">
                      <div className="flex items-center gap-1 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-[#cba258] text-[#cba258]" />
                        <span>{dest.rating}</span>
                        <span className="text-[10px] text-gray-300 font-normal">({dest.reviewsCount})</span>
                      </div>

                      <div className="next-btn next-btn--white">
                        <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                          <ArrowRight className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Tailor-Made CTA Strip */}
      <section className="py-20 lg:py-28 bg-[#F5F2E6] border-t border-[#E7E0D0] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Personalized Itineraries
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
                Want to Combine Multiple Destinations?
              </h2>
              <p className="text-sm sm:text-base text-[#6B635B] font-normal leading-relaxed mb-8">
                Let our destination specialists craft a seamless route connecting Sigiriya, Kandy, Ella, Yala, and the southern coast with private air-conditioned transport and dedicated chauffeur guides.
              </p>
              <Link
                href="/tours#custom-tour-form"
                className="next-btn next-btn--blue group cursor-pointer"
              >
                <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Design Custom Journey</span>
              </Link>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/locations/hero-ella.webp"
                  alt="Custom Tour Journey in Ella"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 40vw"
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
          href="https://wa.me/94715477149"
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
