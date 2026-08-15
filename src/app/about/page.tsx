'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { PlanTripModal } from '@/components/Modals/PlanTripModal';
import { TESTIMONIALS } from '@/data/travelData';
import {
  Compass,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  Heart,
  Users,
  TreePine,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Globe,
  Leaf,
  Star,
  Check,
  MapPin,
  ChevronRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AboutUsPage() {
  const router = useRouter();

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('About Us - General Inquiry');

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Bespoke Private Holiday Planning',
    travelMonth: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stats = [
    { value: '25+', label: 'Years of Heritage', sub: 'Pioneering Sri Lanka tourism since 2001' },
    { value: '15k+', label: 'Global Travelers', sub: 'From over 45 countries worldwide' },
    { value: '600+', label: 'Fleet & Safari Jeeps', sub: 'Modern luxury sedans, vans & 4x4s' },
    { value: '98.8%', label: '5-Star Ratings', sub: 'On TripAdvisor & verified reviews' },
  ];

  const coreValues = [
    {
      icon: Compass,
      title: 'Authenticity First',
      description:
        'We steer away from cookie-cutter tourist trails to immerse our guests in genuine cultural encounters, village home-cooked dining, and untamed natural sanctuaries.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Flawless Logistics',
      description:
        'With government SLTDA-licensed tourist chauffeurs, comprehensive passenger insurance, and 24/7 roadside assistance, your peace of mind is unconditionally guaranteed.',
    },
    {
      icon: Leaf,
      title: 'Regenerative Sustainability',
      description:
        'We actively protect what makes Sri Lanka magical: funding local reforestation, eliminating single-use plastics, and directly channeling tourism revenue into rural communities.',
    },
    {
      icon: Heart,
      title: 'Bespoke Personalization',
      description:
        'No two travelers are identical. Every itinerary is crafted around your unique pace, culinary preferences, and travel dreams with 100% tailor-made flexibility.',
    },
  ];

  const brandPortfolios = [
    {
      title: 'Artisan Luxury Travel',
      tag: 'Ultra-Luxury Escapes',
      desc: 'Exclusive private estates, colonial tea bungalows, private helicopter transfers, and VIP historical curator access.',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Ayu Wellness & Healing',
      tag: 'Holistic Ayurveda',
      desc: 'Doctor-prescribed authentic Panchakarma retreats, rainforest meditation pavilions, and organic herbal rejuvenation.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Nature Odyssey',
      tag: 'Wildlife & Conservation',
      desc: 'Ethical game drives with senior naturalists, leopard tracking in Yala and Wilpattu, and blue whale ocean safaris in Mirissa.',
      image: '/images/wildlife.webp',
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsAppContact = () => {
    const text = encodeURIComponent(
      'Hello Ceylon Journeys! I would like to learn more about your private tours, custom itineraries, and travel planning services.'
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Header Navigation */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => {
          setInquireInterest('About Us Page Inquiry');
          setIsInquireOpen(true);
        }}
      />

      {/* Hero Banner */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=80"
            alt="About Ceylon Journeys Sri Lanka"
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
            Pioneering Authentic Hospitality &amp;
          </span>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6">
            ABOUT US
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Founded on an enduring love for Sri Lanka, Ceylon Journeys handcrafts bespoke private holidays that celebrate the island&apos;s ancient heritage, untamed wildlife, and warm tropical spirit.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById('our-story');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="next-btn next-btn--white group cursor-pointer"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#002b49]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Discover Our Story</span>
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat With Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Stats Strip */}
      <section className="bg-[#002b49] text-white py-10 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#cba258] mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-300 max-w-[180px]">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story & Heritage Section */}
      <section id="our-story" className="py-20 lg:py-28 bg-[#f8fbfa] relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
          <span className="watermark-text text-[#e8eff4]">heritage</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Multi-Layer Photo Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#001726]">
                <Image
                  src="/images/sigiriya.jpg"
                  alt="Ceylon Journeys Historical Roots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/60 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Inset Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 bg-white rounded-3xl p-6 shadow-2xl border border-[#e2ede7]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#002b49] text-[#cba258] flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#002b49]">SLTDA Licensed</div>
                    <div className="text-[10px] text-gray-500">Reg No: TS/2026/SL</div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Certified Tour Operator ensuring 100% compliance, passenger safety &amp; fair wages.
                </p>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Our Passion &amp; Purpose
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b49] leading-tight mb-6">
                Curating Sri Lanka Beyond The Ordinary
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                At <strong>Ceylon Journeys</strong>, travel is not merely about visiting landmarks—it is about heartfelt connections. For over two decades, our destination specialists, naturalist trackers, and certified chauffeur guides have opened doors to the hidden soul of Sri Lanka.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                From misty mountain tea plantations where private planters share century-old brewing secrets, to secluded coastlines where sea turtles nest under starlit skies, we design journeys that touch the heart and leave lasting memories.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
                {[
                  '100% Tailor-Made Itineraries',
                  'Dedicated 24/7 Guest Concierge',
                  'English-Speaking Chauffeurs',
                  'Direct Local Operator Rates',
                  'Ethical Wildlife Safaris',
                  'Comprehensive Travel Protection',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[#002b49]">
                    <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#002b49] hover:bg-[#0077b6] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Plan Your Escape
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b49] mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 sm:text-base leading-relaxed">
              The fundamental promises that guide every tour itinerary we design and every guest we welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#f8fbfa] border border-[#e2ede7] hover:border-[#002b49] transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#002b49] text-[#cba258] flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#002b49] mb-3">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Signature Brand Portfolios Section */}
      <section className="py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Specialized Travel Collections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b49]">
                Our Signature Brands
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              Dedicated hospitality divisions tailored for ultra-luxury, wellness rejuvenation, and off-grid wildlife expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPortfolios.map((brand, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#e2ede7] transition-all duration-500 flex flex-col justify-between group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-[#001726]">
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/80 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#002b49]/90 backdrop-blur-md text-[#8ed1fc] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {brand.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 text-white z-10">
                    <h3 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#8ed1fc] transition-colors">
                      {brand.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {brand.desc}
                  </p>
                  
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="/tours"
                      className="text-xs font-bold text-[#0077b6] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Tours</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Guest Reviews Preview */}
      <section className="py-20 bg-white border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Real Traveler Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b49] mb-3">
              Loved By Travelers Worldwide
            </h2>
            <div className="flex items-center justify-center gap-1 text-[#cba258] text-sm font-bold">
              ★ ★ ★ ★ ★ <span className="text-gray-600 ml-2 font-normal">(4.9/5 Average Rating)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="p-8 rounded-3xl bg-[#f8fbfa] border border-[#e2ede7] flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#cba258] text-xs">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-normal">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200 mt-6 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#002b49]">{rev.author}</h4>
                    <span className="text-[11px] text-gray-500">{rev.country} · {rev.tourTaken}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Light-Theme Contact / Inquiry Section */}
      <section id="contact-section" className="py-20 bg-[#f8fbfa] border-t border-[#e2ede7] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7]">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Start Your Conversation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#1a1a1a] mb-3">
                Connect With Our Specialists
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you have questions about custom tour pacing, private chauffeur rates, or boutique hotel recommendations, our local team is here to assist.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#e2ede7] shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Thank you <strong>{formData.fullName}</strong>. Our senior destination specialist will respond to your message within 2 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppContact}
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Chat via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Thomas Brown"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="thomas@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
                    />
                  </div>

                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                    How Can We Assist You?
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream Sri Lanka journey, estimated travel dates, group size, and any questions..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all resize-none"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
                    <span>Privacy Guaranteed · No Spam Ever</span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer shrink-0"
                      title="Instant WhatsApp Chat"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial bg-[#002b49] hover:bg-[#0077b6] text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#cba258]" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>
      </section>

      {/* Footer */}
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
          <MessageSquare className="w-7 h-7 fill-white" />
        </a>
      </div>

      {/* Modals */}
      <OffcanvasSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSearch={(term) => {
          router.push(`/destinations?q=${encodeURIComponent(term)}`);
        }}
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
