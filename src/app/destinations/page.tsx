'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DestinationDetailModal } from '@/components/Modals/DestinationDetailModal';
import { PlanTripModal } from '@/components/Modals/PlanTripModal';
import { DESTINATIONS } from '@/data/travelData';
import { Destination, DestinationCategory } from '@/types';
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
  ShieldCheck,
  Award,
  Headphones,
  UserCheck,
  Send,
  CheckCircle2,
  Sparkles,
  Droplets,
  Sun,
  Layers,
  ChevronRight,
  SlidersHorizontal,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DestinationsPage() {
  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('All');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [wishlist, setWishlist] = useState<string[]>(['mirissa', 'sigiriya']);

  // Modals state
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);
  const [prefilledDestName, setPrefilledDestName] = useState<string | null>(null);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Categories list with matching Lucide icons
  const categories = [
    { id: 'All', label: 'All', icon: Layers },
    { id: 'Beaches', label: 'Beaches', icon: Palmtree },
    { id: 'Mountains', label: 'Mountains', icon: Mountain },
    { id: 'Cultural', label: 'Cultural', icon: Landmark },
    { id: 'Wildlife', label: 'Wildlife', icon: Footprints },
    { id: 'Adventure', label: 'Adventure', icon: Compass },
    { id: 'Heritage', label: 'Heritage', icon: Landmark },
    { id: 'Waterfalls', label: 'Waterfalls', icon: Droplets },
    { id: 'Island', label: 'Island', icon: Sun },
  ] as const;

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

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#fbfdfc]">
      {/* Sticky Navigation */}
      <Navbar onOpenPlanTrip={() => setIsPlanTripOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[560px] lg:min-h-[620px] pt-28 lg:pt-32 pb-24 flex items-center overflow-hidden">
        {/* Background Image: Sigiriya Rock & Majestic Rainforest */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/sigiriya.jpg"
            alt="Sigiriya Rock Fortress and Sri Lanka Nature"
            fill
            priority
            className="object-cover object-center transform scale-105 transition-transform duration-1000"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent sm:w-3/4 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbfdfc] via-transparent to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 text-white">
              <span className="font-script text-3xl sm:text-4xl text-[#e5a83b] font-medium tracking-wide block mb-1">
                Explore the Wonders
              </span>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-4">
                Destinations of<br />Sri Lanka
              </h1>

              <p className="text-sm sm:text-base text-gray-200 max-w-xl font-normal leading-relaxed mb-8">
                From golden beaches to misty mountains, discover the ancient heritage and breathtaking natural beauty of a paradise island.
              </p>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#e5a83b]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">50+</div>
                    <div className="text-xs text-gray-300">Destinations</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#e5a83b]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">Diverse</div>
                    <div className="text-xs text-gray-300">Experiences</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Floating Card: Sri Lanka Awaits */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/60 max-w-sm w-full text-[#0e382b]">
                <h3 className="font-serif text-xl font-bold mb-1">
                  Sri Lanka Awaits
                </h3>
                <p className="text-xs text-gray-600 mb-5 leading-relaxed">
                  Endless places to explore, unforgettable memories tailored to your personal pace.
                </p>
                <button
                  onClick={() => setIsPlanTripOpen(true)}
                  className="w-full bg-[#0e382b] hover:bg-[#165b40] text-white py-3 rounded-2xl text-xs font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Plan Your Adventure</span>
                  <ArrowRight className="w-4 h-4 text-[#e5a83b] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Destination Search & Filter Bar */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 w-full">
        <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(14,56,43,0.12)] border border-[#e2ede7]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
            {/* Field 1: Keyword Search */}
            <div className="md:col-span-4">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Search Destination
              </label>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] transition-colors">
                <MapPin className="w-4 h-4 text-[#0e382b] shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="w-full bg-transparent text-xs sm:text-sm font-medium text-gray-800 outline-none"
                />
              </div>
            </div>

            {/* Field 2: Category Selector */}
            <div className="md:col-span-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as DestinationCategory)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Beaches">Beaches</option>
                  <option value="Mountains">Mountains &amp; Hills</option>
                  <option value="Cultural">Cultural &amp; Sacred</option>
                  <option value="Wildlife">Wildlife &amp; Safari</option>
                  <option value="Adventure">Adventure &amp; Trekking</option>
                  <option value="Heritage">Heritage Forts</option>
                  <option value="Waterfalls">Waterfalls</option>
                  <option value="Island">Islands &amp; Marine</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 3: Region Selector */}
            <div className="md:col-span-3">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                Region
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-gray-200 hover:border-[#0e382b] bg-[#fafcfb] text-xs sm:text-sm font-medium text-gray-800 outline-none appearance-none cursor-pointer"
                >
                  {regions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Field 4: Search Button */}
            <div className="md:col-span-2 pt-1 md:pt-4">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('destinations-grid');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#0e382b] hover:bg-[#165b40] text-white p-3 sm:py-3.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Search</span>
                <Search className="w-4 h-4 text-[#e5a83b] group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Destination Section */}
      <section id="destinations-grid" className="py-16 sm:py-20 bg-[#fbfdfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-[11px] font-bold tracking-widest text-[#0e382b] uppercase bg-[#e9f4ef] px-3 py-1 rounded-full mb-3 inline-block">
                DISCOVER SRI LANKA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#072118] tracking-tight">
                Popular Destinations
              </h2>
            </div>

            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedRegion('All Regions');
                setSearchQuery('');
              }}
              className="mt-3 sm:mt-0 text-xs font-bold uppercase tracking-wider text-[#0e382b] hover:text-[#165b40] inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All Destinations</span>
              <ArrowRight className="w-4 h-4 text-[#e5a83b]" />
            </button>
          </div>

          {/* Category Filter Pills Row */}
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-4 mb-8">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#0e382b] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-[#edf5f1] border border-gray-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#e5a83b]' : 'text-gray-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Destinations Grid (4 columns) */}
          {filteredDestinations.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[#f2f8f5] text-[#0e382b] flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">No destinations found</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mb-4">
                We couldn't find any destinations matching your criteria. Try resetting your search filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedRegion('All Regions');
                  setSearchQuery('');
                }}
                className="bg-[#0e382b] text-white px-5 py-2 rounded-full text-xs font-semibold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDestinations.map((dest) => {
                const isFavorite = wishlist.includes(dest.id);
                return (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDestination(dest)}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#e2ede7] hover:border-[#0e382b]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                  >
                    {/* Destination Image Container */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Top Badges: Popular pill + Wishlist button */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        {dest.popular ? (
                          <span className="bg-white/90 backdrop-blur-md text-[#0e382b] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm">
                            Popular
                          </span>
                        ) : (
                          <span />
                        )}

                        <button
                          type="button"
                          onClick={(e) => toggleWishlist(dest.id, e)}
                          aria-label="Add to wishlist"
                          className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center transition-transform active:scale-90"
                        >
                          <Heart
                            className={`w-4 h-4 transition-colors ${
                              isFavorite ? 'fill-red-500 text-red-500' : 'text-white'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title & Region */}
                        <h3 className="font-serif text-lg font-bold text-[#0e382b] group-hover:text-[#165b40] transition-colors leading-snug">
                          {dest.name}
                        </h3>
                        <div className="text-xs text-gray-500 font-medium mb-2">
                          {dest.region}
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                          {dest.shortDesc}
                        </p>
                      </div>

                      {/* Rating & Explore Link */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs">
                          <Star className="w-3.5 h-3.5 fill-[#e5a83b] text-[#e5a83b]" />
                          <span className="font-bold text-gray-800">{dest.rating}</span>
                          <span className="text-gray-400">({dest.reviewsCount})</span>
                        </div>

                        <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0e382b] group-hover:text-[#165b40]">
                          <span>Explore Now</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#e5a83b] group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* "Ready to Explore?" CTA Banner */}
      <section className="py-8 bg-[#fbfdfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="dark-luxury-bg rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden border border-[#1b4e3c]">
            {/* Background Glow */}
            <div className="absolute right-10 top-0 w-80 h-80 bg-[#1f664a]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Headline */}
              <div className="lg:col-span-5">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                  Ready to Explore?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Let us take you to the most beautiful places in Sri Lanka with unforgettable experiences.
                </p>
              </div>

              {/* Right 4 Trust Badges */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {/* Badge 1 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#e5a83b]/20 flex items-center justify-center text-[#e5a83b] mb-2">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Expert Local<br />Guides</span>
                </div>

                {/* Badge 2 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#e5a83b]/20 flex items-center justify-center text-[#e5a83b] mb-2">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Best Price<br />Guarantee</span>
                </div>

                {/* Badge 3 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#e5a83b]/20 flex items-center justify-center text-[#e5a83b] mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white">Safe &amp; Secure<br />Travel</span>
                </div>

                {/* Badge 4 */}
                <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#e5a83b]/20 flex items-center justify-center text-[#e5a83b] mb-2">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white">24/7 Customer<br />Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Get Travel Inspiration & Exclusive Offers" Newsletter Section */}
      <section className="py-12 bg-[#fbfdfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#fcf8f2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#eddcc7] shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Illustrated Envelope + Text */}
              <div className="lg:col-span-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#eddcc7]/50 border border-[#e2cca9] flex items-center justify-center text-[#0e382b] shrink-0 text-2xl shadow-sm">
                  ✉️
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#072118] tracking-wide mb-0.5">
                    Get Travel Inspiration &amp; Exclusive Offers
                  </h3>
                  <p className="text-xs text-[#5f746b]">
                    Subscribe to our newsletter and never miss amazing travel deals.
                  </p>
                </div>
              </div>

              {/* Right: Input Form */}
              <div className="lg:col-span-6">
                {subscribed ? (
                  <div className="bg-[#edf7f2] border border-[#0f8b53]/30 rounded-2xl p-3 flex items-center gap-3 text-[#0e382b]">
                    <CheckCircle2 className="w-5 h-5 text-[#0f8b53]" />
                    <span className="text-xs font-semibold">
                      You are now subscribed to Ceylon Journeys Travel Club!
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-white border border-[#d9cebe] rounded-2xl px-4 py-3 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0e382b] transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-[#0e382b] hover:bg-[#165b40] text-white px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg shrink-0 cursor-pointer"
                    >
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Destination Detail Modal */}
      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={Boolean(selectedDestination)}
        onClose={() => setSelectedDestination(null)}
        onPlanTripForDest={(destName) => {
          setPrefilledDestName(destName);
          setIsPlanTripOpen(true);
        }}
      />

      {/* Plan Trip Modal */}
      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => {
          setIsPlanTripOpen(false);
          setPrefilledDestName(null);
        }}
      />
    </main>
  );
}
