'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { LotusBackground, MandalaBackground } from '@/components/DecorativeBackgrounds';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { RealTravelerExperiences } from '@/components/RealTravelerExperiences';
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
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function AboutUsPage() {
  const router = useRouter();

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
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
    { value: '30+', label: 'Years of Heritage', sub: 'Pioneering Sri Lanka tourism since 2001' },
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      `Hello GoldenLine TOUR! My name is ${formData.fullName || 'Guest'}. I am contacting you regarding: ${formData.message || 'General Travel Inquiry'}`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2E6] relative">
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => {
          setInquireInterest('About Us Page Inquiry');
          setIsInquireOpen(true);
        }}
      />

      {/* Hero Banner with Background Auto Slider */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <BackgroundAutoSlider
          intervalMs={4500}
          overlayGradient="bg-gradient-to-b from-black/80 via-black/45 to-[#041B2D]"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            data-reveal="fade-down"
            data-reveal-delay="100"
            className="font-caveat text-4xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-10px] sm:mb-[-15px] z-10 -rotate-2 inline-block"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Pioneering Authentic Hospitality &amp;
          </span>

          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6"
          >
            ABOUT US
          </h1>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md"
          >
            Founded on an enduring love for Sri Lanka, GoldenLine TOUR handcrafts bespoke private holidays that celebrate the island&apos;s ancient heritage, untamed wildlife, and warm tropical spirit.
          </p>

          <div data-reveal="zoom-in" data-reveal-delay="450" className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById('our-story');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Discover Our Story</span>
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat With Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Stats Strip */}
      <section data-reveal="fade-up" className="bg-[var(--color-primary)] text-white py-10 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#cba258] mb-1">
                  <AnimatedCounter value={stat.value} />
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
        {/* Decorative Background SVGs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <LotusBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[var(--color-primary)]">
          <MandalaBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Multi-Layer Photo Collage */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-[#041B2D]">
                <Image
                  src="/images/locations/sigiriya.webp"
                  alt="GoldenLine TOUR Historical Roots"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/60 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Inset Card */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 bg-[#F5F2E6] rounded-3xl p-6 shadow-2xl border border-[#e2ede7]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-[#cba258] flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--color-primary)]">SLTDA Licensed</div>
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

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] leading-tight mb-6">
                Curating Sri Lanka Beyond The Ordinary
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                At <strong>GoldenLine TOUR</strong>, travel is not merely about visiting landmarks—it is about heartfelt connections. For over two decades, our destination specialists, naturalist trackers, and certified chauffeur guides have opened doors to the hidden soul of Sri Lanka.
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
                  <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-[var(--color-primary)]">
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
                  className="bg-[var(--color-primary)] hover:bg-[#0077b6] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  Plan Your Escape
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#F5F2E6] border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
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
                  className="p-8 rounded-3xl bg-[#f8fbfa] border border-[#e2ede7] hover:border-[var(--color-primary)] transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-[#cba258] flex items-center justify-center mb-6 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[var(--color-primary)] mb-3">
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

      {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 flex flex-col items-start">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4">
                About Our Founder
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                <p>
                  With over 30 years of experience in the transportation and tourism industry, our founder has built a strong reputation for delivering reliable, professional, and customer-focused travel solutions. Throughout his career, he has successfully managed transportation operations, coordinated inbound tours, and provided exceptional service to travelers from around the world.
                </p>
                <p>
                  His extensive expertise in handling inbound tourism, travel logistics, and group transportation has enabled countless visitors to enjoy seamless and memorable travel experiences. Having worked with clients from diverse cultural backgrounds, he possesses a deep understanding of the unique needs and expectations of international travelers.
                </p>
                <p>
                  Driven by a passion for hospitality and excellence, our founder is committed to ensuring every guest receives personalized attention, safe transportation, and outstanding service from arrival to departure. His dedication, industry knowledge, and ability to connect with people from different cultures continue to be the foundation of our company&apos;s success.
                </p>
              </div>

              <h4 className="font-bold text-[var(--color-primary)] mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Over 30 years of industry experience',
                  'Expertise in transportation and inbound tourism services',
                  "Strong understanding of multicultural travelers' needs",
                  'Professional, reliable, and customer-focused service',
                  'Commitment to safety, comfort, and memorable travel experiences'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#cba258] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-gray-600 font-medium italic border-l-4 border-[#cba258] pl-4">
                This wealth of experience and dedication allows us to provide trusted travel and transportation solutions for visitors from around the globe.
              </p>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/founder.webp"
                  alt="Our Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mr. Nihar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative h-[400px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/guide.webp"
                  alt="Senior Tour Guide, Mr. Nihar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col items-start">
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-4">
                Meet Our Senior Tour Guide, Mr. Nihar
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                <p>
                  With over 25 years of experience in inbound tourism, Mr. Nihar is a highly respected and knowledgeable tour guide dedicated to creating unforgettable travel experiences. His extensive career has enabled him to welcome and assist visitors from a wide range of nationalities and cultural backgrounds.
                </p>
                <p>
                  Over the years, Mr. Nihar has successfully guided travelers from Europe, the Middle East, Asia, and many other regions across the world, providing them with authentic insights, personalized service, and memorable journeys. His deep understanding of local culture, history, and attractions, combined with his ability to connect with people from diverse backgrounds, makes him a trusted companion for every traveler.
                </p>
                <p>
                  Known for his professionalism, friendliness, and attention to detail, Mr. Nihar ensures that every guest feels comfortable, valued, and well cared for throughout their visit. His passion for showcasing the beauty, heritage, and hospitality of Sri Lanka has earned him the appreciation and trust of countless travelers over the years.
                </p>
                <p className="font-medium text-[var(--color-primary)]">
                  Through his experience, cultural awareness, and commitment to excellence, Mr. Nihar continues to play a vital role in delivering exceptional travel experiences to visitors from around the globe.
                </p>
              </div>
            </div>
          </div>

      {/* Real Traveler Experiences */}
      <RealTravelerExperiences />

      {/* Light-Theme Contact / Inquiry Section */}
      <section id="contact-section" className="py-20 bg-[#f8fbfa] border-t border-[#e2ede7] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F2E6] rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7]">
            
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
                    className="bg-[#F5F2E6] hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
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
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
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
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all resize-none"
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
                      className="h-12 sm:h-13 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shrink-0"
                      title="Instant WhatsApp Chat"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 sm:flex-initial h-12 sm:h-13 px-8 rounded-full bg-[var(--color-primary)] hover:bg-[#0077b6] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                    >
                      <Sparkles className="w-4 h-4 text-[#cba258] shrink-0" />
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
          <WhatsAppIcon className="w-7 h-7 fill-white" />
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
    </main>
  );
}
