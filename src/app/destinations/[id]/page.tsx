'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import confetti from 'canvas-confetti';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { DESTINATIONS, TOUR_PACKAGES } from '@/data/travelData';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import {
  MapPin,
  Calendar,
  Clock,
  Sun,
  Star,
  CheckCircle2,
  ChevronRight,
  Compass,
  ArrowRight,
  Send,
  Heart,
  Share2,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function DestinationDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2 Adults',
    hotelStyle: '5-Star Luxury / Boutique',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Find Destination
  const destination = useMemo(() => {
    return DESTINATIONS.find((d) => d.id === id);
  }, [id]);

  if (!destination) {
    const caseMatch = DESTINATIONS.find((d) => d.id.toLowerCase() === id?.toLowerCase());
    if (!caseMatch) {
      notFound();
    }
  }

  const dest = destination || DESTINATIONS[0];

  // Find tours that cover this destination
  const featuredTours = useMemo(() => {
    return TOUR_PACKAGES.filter((t) => {
      const destNameLower = dest.name.toLowerCase();
      const coversInList = t.destinationsCovered?.some(
        (dc) => destNameLower.includes(dc.toLowerCase()) || dc.toLowerCase().includes(dest.id.toLowerCase())
      );
      const isExplicitNearby = dest.nearbyTours?.includes(t.id);
      return coversInList || isExplicitNearby;
    }).slice(0, 3);
  }, [dest]);

  // Nearby / other destinations
  const otherDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => d.id !== dest.id).slice(0, 4);
  }, [dest]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#cba258', '#181513', '#25D366', '#ffffff'],
    });

    const msg = `Hello GoldenLine TOUR! I want to plan a custom trip to *${dest.name}* (${dest.region}).\n\n*Traveler:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* ${formData.travelDate || 'Flexible'}\n*Guests:* ${formData.travelers}\n*Hotel Style:* ${formData.hotelStyle}\n*Notes:* ${formData.notes || 'None'}`;
    const url = `https://wa.me/94715477149?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  const scrollToForm = () => {
    const el = document.getElementById('inquiry-planner');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const heroBg = dest.heroImage || dest.image;

  return (
    <main className="min-h-screen flex flex-col bg-[#F9F7F1] text-gray-800 relative">
      <WalkersHeader onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-end text-white overflow-hidden pb-16 pt-32">
        <Image
          src={heroBg}
          alt={dest.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181513] via-[#181513]/55 to-black/60" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb Trail */}
          <nav className="flex items-center gap-2 text-xs text-white/75 mb-6 uppercase tracking-wider overflow-x-auto no-scrollbar py-1">
            <Link href="/" className="hover:text-[#cba258] transition-colors whitespace-nowrap">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
            <Link href="/destinations" className="hover:text-[#cba258] transition-colors whitespace-nowrap">Destinations</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
            <span className="text-[#cba258] font-bold whitespace-nowrap">{dest.region}</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0" />
            <span className="text-white/90 font-medium truncate max-w-[200px]">{dest.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Category & Region Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-[#cba258] text-[#181513] text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
                  {dest.category}
                </span>
                <span className="bg-black/50 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#cba258]" />
                  <span>{dest.region}</span>
                </span>
                {dest.popular && (
                  <span className="bg-emerald-600/90 text-white text-xs font-bold px-3 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Top Rated Destination
                  </span>
                )}
              </div>

              {/* Title & Tagline */}
              <span
                className="font-caveat text-2xl sm:text-3xl lg:text-4xl text-[#cba258] block mb-1"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                {dest.subtitle}
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white drop-shadow-lg leading-tight mb-4">
                {dest.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow">
                {dest.description}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-1 text-[#cba258] bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-xs sm:text-sm font-bold">
                  <Star className="w-4 h-4 fill-[#cba258]" />
                  <span>{dest.rating.toFixed(1)}</span>
                  <span className="text-white/60 font-normal">({dest.reviewsCount} Traveler Reviews)</span>
                </div>

                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="bg-black/40 backdrop-blur-md text-white hover:text-[#cba258] px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#cba258] text-[#cba258]' : ''}`} />
                  <span>{isWishlisted ? 'Saved to Wishlist' : 'Save'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="bg-black/40 backdrop-blur-md text-white hover:text-[#cba258] px-3.5 py-1.5 rounded-full border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={scrollToForm}
                className="bg-[#cba258] hover:bg-[#b58d46] text-[#181513] font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Plan Custom Trip Here</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/94715477149?text=${encodeURIComponent(
                  `Hello GoldenLine TOUR! I'm interested in visiting ${dest.name} (${dest.region}). Can you recommend custom tours or chauffeur transfers?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp Inquire</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Overview Strip */}
      <section className="relative z-30 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {/* Best Time */}
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2E6] flex items-center justify-center text-[#cba258] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Best Season</span>
              <span className="text-xs sm:text-sm font-bold text-[#181513]">{dest.bestTime}</span>
            </div>
          </div>

          {/* Ideal Duration */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2E6] flex items-center justify-center text-[#cba258] shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Ideal Stay</span>
              <span className="text-xs sm:text-sm font-bold text-[#181513]">{dest.idealDuration || '1 - 2 Days'}</span>
            </div>
          </div>

          {/* Climate */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2E6] flex items-center justify-center text-[#cba258] shrink-0">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Climate</span>
              <span className="text-xs sm:text-sm font-bold text-[#181513]">{dest.weather || 'Warm & Tropical'}</span>
            </div>
          </div>

          {/* Region & Vibe */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-[#F5F2E6] flex items-center justify-center text-[#cba258] shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">Province</span>
              <span className="text-xs sm:text-sm font-bold text-[#181513]">{dest.region}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Story, Attractions, Experiences */}
        <div className="lg:col-span-8 space-y-16">
          {/* Section 1: Overview & History */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cba258] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Destination Spotlight</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181513] mb-6">
              About {dest.name}
            </h2>
            <div className="prose prose-stone max-w-none text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>{dest.description}</p>
              <p>
                Whether you are exploring ancient heritage citadels, hiking scenic mountain gaps, unwinding on sun-drenched tropical sands, or tracking wildlife through national reserves, {dest.name} delivers an enchanting quintessential Sri Lankan experience.
              </p>
            </div>

            {/* Travel Tips Alert Box */}
            {dest.travelTips && dest.travelTips.length > 0 && (
              <div className="mt-8 bg-[#F5F2E6] border border-[#cba258]/30 rounded-2xl p-5 sm:p-6">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#181513] flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#cba258]" />
                  <span>GoldenLine Local Travel Tips</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {dest.travelTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Section 2: Top Attractions & Landmarks */}
          <section>
            <div className="mb-8">
              <span
                className="font-caveat text-2xl sm:text-3xl text-[#cba258] block mb-1"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Must-Visit Landmarks
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181513]">
                Top Attractions in {dest.name}
              </h2>
            </div>

            {dest.attractionDetails && dest.attractionDetails.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {dest.attractionDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.image || dest.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="bg-[#181513]/80 backdrop-blur-md px-3 py-1 rounded-full font-bold uppercase tracking-widest text-[#cba258] text-[10px]">
                          Attraction #{idx + 1}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#181513] mb-2 group-hover:text-[#cba258] transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.attractions.map((attr, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F5F2E6] flex items-center justify-center text-[#cba258] font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-serif font-bold text-[#181513] text-sm sm:text-base">
                      {attr}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Section 3: Curated Things to Do */}
          {dest.thingsToDo && dest.thingsToDo.length > 0 && (
            <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
              <div className="mb-8">
                <span
                  className="font-caveat text-2xl sm:text-3xl text-[#cba258] block mb-1"
                  style={{ fontFamily: 'var(--font-caveat), cursive' }}
                >
                  Unforgettable Experiences
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181513]">
                  Signature Things to Do
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {dest.thingsToDo.map((todo, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F9F7F1] border border-gray-100 hover:border-[#cba258]/40 transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#cba258] bg-[#181513] px-2.5 py-1 rounded-md">
                        {todo.tag || 'Experience'}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#181513] mb-1.5">
                      {todo.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {todo.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: Tours Featuring This Destination */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span
                  className="font-caveat text-2xl sm:text-3xl text-[#cba258] block mb-1"
                  style={{ fontFamily: 'var(--font-caveat), cursive' }}
                >
                  Ready-Made Itineraries
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181513]">
                  Tours Visiting {dest.name}
                </h2>
              </div>
              <Link
                href="/tours"
                className="text-xs uppercase tracking-wider font-bold text-[#cba258] hover:text-[#181513] flex items-center gap-1 transition-colors"
              >
                <span>View All Tour Packages</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {featuredTours.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredTours.map((tour) => (
                  <Link
                    key={tour.id}
                    href={`/tours/${tour.id}`}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 group flex flex-col"
                  >
                    <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181513]/85 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-[#cba258] text-[#181513] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                          {tour.duration}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold">
                        <span className="text-[#cba258] text-[11px] block">{tour.categoryLabel}</span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-base font-bold text-[#181513] group-hover:text-[#cba258] transition-colors line-clamp-1 mb-2">
                          {tour.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                          {tour.description}
                        </p>
                      </div>
                      <div className="border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                        <span className="font-bold text-[#181513] flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-[#cba258] text-[#cba258]" />
                          <span>{tour.rating.toFixed(1)}</span>
                        </span>
                        <span className="text-[#cba258] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Explore Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 text-center border border-gray-100">
                <p className="text-sm text-gray-600 mb-4">
                  We create bespoke tailor-made private tours covering {dest.name} and surrounding highlights.
                </p>
                <button
                  onClick={scrollToForm}
                  className="bg-[#181513] hover:bg-[#cba258] text-white hover:text-[#181513] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request A Custom Itinerary
                </button>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Sticky Booking & Trip Planner Form */}
        <div className="lg:col-span-4">
          <div id="inquiry-planner" className="sticky top-28 space-y-8">
            {/* Custom Trip Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#cba258] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Tailor-Made Journey</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181513] mb-2">
                Plan a Trip to {dest.name}
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Receive a customized private tour proposal with chauffeur vehicle and star hotels within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-emerald-900 text-base">Inquiry Submitted!</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Opening WhatsApp to connect you directly with our senior tour consultant.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                        Travelers
                      </label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors"
                      >
                        <option value="1 Solo Traveler">1 Solo Traveler</option>
                        <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                        <option value="Small Family (3-4)">Small Family (3-4)</option>
                        <option value="Group (5+ People)">Group (5+ People)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                      Hotel Style Preference
                    </label>
                    <select
                      value={formData.hotelStyle}
                      onChange={(e) => setFormData({ ...formData, hotelStyle: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors"
                    >
                      <option value="5-Star Luxury / Relais & Châteaux">5-Star Luxury / Boutique</option>
                      <option value="4-Star Premium Comfort">4-Star Premium Comfort</option>
                      <option value="3-Star Standard Star Hotels">3-Star Standard Star Hotels</option>
                      <option value="Transport & Chauffeur Only">Transport & Chauffeur Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                      Special Requests / Other Stops
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us any other destinations you'd like to combine with ${dest.name}...`}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#cba258] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#cba258] hover:bg-[#b58d46] text-[#181513] font-bold text-xs sm:text-sm uppercase tracking-wider py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Custom Tour Quote</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">Prefer instant chat?</span>
                <a
                  href={`https://wa.me/94715477149?text=${encodeURIComponent(
                    `Hi GoldenLine TOUR! Please send me rates and tour details for ${dest.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                  <span>+94 71 547 7149</span>
                </a>
              </div>
            </div>

            {/* Why Book With GoldenLine Card */}
            <div className="bg-[#181513] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-[#cba258] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span>GoldenLine Guarantee</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-white/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                  <span><strong>100% Private Transfers:</strong> Never shared with other tourists.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                  <span><strong>Govt Licensed Guides:</strong> Courteous, English-speaking chauffeurs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                  <span><strong>Full Flexibility:</strong> Customize stops, departure times, and routes freely.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0 mt-0.5" />
                  <span><strong>Zero Hidden Costs:</strong> Transparent pricing inclusive of all expressway tolls and fuel.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Other Destinations Carousel/Grid */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span
                className="font-caveat text-2xl sm:text-3xl text-[#cba258] block mb-1"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Continue Exploring
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#181513]">
                More Iconic Destinations
              </h2>
            </div>
            <Link
              href="/destinations"
              className="text-xs uppercase tracking-wider font-bold text-[#cba258] hover:text-[#181513] flex items-center gap-1 transition-colors"
            >
              <span>View All 20 Destinations</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherDestinations.map((other) => (
              <Link
                key={other.id}
                href={`/destinations/${other.id}`}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 block bg-[#181513]"
              >
                <Image
                  src={other.image}
                  alt={other.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181513]/95 via-[#181513]/35 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#cba258] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    {other.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-1 text-[10px] text-[#cba258] font-bold tracking-widest uppercase mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{other.region}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold uppercase tracking-wider group-hover:text-[#cba258] transition-colors line-clamp-1">
                    {other.name}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1 mt-1">
                    {other.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WalkersFooter />
      <OffcanvasSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </main>
  );
}
