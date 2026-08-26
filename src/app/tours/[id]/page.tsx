'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { TOUR_PACKAGES } from '@/data/travelData';
import {
  CheckCircle2,
  Hotel,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Star,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  ShieldCheck,
  Award,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function TourDetailPage() {
  const params = useParams();
  const router = useRouter();
  const tourId = params?.id as string;

  // Find the tour package
  const tour = TOUR_PACKAGES.find((t) => t.id === tourId) || TOUR_PACKAGES[0];

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Inline Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    arrivalDate: '',
    adults: '2',
    children: '0',
    hotelType: '4-Star Boutique & Resorts',
    specialNotes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const scrollToBookingForm = (dayTitle?: string) => {
    if (dayTitle) {
      setFormData((prev) => ({
        ...prev,
        specialNotes: `Interested in customizing: ${dayTitle}`,
      }));
    }
    const el = document.getElementById('tour-booking-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppInquiry = (dayTitle?: string) => {
    const interest = dayTitle ? `"${tour.title}" (${dayTitle})` : `"${tour.title}" (${tour.duration})`;
    const text = encodeURIComponent(
      `Hello GoldenLine TOUR! I would like to book or customize the ${interest}. Please share the detailed itinerary quotation and available dates.`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  // Other tours in the same category
  const relatedTours = TOUR_PACKAGES.filter(
    (t) => t.category === tour.category && t.id !== tour.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2E6] relative">
      {/* Walkers Luxury Navigation */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Tour Page Container */}
      <div className="w-full bg-[#F5F2E6] pt-28 sm:pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Title Section */}
          <div data-reveal="fade-up" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            {/* Duration Subtitle */}
            <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
              {tour.duration}
            </div>

            {/* Main Serif Tour Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a] font-normal tracking-tight leading-tight">
              {tour.title}
            </h1>

            {/* Rating Bar */}
            <div className="flex items-center justify-center gap-4 mt-4 text-xs font-medium text-gray-500">
              <span className="text-[#9a752b] font-bold">
                Tailor-Made Private Tour
              </span>
              <span>·</span>
              <div className="flex items-center gap-1 text-[#cba258]">
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
                <span className="text-gray-700 font-bold">{tour.rating}</span>
                <span className="text-gray-400 font-normal">({tour.reviewsCount}+ reviews)</span>
              </div>
              <span>·</span>
              <button
                onClick={() => scrollToBookingForm()}
                className="text-[#0077b6] hover:underline font-bold cursor-pointer"
              >
                Book This Tour ↓
              </button>
            </div>
          </div>

          {/* Alternating Day-by-Day Itinerary Grid */}
          <div className="space-y-16 sm:space-y-24">
            {tour.itinerary?.map((item, idx) => {
              const isEven = idx % 2 === 1; // 0 is Day 1 (Image left, text right), 1 is Day 2 (Text left, image right)

              return (
                <div
                  key={idx}
                  data-reveal="fade-up"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  {isEven ? (
                    <>
                      {/* Text Column (Left on desktop) */}
                      <div className="order-2 md:order-1 flex flex-col items-start pr-0 md:pr-4">
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal leading-tight mb-1">
                          {item.title}
                        </h2>

                        <span className="text-xs text-gray-500 font-medium tracking-wide mb-4">
                          {item.day.replace('DAY 0', 'Day ').replace('DAY ', 'Day ')}
                        </span>

                        <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed font-normal mb-4">
                          {item.desc}
                        </p>

                        {item.stay && (
                          <div className="flex items-center gap-2 text-xs text-gray-500 italic mb-6">
                            <Hotel className="w-3.5 h-3.5 text-[#9a752b] shrink-0" />
                            <span>{item.stay}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => scrollToBookingForm(`${item.day}: ${item.title}`)}
                            className="bg-[#635147] hover:bg-[#4d3e36] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
                          >
                            Book Now
                          </button>

                          <button
                            onClick={() => handleWhatsAppInquiry(`${item.day}: ${item.title}`)}
                            className="w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                            title="Inquire via WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>

                      {/* Image Column (Right on desktop) */}
                      <div className="order-1 md:order-2 relative h-[320px] sm:h-[380px] md:h-[430px] rounded-3xl overflow-hidden shadow-sm group bg-gray-100">
                        <Image
                          src={item.image || tour.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Image Column (Left on desktop) */}
                      <div className="relative h-[320px] sm:h-[380px] md:h-[430px] rounded-3xl overflow-hidden shadow-sm group bg-gray-100">
                        <Image
                          src={item.image || tour.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>

                      {/* Text Column (Right on desktop) */}
                      <div className="flex flex-col items-start pl-0 md:pl-4">
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal leading-tight mb-1">
                          {item.title}
                        </h2>

                        <span className="text-xs text-gray-500 font-medium tracking-wide mb-4">
                          {item.day.replace('DAY 0', 'Day ').replace('DAY ', 'Day ')}
                        </span>

                        <p className="text-xs sm:text-[13.5px] text-gray-600 leading-relaxed font-normal mb-4">
                          {item.desc}
                        </p>

                        {item.stay && (
                          <div className="flex items-center gap-2 text-xs text-gray-500 italic mb-6">
                            <Hotel className="w-3.5 h-3.5 text-[#9a752b] shrink-0" />
                            <span>{item.stay}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => scrollToBookingForm(`${item.day}: ${item.title}`)}
                            className="bg-[#635147] hover:bg-[#4d3e36] text-white px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md"
                          >
                            Book Now
                          </button>

                          <button
                            onClick={() => handleWhatsAppInquiry(`${item.day}: ${item.title}`)}
                            className="w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                            title="Inquire via WhatsApp"
                          >
                            <MessageSquare className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Inclusions & Highlights Summary Box */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 border border-[#e2ede7]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <span
                    className="font-caveat text-3xl text-[#cba258] mb-1 inline-block -rotate-2"
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                  >
                    Included In Your Journey
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)] mb-4">
                    Everything Taken Care Of
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Our Classic Sri Lanka tours include premium transport, chauffeur guides, verified hotel stays with half-board dining, and entry passes to all heritage monuments.
                  </p>
                  <button
                    onClick={() => scrollToBookingForm()}
                    className="bg-[var(--color-primary)] hover:bg-[#0077b6] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                  >
                    Customize This Tour
                  </button>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  {tour.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-[#F5F2E6] border border-gray-100 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)]">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Custom Tour Inquiry & Booking Form (Standard Web Form) */}
          <div id="tour-booking-form" className="mt-20 pt-8 scroll-mt-24">
            <div data-reveal="zoom-in" className="bg-[#F5F2E6] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7] relative overflow-hidden">
              
              {/* Subtle Ambient Light Gradients */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ed1fc]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#cba258]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header of Form */}
                <div data-reveal="fade-up" className="text-center max-w-2xl mx-auto mb-10">
                  <span
                    className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                  >
                    Plan Your Unforgettable Escape
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#1a1a1a] mb-3">
                    Book Or Customize This Tour
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Reserve your spots for <strong>{tour.title}</strong> ({tour.duration}). Tell us your preferences and our destination specialists will craft your perfect itinerary with transparent pricing.
                  </p>
                </div>

                {isSubmitted ? (
                  /* Success Confirmation Screen */
                  <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#e2ede7] shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      Thank you <strong>{formData.fullName}</strong>. We have received your booking request for <strong>{tour.title}</strong>. Our tour manager will contact you within 2 hours with the full proposal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => handleWhatsAppInquiry()}
                        className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>Chat via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-[#F5F2E6] hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Full Integrated Booking Form */
                  <form onSubmit={handleFormSubmit} className="space-y-6 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      
                      {/* Full Name */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="eleanor@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Phone / WhatsApp *</span>
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

                      {/* Arrival Date */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Expected Arrival Date *</span>
                        </label>
                        <input
                          type="date"
                          required
                          name="arrivalDate"
                          value={formData.arrivalDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all cursor-pointer"
                        />
                      </div>

                      {/* Number of Guests */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Travelers (Adults / Kids)</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <select
                            name="adults"
                            value={formData.adults}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] cursor-pointer"
                          >
                            {[1, 2, 3, 4, 5, 6, 8, 10, '12+'].map((n) => (
                              <option key={n} value={n}>
                                {n} Adult{n !== 1 ? 's' : ''}
                              </option>
                            ))}
                          </select>
                          <select
                            name="children"
                            value={formData.children}
                            onChange={handleInputChange}
                            className="w-full px-3 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] cursor-pointer"
                          >
                            {[0, 1, 2, 3, 4, 5].map((n) => (
                              <option key={n} value={n}>
                                {n} Child{n !== 1 ? 'ren' : ''}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Hotel Category Preference */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Hotel className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Hotel Category Preference</span>
                        </label>
                        <select
                          name="hotelType"
                          value={formData.hotelType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] cursor-pointer"
                        >
                          <option value="4-Star Boutique & Resorts">
                            4-Star Boutique &amp; Resorts (Standard)
                          </option>
                          <option value="5-Star Luxury & Heritage Villas">
                            5-Star Luxury &amp; Heritage Villas (VIP)
                          </option>
                          <option value="3-Star Cozy Budget Comfort">
                            3-Star Cozy Comfort (Economy)
                          </option>
                        </select>
                      </div>

                    </div>

                    {/* Special Requests Textarea */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Special Requests, Room Upgrades or Customization Notes
                      </label>
                      <textarea
                        rows={3}
                        name="specialNotes"
                        value={formData.specialNotes}
                        onChange={handleInputChange}
                        placeholder="Tell us any special preferences, dietary requirements, preferred beach towns, or optional activities..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:bg-[#F5F2E6] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all resize-none"
                      />
                    </div>

                    {/* Form Action Buttons & Guarantee */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      
                      <div className="flex items-center gap-4 text-[11px] text-gray-500">
                        <div className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
                          <span>100% Tailor-Made &amp; Free Quote</span>
                        </div>
                        <div className="hidden sm:flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#cba258]" />
                          <span>Direct Operator Pricing</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleWhatsAppInquiry()}
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
                          <span>Submit Booking Request</span>
                        </button>
                      </div>

                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

          {/* Other Tours in Collection */}
          {relatedTours.length > 0 && (
            <div data-reveal="fade-up" className="mt-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <span
                    className="font-caveat text-3xl text-[#cba258] mb-1 inline-block -rotate-2"
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                  >
                    More Classic Journeys
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)]">
                    Other Classic Tours
                  </h3>
                </div>
                <Link
                  href="/#packages"
                  className="next-btn next-btn--blue group hover:scale-105 transition-transform"
                >
                  <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#0077b6] transition-all">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-bold">View All Tours</span>
                </Link>
              </div>

              <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedTours.map((relTour) => (
                  <Link
                    key={relTour.id}
                    href={`/tours/${relTour.id}`}
                    className="hover-box group rounded-3xl overflow-hidden relative h-[400px] shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#041B2D] block"
                  >
                    <Image
                      src={relTour.image}
                      alt={relTour.title}
                      fill
                      className="object-cover hover-box__img"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/95 via-[#041B2D]/30 to-transparent" />

                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#8ed1fc] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {relTour.duration}
                      </span>
                      <span className="text-xs font-bold text-[#cba258] bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
                        ★ {relTour.rating}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 flex flex-col justify-end">
                      <h4 className="font-serif text-2xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#8ed1fc] transition-colors mb-2">
                        {relTour.title}
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                        {relTour.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/20">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#8ed1fc] font-bold block">
                            Custom Itinerary
                          </span>
                        </div>
                        <div className="next-btn next-btn--white">
                          <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
                          </div>
                          <span className="text-xs uppercase tracking-widest font-bold">Explore</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

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
