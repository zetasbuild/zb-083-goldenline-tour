'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { MandalaBackground, TropicalLeafBackground } from '@/components/DecorativeBackgrounds';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import {
  TRANSFER_ROUTES,
  ORIGIN_HUBS,
  SERVICE_PILLARS,
  SERVICE_TYPES,
  CONTACT_INFO,
  NTCA_TRUST_PILLARS,
  NTCA_COMPARISON,
  TransferRoute,
} from '@/data/transferRates';
import {
  Plane,
  Car,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  Phone,
  Mail,
  User,
  UserCheck,
  ArrowRight,
  Search,
  Compass,
  Star,
  ChevronRight,
  Headphones,
  CheckCircle2,
  BadgePercent,
  SlidersHorizontal,
  Table as TableIcon,
  LayoutGrid,
  Info,
  Navigation,
  Luggage,
  Users,
  Check,
  X,
  Shield,
  FileCheck,
  Lock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function SedanTransfersPage() {
  // Active Origin Hub Tab
  const [selectedHub, setSelectedHub] = useState<'colombo-airport' | 'kandy' | 'nuwara-eliya'>('colombo-airport');
  
  // Search & Category Filter State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('NTCA Chauffeur Sedan Transfer Inquiry');

  // Booking / Fare Inquiry Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: 'Colombo Airport (CMB)',
    dropoffLocation: 'Kandy Hill Capital',
    pickupDate: '',
    pickupTime: '',
    flightNumber: '',
    passengers: '2',
    luggage: '2',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['All', 'Popular', 'Beaches', 'Hill Country', 'Cultural', 'Wildlife', 'North & East'];

  const transferSlides = [
    { image: '/images/locations/hero-ella.webp', alt: 'Scenic Sri Lanka Mountain Highway & Tea Country', location: 'Highland Scenic Routes' },
    { image: '/images/locations/sigiriya.webp', alt: 'Sigiriya Rock Citadel Cultural Transfers', location: 'Cultural Triangle' },
    { image: '/images/locations/mirissa.webp', alt: 'Southern Expressway & Beach Resort Transfers', location: 'South Coast Beaches' },
    { image: '/images/locations/nuwaraeliya.webp', alt: 'Nuwara Eliya Tea Gardens Chauffeur Drive', location: 'Little England Highlands' },
    { image: '/images/locations/gallefort.webp', alt: 'Historic Galle Fort Lighthouse Coastal Drop', location: 'Galle & Southern Coast' },
    { image: '/images/locations/yala.webp', alt: 'Yala National Park Safari Chauffeur Drop', location: 'Yala & Deep South' },
  ];

  // Current Active Hub Information
  const currentHubInfo = useMemo(() => {
    return ORIGIN_HUBS.find((h) => h.slug === selectedHub) || ORIGIN_HUBS[0];
  }, [selectedHub]);

  // Filtered Routes for selected hub and search filters
  const filteredRoutes = useMemo(() => {
    return TRANSFER_ROUTES.filter((route) => {
      const matchHub = route.fromSlug === selectedHub;
      const matchCategory = selectedCategory === 'All' || route.category === selectedCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        route.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchHub && matchCategory && matchSearch;
    });
  }, [selectedHub, selectedCategory, searchQuery]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRouteBooking = (route: TransferRoute) => {
    const text = encodeURIComponent(
      `Hello GoldenLine TOUR! 🇱🇰\n\nI would like to book a private Sedan Transfer with an NTCA Association Driver:\n\n📍 Route: ${route.from} ➔ ${route.to}\n🚗 Service: Private A/C Sedan + Certified NTCA Chauffeur\n⏱️ Est. Duration: ${route.duration}\n\nPlease confirm driver availability and reservation details.`
    );
    window.open(`https://wa.me/94715477149?text=${text}`, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    const msg = encodeURIComponent(
      `Hello GoldenLine TOUR! 🇱🇰\n\nI want to book an NTCA Chauffeur Transfer:\n\n👤 Name: ${formData.fullName}\n📞 Contact: ${formData.phone || formData.email}\n📍 Pickup: ${formData.pickupLocation}\n🏁 Destination: ${formData.dropoffLocation}\n📅 Date: ${formData.pickupDate} at ${formData.pickupTime || 'Flexible'}\n✈️ Flight: ${formData.flightNumber || 'None'}\n👥 Passengers: ${formData.passengers} Pax (${formData.luggage} Bags)\n📝 Notes: ${formData.notes || 'None'}\n\nPlease confirm my certified NTCA driver reservation.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/94715477149?text=${msg}`, '_blank');
    }, 900);
  };

  const selectRouteForForm = (route: TransferRoute) => {
    setFormData((prev) => ({
      ...prev,
      pickupLocation: route.from,
      dropoffLocation: route.to,
    }));
    const el = document.getElementById('booking-form-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2E6] relative">
      {/* GoldenLine TOUR Luxury Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* =========================================================================
          HERO BANNER: High Impact Luxury Backdrop & GoldenLine Headline
      ========================================================================== */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <BackgroundAutoSlider
          slides={transferSlides}
          intervalMs={4500}
          overlayGradient="bg-gradient-to-b from-black/85 via-black/45 to-[#181513]"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* NTCA Association Driver Official Trust Badge */}
          <div
            data-reveal="fade-down"
            data-reveal-delay="50"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181513]/85 border border-[#cba258]/60 backdrop-blur-md text-[#cba258] mb-5 shadow-2xl"
          >
            <ShieldCheck className="w-4 h-4 text-[#cba258] shrink-0" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white">
              Official NTCA Association Drivers • SLTDA Certified &amp; Vetted
            </span>
          </div>

          <div>
            <span
              data-reveal="fade-down"
              data-reveal-delay="100"
              className="font-caveat text-3xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-8px] sm:mb-[-15px] z-10 -rotate-2 inline-block"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Private Chauffeur &amp;
            </span>

            <h1 
              data-reveal="fade-up"
              data-reveal-delay="200"
              className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[86px] font-bold tracking-wider sm:tracking-widest text-[#f8fbfa] uppercase leading-tight sm:leading-none drop-shadow-2xl mb-5 max-w-full"
            >
              SEDAN TRANSFERS
            </h1>
          </div>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="300"
            className="text-xs sm:text-base md:text-lg text-white/90 font-medium max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow-md px-2"
          >
            Safe, reliable, and premium private vehicle transfers across Sri Lanka. Driven exclusively by accredited <strong>National Tourist Chauffeur Drivers’ Association (NTCA)</strong> members with comprehensive passenger insurance, zero commission traps, and fluent English.
          </p>

          {/* Trust Highlights Checklist in Hero */}
          <div 
            data-reveal="fade-up" 
            data-reveal-delay="350"
            className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-[11px] sm:text-xs text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cba258]" />
              <span>NTCA Licensed Drivers</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cba258]" />
              <span>SLTDA Tourism Registered</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cba258]" />
              <span>Zero Forced Shopping</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cba258]" />
              <span>Full Passenger Insurance</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div data-reveal="zoom-in" data-reveal-delay="400" className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#ntca-trust"
              className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#cba258] hover:bg-[#b88f46] text-[#181513] shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Award className="w-4 h-4 text-[#181513]" />
              <span>Why NTCA Drivers Matter</span>
            </a>

            <a
              href="#rates-directory"
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Browse Routes</span>
            </a>

            <a
              href={`https://wa.me/94715477149?text=${encodeURIComponent('Hello GoldenLine TOUR! I want to book a private sedan transfer with a certified NTCA chauffeur.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE HIGHLIGHTS STRIP: Auto-Sliding Marquee
      ========================================================================== */}
      <section className="bg-[#181513] border-t border-b border-[#cba258]/20 text-white py-6 relative z-20 overflow-hidden">
        <div className="flex group relative w-full">
          {/* First Marquee Group */}
          <div className="animate-marquee flex gap-12 md:gap-24 min-w-full justify-around shrink-0 pr-12 md:pr-24 group-hover:[animation-play-state:paused]">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center shrink-0 group/item cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#cba258]/10 border border-[#cba258]/30 flex items-center justify-center mb-2.5 group-hover/item:bg-[#cba258] group-hover/item:scale-110 transition-all duration-300">
                  {idx === 0 && <Car className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 1 && <Award className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 3 && <UserCheck className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 4 && <BadgePercent className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 5 && <Headphones className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap">
                  {pillar.title}
                </span>
                <span className="text-[11px] text-gray-300 mt-0.5 whitespace-nowrap">
                  {idx === 0 ? 'Toyota Sedans' : idx === 1 ? 'SLTDA & NTCA' : idx === 2 ? 'Fully Insured' : idx === 3 ? 'Fluent English' : idx === 4 ? 'No Hidden Fees' : '24/7 Helpline'}
                </span>
              </div>
            ))}
          </div>

          {/* Second Marquee Group (for seamless loop) */}
          <div className="animate-marquee flex gap-12 md:gap-24 min-w-full justify-around shrink-0 pr-12 md:pr-24 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {SERVICE_PILLARS.map((pillar, idx) => (
              <div key={`dup-${idx}`} className="flex flex-col items-center justify-center shrink-0 group/item cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-[#cba258]/10 border border-[#cba258]/30 flex items-center justify-center mb-2.5 group-hover/item:bg-[#cba258] group-hover/item:scale-110 transition-all duration-300">
                  {idx === 0 && <Car className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 1 && <Award className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 2 && <ShieldCheck className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 3 && <UserCheck className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 4 && <BadgePercent className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                  {idx === 5 && <Headphones className="w-6 h-6 text-[#cba258] group-hover/item:text-[#181513] transition-colors" />}
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white whitespace-nowrap">
                  {pillar.title}
                </span>
                <span className="text-[11px] text-gray-300 mt-0.5 whitespace-nowrap">
                  {idx === 0 ? 'Toyota Sedans' : idx === 1 ? 'SLTDA & NTCA' : idx === 2 ? 'Fully Insured' : idx === 3 ? 'Fluent English' : idx === 4 ? 'No Hidden Fees' : '24/7 Helpline'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEDICATED NTCA TRUST & SAFETY SECTION: Why NTCA Drivers Make the Difference
      ========================================================================== */}
      <section id="ntca-trust" className="py-20 lg:py-28 bg-[#181513] text-white relative overflow-hidden border-b border-[#cba258]/30">
        {/* Background Mandala & Radial Highlights */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-10 text-[#cba258]">
          <MandalaBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] translate-y-1/3 -translate-x-1/3 pointer-events-none opacity-10 text-[#cba258]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cba258_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#cba258]/20 border border-[#cba258]/50 px-4 py-1.5 rounded-full mb-4">
              <Award className="w-4 h-4 text-[#cba258]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#cba258]">
                Official Sri Lanka Tourism Accreditation
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Travel with Total Trust: <br />
              <span className="text-[#cba258]">Official NTCA Association Drivers</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              When renting a vehicle in Sri Lanka, passenger safety, honest conduct, and experienced local navigation matter most. All GoldenLine TOUR transfers are driven by official card-holding members of the <strong>National Tourist Chauffeur Drivers’ Association (NTCA)</strong>, registered with the <strong>Sri Lanka Tourism Development Authority (SLTDA)</strong>.
            </p>
          </div>

          {/* 4 Core NTCA Trust Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {NTCA_TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#cba258]/25 hover:border-[#cba258] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#cba258]/15 border border-[#cba258]/40 flex items-center justify-center text-[#cba258] group-hover:bg-[#cba258] group-hover:text-[#181513] transition-all duration-300">
                      {idx === 0 && <ShieldCheck className="w-6 h-6" />}
                      {idx === 1 && <Award className="w-6 h-6" />}
                      {idx === 2 && <Sparkles className="w-6 h-6" />}
                      {idx === 3 && <Compass className="w-6 h-6" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#cba258]/15 text-[#cba258] border border-[#cba258]/30">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-[#cba258] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs text-[#cba258] font-medium mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-[#cba258] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>GoldenLine Verified Standard</span>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Matrix: Unregistered Cabs vs GoldenLine NTCA Drivers */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-4 sm:p-10 border-2 border-[#cba258]/30 shadow-2xl mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#cba258]">
                  Safety &amp; Transparency Comparison
                </span>
                <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mt-1">
                  Why Booking an NTCA Association Driver Protects You
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/50 px-4 py-1.5 rounded-full text-xs font-bold text-[#25D366] shrink-0 self-start md:self-auto">
                <Check className="w-4 h-4" />
                <span>100% Guest Satisfaction Track Record</span>
              </div>
            </div>

            <div className="overflow-x-auto -mx-1 sm:mx-0">
              <table className="w-full text-left border-collapse table-fixed md:table-auto">
                <thead>
                  <tr className="border-b border-white/10 text-[11px] sm:text-sm uppercase tracking-wider text-gray-400">
                    <th className="py-3 px-4 font-bold min-w-[180px] hidden md:table-cell">
                      Service Standard
                    </th>
                    <th className="py-3 px-2.5 sm:px-4 font-bold text-red-400 w-1/2 md:w-auto md:min-w-[200px]">
                      Unregistered Street Taxis
                    </th>
                    <th className="py-3 px-2.5 sm:px-4 font-bold text-[#cba258] w-1/2 md:w-auto md:min-w-[220px] bg-[#cba258]/10 rounded-t-xl">
                      GoldenLine NTCA Chauffeurs
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                  {NTCA_COMPARISON.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white hidden md:table-cell">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-2.5 sm:px-4 text-gray-400 w-1/2 md:w-auto align-top">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400 shrink-0 mt-0.5" />
                          <span className="leading-tight sm:leading-snug">{row.unregistered}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-2.5 sm:px-4 font-medium text-white bg-[#cba258]/10 w-1/2 md:w-auto align-top">
                        <div className="flex items-start gap-1.5 sm:gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#cba258] shrink-0 mt-0.5" />
                          <span className="leading-tight sm:leading-snug">{row.goldenline}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chauffeur Details Guarantee Footer Note */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#181513]/80 p-4 sm:p-6 rounded-2xl border border-[#cba258]/30">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#cba258]/20 flex items-center justify-center text-[#cba258] shrink-0 mt-0.5 sm:mt-0">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    Pre-Trip Driver Transparency Guarantee
                  </h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Before your journey begins, we send you your assigned NTCA driver&apos;s photo ID, full name, WhatsApp contact, and vehicle registration number.
                  </p>
                </div>
              </div>

              <a
                href="#booking-form-section"
                className="px-5 py-2.5 rounded-full bg-[#cba258] hover:bg-[#b88f46] text-[#181513] text-xs font-bold uppercase tracking-wider shrink-0 text-center transition-transform hover:scale-105"
              >
                Reserve Your Chauffeur
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN INTERACTIVE RATES DIRECTORY
      ========================================================================== */}
      <section id="rates-directory" className="py-16 lg:py-24 bg-[#F5F2E6] relative overflow-hidden">
        {/* Background SVGs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-15 text-[#cba258]">
          <MandalaBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[#181513]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span 
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Direct Islandwide Transfers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#181513] mb-3">
              Explore Routes by Origin Hub
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Select your departure point to view all official private sedan transfer routes with certified NTCA chauffeurs across Sri Lanka.
            </p>
          </div>

          {/* =====================================================================
              3 ORIGIN HUB TABS (Airport, Kandy, Nuwara Eliya)
          ====================================================================== */}
          <div className="flex md:grid md:grid-cols-3 gap-4 mb-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {ORIGIN_HUBS.map((hub) => {
              const isSelected = selectedHub === hub.slug;
              return (
                <button
                  key={hub.slug}
                  onClick={() => {
                    setSelectedHub(hub.slug);
                    setSelectedCategory('All');
                  }}
                  className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border flex-shrink-0 w-[260px] sm:w-[280px] md:w-auto snap-start ${
                    isSelected
                      ? 'bg-white text-[#181513] border-[#cba258] shadow-md ring-1 ring-[#cba258] scale-[1.02]'
                      : 'bg-white/60 text-gray-500 border-gray-200 hover:border-[#cba258]/50 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                      isSelected ? 'bg-[#F5F2E6] text-[#cba258]' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {hub.badge}
                    </span>
                    {hub.slug === 'colombo-airport' && <Plane className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#cba258]' : 'text-gray-400'}`} />}
                    {hub.slug === 'kandy' && <Compass className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#cba258]' : 'text-gray-400'}`} />}
                    {hub.slug === 'nuwara-eliya' && <MapPin className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#cba258]' : 'text-gray-400'}`} />}
                  </div>

                  <h3 className={`font-serif text-lg sm:text-xl font-bold mb-1 ${isSelected ? 'text-[#181513]' : 'text-gray-600'}`}>
                    {hub.title}
                  </h3>
                  <p className={`text-[11px] leading-relaxed line-clamp-2 ${isSelected ? 'text-gray-600' : 'text-gray-400'}`}>
                    {hub.subtitle}
                  </p>

                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold">
                    <span className={isSelected ? 'text-gray-600' : 'text-gray-400'}>19 Direct Routes</span>
                    <span className={`flex items-center gap-1 shrink-0 ${isSelected ? 'text-[#cba258]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                      View Routes <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* =====================================================================
              FILTER & SEARCH TOOLBAR
          ====================================================================== */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative flex-1 min-w-0">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder={`Search destination from ${currentHubInfo.title}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 bg-[#F5F2E6]/60 border border-gray-200 rounded-full text-xs sm:text-sm text-[#181513] placeholder:text-gray-400 focus:outline-none focus:border-[#cba258] focus:bg-white transition-all truncate"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-bold"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* View Switcher Pills */}
              <div className="flex items-center justify-center sm:justify-end gap-1.5 bg-[#F5F2E6] p-1.5 rounded-full border border-gray-200 shrink-0">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#181513] text-[#cba258] shadow-sm'
                      : 'text-gray-600 hover:text-[#181513]'
                  }`}
                  aria-label="Cards view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    viewMode === 'table'
                      ? 'bg-[#181513] text-[#cba258] shadow-sm'
                      : 'text-gray-600 hover:text-[#181513]'
                  }`}
                  aria-label="Routes table view"
                >
                  <TableIcon className="w-3.5 h-3.5" />
                  <span>Route Table</span>
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-4 mt-4 border-t border-gray-100 sm:justify-center">
              <span className="text-[11px] font-bold uppercase text-gray-400 shrink-0 mr-1">
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#181513] text-[#cba258] shadow-md scale-105'
                      : 'bg-[#F5F2E6] text-gray-600 hover:bg-[#eae1c8] border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hub Title & Count Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 px-2 items-start">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#181513]">
                {currentHubInfo.title} ➔ All Destinations
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Showing {filteredRoutes.length} of 19 official transfer routes • Driven by NTCA Association Chauffeurs
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#cba258] bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm shrink-0 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>NTCA Driver &amp; Fuel Included</span>
            </div>
          </div>

          {/* =====================================================================
              VIEW 1: CARDS GRID VIEW
          ====================================================================== */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  onClick={() => selectRouteForForm(route)}
                  className="hover-box group h-[440px] sm:h-[480px] cursor-pointer rounded-3xl overflow-hidden relative shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 text-white border border-black/10"
                >
                  {/* Full Bleed Background Image */}
                  <Image
                    src={route.image || 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80'}
                    alt={`${route.from} to ${route.to}`}
                    fill
                    className="object-cover hover-box__img group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181513]/95 via-[#181513]/45 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-black/60 backdrop-blur-md text-[#cba258] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
                      {route.category}
                    </span>
                    <span className="bg-[#181513]/80 backdrop-blur-md border border-[#cba258]/50 px-2.5 py-1 rounded-full text-[10px] font-bold text-[#cba258] flex items-center gap-1 shadow-sm">
                      <Award className="w-3 h-3 text-[#cba258]" />
                      <span>NTCA Driver</span>
                    </span>
                  </div>

                  {/* Card Footer Details */}
                  <div className="relative z-10 flex flex-col justify-end">
                    <div className="border-b border-white/20 pb-3 mb-3 group-hover:border-white/40 transition-colors">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#cba258] font-bold tracking-widest uppercase mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{route.from} ➔</span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wide leading-tight group-hover:text-[#cba258] transition-colors line-clamp-2 min-h-[3rem] flex items-center">
                        {route.to}
                      </h3>
                      <p className="text-xs text-gray-300 line-clamp-2 mt-1.5 leading-relaxed">
                        {route.duration} • Fixed Drop • Up to 4 Pax • A/C
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#cba258] font-bold">
                          Official Service
                        </div>
                        <div className="font-serif text-sm sm:text-base font-bold text-white group-hover:text-[#cba258] transition-colors">
                          NTCA Chauffeur Drop
                        </div>
                      </div>

                      {/* Next Button Style */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppRouteBooking(route);
                        }}
                        className="next-btn next-btn--white group-hover:scale-105 transition-transform cursor-pointer"
                        aria-label={`Book transfer to ${route.to}`}
                      >
                        <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#25D366] transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-xs uppercase tracking-widest font-bold">Book</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =====================================================================
              VIEW 2: TABLE VIEW
          ====================================================================== */}
          {viewMode === 'table' && (
            <div className="bg-[#181513] rounded-3xl p-4 sm:p-8 shadow-2xl border-2 border-[#cba258]/30 overflow-hidden text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#cba258]/30">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#cba258]">
                    Official Sedan Transfer Route Directory
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                    {currentHubInfo.title} ➔ Islandwide Destinations
                  </h3>
                </div>
                <div className="text-right text-xs text-gray-300">
                  <span className="inline-block px-3 py-1 bg-[#cba258]/20 text-[#cba258] border border-[#cba258]/40 rounded-full font-bold">
                    100% NTCA Certified • Fully Insured
                  </span>
                </div>
              </div>

              {/* Responsive Table Container */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="border-b border-[#cba258]/40 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#cba258]">
                      <th className="py-3.5 px-4 min-w-[200px]">Route</th>
                      <th className="py-3.5 px-4 hidden md:table-cell">Category</th>
                      <th className="py-3.5 px-4 hidden sm:table-cell">Est. Duration</th>
                      <th className="py-3.5 px-4 text-right min-w-[150px]">Chauffeur Standard</th>
                      <th className="py-3.5 px-4 text-center min-w-[120px]">Instant Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs sm:text-sm font-medium">
                    {filteredRoutes.map((route, idx) => (
                      <tr 
                        key={route.id}
                        className={`hover:bg-white/5 transition-colors ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                      >
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[#cba258] shrink-0" />
                            <div>
                              <span className="font-bold text-white text-sm sm:text-base whitespace-normal line-clamp-2">
                                {route.from} ➔ {route.to}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 hidden md:table-cell text-gray-300">
                          <span className="bg-white/10 px-2.5 py-1 rounded-full text-[11px]">
                            {route.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 hidden sm:table-cell text-gray-300">
                          {route.duration}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-block px-3 py-1 bg-[#cba258]/15 text-[#cba258] border border-[#cba258]/30 rounded-full text-xs font-semibold">
                            NTCA Chauffeur
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleWhatsAppRouteBooking(route)}
                            className="bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                          >
                            <WhatsAppIcon className="w-3.5 h-3.5 fill-white" />
                            <span>Book</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Poster Disclaimer Note */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                <Info className="w-4 h-4 text-[#cba258] shrink-0" />
                <span>
                  <strong>Official Guarantee:</strong> {CONTACT_INFO.disclaimer} Includes fuel, clean air-conditioned Japanese sedan, and full passenger insurance.
                </span>
              </div>
            </div>
          )}

          {/* Fallback for no search results */}
          {filteredRoutes.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-[#181513]">No direct routes match your search</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
                Looking for a custom pickup or off-the-beaten-path destination? Send us an inquiry and we will arrange a direct quotation with an NTCA chauffeur!
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 px-6 py-2.5 bg-[#cba258] text-[#181513] rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          SERVICE BADGES (4 Service Pillars from Posters)
      ========================================================================== */}
      <section className="py-12 bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_TYPES.map((st, i) => (
              <div key={i} className="p-6 rounded-3xl bg-[#F5F2E6]/60 border border-gray-200 hover:border-[#cba258] transition-all hover:shadow-md">
                <div className="w-10 h-10 rounded-2xl bg-[#181513] text-[#cba258] flex items-center justify-center mb-4 shadow-sm">
                  {i === 0 && <MapPin className="w-5 h-5" />}
                  {i === 1 && <Plane className="w-5 h-5" />}
                  {i === 2 && <Compass className="w-5 h-5" />}
                  {i === 3 && <ShieldCheck className="w-5 h-5" />}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#181513] mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTANT BOOKING & CUSTOM RIDE ESTIMATOR FORM
      ========================================================================== */}
      <section id="booking-form-section" className="py-20 lg:py-28 bg-[#181513] text-white relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#cba258_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Information & Trust */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#cba258]/20 border border-[#cba258]/40 px-4 py-1.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#cba258]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#cba258]">
                  Verified NTCA Chauffeur Booking
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Book Your Ride with Total Confidence
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Whether you need a prompt airport transfer, intercity sedan drop, or an English-speaking chauffeur for your whole Sri Lankan holiday, submit your itinerary and get direct confirmation.
              </p>

              {/* Key Features Checklist */}
              <div className="space-y-3 pt-2">
                {[
                  'Official NTCA Certified Tourist Chauffeur assigned upon booking',
                  'Free Colombo Airport Meet & Greet with personalized Nameboard',
                  'Full Commercial Tourist Passenger Insurance on all journeys',
                  'Strict Zero-Commission & No Forced Shopping Guarantee',
                  'Luggage assistance, clean vehicle & cool bottled water included',
                  'Direct WhatsApp coordination & driver photo ID shared before pickup',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#cba258] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Hotline Box */}
              <div className="p-6 rounded-3xl bg-white/5 border border-[#cba258]/30 backdrop-blur-md">
                <div className="text-xs uppercase font-bold text-[#cba258] tracking-wider mb-1">
                  Direct Chauffeur Booking Hotline
                </div>
                <div className="space-y-1">
                  <a
                    href="tel:+94715477149"
                    className="font-serif text-2xl sm:text-3xl font-bold text-white hover:text-[#cba258] transition-colors flex items-center gap-3"
                  >
                    <Phone className="w-6 h-6 text-[#cba258]" />
                    <span>+94 71 547 7149</span>
                  </a>
                  <a
                    href="tel:+94723210119"
                    className="text-xs text-gray-300 hover:text-[#cba258] transition-colors block pl-9"
                  >
                    Secondary: +94 72 321 0119
                  </a>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Call or WhatsApp anytime 24/7 for urgent rides and custom itinerary planning.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 text-[#181513] shadow-2xl border border-gray-200">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#cba258] bg-[#F5F2E6] px-3 py-1 rounded-full mb-2">
                    <Award className="w-3.5 h-3.5 text-[#cba258]" />
                    <span>NTCA Accredited Dispatch</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181513]">
                    Transfer Reservation
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Fill in your travel details to reserve your private vehicle with a certified NTCA tourist chauffeur.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#F5F2E6] border border-[#cba258] text-center space-y-4">
                    <CheckCircle2 className="w-16 h-16 text-[#25D366] mx-auto animate-bounce" />
                    <h4 className="font-serif text-2xl font-bold text-[#181513]">
                      Transfer Request Received!
                    </h4>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Connecting you directly to our dispatch WhatsApp at <strong>+94 71 547 7149</strong> to confirm your NTCA chauffeur.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-bold text-[#cba258] uppercase tracking-wider underline hover:text-[#181513]"
                    >
                      Book Another Transfer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {/* Origin and Destination */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Pickup Location *
                        </label>
                        <input
                          type="text"
                          required
                          name="pickupLocation"
                          value={formData.pickupLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Colombo Airport (CMB)"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Drop-Off Destination *
                        </label>
                        <input
                          type="text"
                          required
                          name="dropoffLocation"
                          value={formData.dropoffLocation}
                          onChange={handleInputChange}
                          placeholder="e.g. Kandy, Galle, Sigiriya"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Pickup Date *
                        </label>
                        <input
                          type="date"
                          required
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Pickup Time / Flight Time
                        </label>
                        <input
                          type="time"
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Flight Number & Passengers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Flight No. (Optional)
                        </label>
                        <input
                          type="text"
                          name="flightNumber"
                          value={formData.flightNumber}
                          onChange={handleInputChange}
                          placeholder="e.g. UL 504"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Passengers
                        </label>
                        <select
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons (Max Sedan)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Luggage
                        </label>
                        <select
                          name="luggage"
                          value={formData.luggage}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        >
                          <option value="1">1 Large Bag</option>
                          <option value="2">2 Large Bags</option>
                          <option value="3">3 Bags (Max Sedan)</option>
                        </select>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+94 or Country Code"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@email.com"
                          className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    {/* Special Notes */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Special Requests or Itinerary Stops
                      </label>
                      <textarea
                        rows={2}
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="e.g. Stop at Pinnawala Elephant Orphanage on the way to Kandy..."
                        className="w-full px-4 py-3 bg-[#F5F2E6]/50 border border-gray-300 rounded-xl text-xs sm:text-sm text-[#181513] focus:outline-none focus:border-[#cba258] focus:bg-white transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-4 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer mt-2 leading-tight"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white shrink-0" />
                      <span className="text-center">
                        <span className="hidden sm:inline">Confirm &amp; Message on WhatsApp (+94 71 547 7149)</span>
                        <span className="sm:hidden">Confirm via WhatsApp</span>
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          IMPORTANT BOOKING FAQ & VEHICLE SPECS
      ========================================================================== */}
      <section className="py-16 bg-[#F5F2E6] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span 
              className="font-caveat text-3xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Good to Know
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#041B2D]">
              Frequently Asked Questions &amp; Chauffeur Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <Award className="w-4 h-4 text-[#cba258]" /> What is an NTCA Association Driver?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                The National Tourist Chauffeur Drivers’ Association (NTCA) is the official government-recognized association of professional tourist chauffeurs in Sri Lanka. All NTCA drivers are vetted, registered with the Sri Lanka Tourism Development Authority (SLTDA), trained in defensive driving, and bound by strict ethical passenger conduct rules.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#cba258]" /> Do your drivers make commission or forced shopping stops?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                No, never. GoldenLine TOUR strictly enforces a <strong>Zero-Commission Anti-Scam Policy</strong>. Our chauffeurs will never pressure you or redirect you to unauthorized spice gardens, gem museums, or souvenir shops unless you explicitly request a stop.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <Car className="w-4 h-4 text-[#cba258]" /> What vehicles are used for Sedan Transfers?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We operate modern Japanese sedans including Toyota Axio, Toyota Premio, Toyota Corolla, and Honda Grace. All cars feature dual air-conditioning, clean interiors, USB charging ports, and full commercial passenger insurance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <Plane className="w-4 h-4 text-[#cba258]" /> How do airport meet-and-greets work?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Your NTCA chauffeur will wait inside the Colombo Bandaranaike Airport (CMB) arrival hall holding a personalized name sign. We track flights live via radar, so delays are accommodated automatically with zero extra waiting charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <BadgePercent className="w-4 h-4 text-[#cba258]" /> Are highway tolls and fuel included in the price?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, our quoted prices include vehicle hire, dedicated professional NTCA chauffeur guide, fuel, and air-conditioning. Expressway tolls are transparently included or advised upfront with no hidden surprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-200 space-y-2">
              <h4 className="font-serif font-bold text-base text-[#041B2D] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#cba258]" /> Can we make spontaneous stops along the journey?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Yes, absolutely! Our chauffeurs are flexible and happy to pause for photo spots, king coconut fruit stalls, tea plantations, or restroom breaks at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <WalkersFooter />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="floating-whatsapp">
        <a
          href="https://wa.me/94715477149"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#20ba59] transition-all cursor-pointer"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
        </a>
      </div>

      {/* Modals */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => {
          setSearchQuery(term);
          setIsSearchOpen(false);
          const el = document.getElementById('rates-directory');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <InquireDrawer
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
        prefilledInterest={inquireInterest}
      />
    </main>
  );
}
