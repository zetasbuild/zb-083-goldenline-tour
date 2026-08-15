'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { LotusBackground, TropicalLeafBackground } from '@/components/DecorativeBackgrounds';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Award,
  Sparkles,
  Send,
  HelpCircle,
  Headphones,
  CheckCircle2,
  ArrowRight,
  User,
  Calendar,
  Users,
  Check,
  Globe,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const router = useRouter();

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('Contact Page Inquiry');

  // Contact Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United Kingdom',
    inquiryType: 'Bespoke Tour Package Customization',
    travelMonth: '',
    guests: '2 Adults (Couple)',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactOffices = [
    {
      title: 'Colombo Head Office',
      type: 'Headquarters & Tour Operations',
      address: 'No. 45/A, Galle Face Terrace, Colombo 03, Sri Lanka',
      phone: '+94 11 234 5678',
      email: 'colombo@ceylonjourneys.com',
      hours: 'Mon – Sat: 8:00 AM – 7:00 PM (IST)',
    },
    {
      title: 'Airport Arrivals Concierge',
      type: '24/7 Meet & Greet Desk',
      address: 'Arrivals Lobby, Bandaranaike International Airport (CMB), Katunayake',
      phone: '+94 77 123 4567',
      email: 'airport@ceylonjourneys.com',
      hours: 'Open 24/7 / 365 Days',
    },
    {
      title: 'Kandy Regional Hub',
      type: 'Hill Country Operations',
      address: 'No. 12, Temple Street, Kandy, Sri Lanka',
      phone: '+94 81 222 3344',
      email: 'kandy@ceylonjourneys.com',
      hours: 'Mon – Sat: 8:30 AM – 6:00 PM',
    },
    {
      title: 'Galle Fort Visitor Lounge',
      type: 'South Coast Experience Center',
      address: 'No. 28, Church Street, Galle Fort, Sri Lanka',
      phone: '+94 91 223 4455',
      email: 'galle@ceylonjourneys.com',
      hours: 'Daily: 9:00 AM – 8:00 PM',
    },
  ];

  const contactCards = [
    {
      icon: Phone,
      title: 'Direct Phone & Hotline',
      value: '+94 77 123 4567',
      sub: '24/7 Islandwide Emergency & Guest Support',
      action: 'tel:+94771234567',
      actionText: 'Call Now',
      color: 'bg-[#002b49] text-white',
    },
    {
      icon: MessageSquare,
      title: 'Official WhatsApp Concierge',
      value: '+94 77 123 4567',
      sub: 'Instant replies within ~5-10 minutes',
      action: 'https://wa.me/94771234567',
      actionText: 'Chat on WhatsApp',
      color: 'bg-[#25D366] text-white',
    },
    {
      icon: Mail,
      title: 'Inquiries & Reservations',
      value: 'inquiries@ceylonjourneys.com',
      sub: 'Detailed quotes & day-by-day custom plans',
      action: 'mailto:inquiries@ceylonjourneys.com',
      actionText: 'Send Email',
      color: 'bg-[#0077b6] text-white',
    },
    {
      icon: MapPin,
      title: 'Headquarters & Welcome Lounge',
      value: 'York Street, Colombo 01',
      sub: 'Open Mon - Sat: 8:30 AM to 6:00 PM',
      action: 'https://maps.google.com',
      actionText: 'Get Directions',
      color: 'bg-[#cba258] text-white',
    },
  ];

  const faqs = [
    {
      q: 'How fast will I receive my custom trip itinerary proposal?',
      a: 'During working hours (GMT+5:30), our travel designers review and send an initial customized proposal with accurate quotes within 2 to 4 hours. You can also chat immediately via WhatsApp for urgent itineraries.',
    },
    {
      q: 'Do you arrange airport pickups at any hour of the day or night?',
      a: 'Yes! Our English-speaking chauffeurs monitor your live flight number and provide 24/7 meet-and-greet services inside the arrivals hall with personalized name signage, regardless of flight delays.',
    },
    {
      q: 'Are your tours private or shared with strangers?',
      a: 'All our custom journeys and chauffeur tour packages are 100% private. You have exclusive use of the dedicated vehicle, driver-guide, and flexible daily pacing customized solely for your group.',
    },
    {
      q: 'What is your cancellation and booking flexibility policy?',
      a: 'We offer flexible booking terms with low initial deposits. Should unforeseen events disrupt your flight, dates can be rescheduled or refunded according to our traveler-first guarantee.',
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
      `Hello Ceylon Journeys! My name is ${formData.fullName || 'Guest'} (${formData.country}).\n` +
      `Estimated Travel Date: ${formData.travelMonth || 'Flexible'}\n` +
      `Guests: ${formData.guests}\n` +
      `Inquiry / Wishlist: ${formData.message || 'I would like to plan a trip to Sri Lanka.'}`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Header Navigation */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => {
          setInquireInterest('Contact Us Page Inquiry');
          setIsInquireOpen(true);
        }}
      />

      {/* Hero Banner with Background Auto Slider */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <BackgroundAutoSlider
          intervalMs={4500}
          overlayGradient="bg-gradient-to-b from-black/80 via-black/45 to-[#001726]"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            data-reveal="fade-down"
            data-reveal-delay="100"
            className="font-caveat text-4xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-10px] sm:mb-[-15px] z-10 -rotate-2 inline-block"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Always At Your Service &amp;
          </span>

          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6"
          >
            CONTACT US
          </h1>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md"
          >
            Our destination specialists and 24/7 concierge team are here to assist with tailor-made tour planning, private vehicle rentals, and holiday advice.
          </p>

          <div data-reveal="zoom-in" data-reveal-delay="450" className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById('contact-form-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#002b49]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Send Message</span>
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section data-reveal="fade-up" className="bg-[#002b49] text-white py-8 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover-lift">
              <div className="w-12 h-12 rounded-full bg-[#cba258]/20 text-[#cba258] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">24/7 Hotline</span>
                <a href="tel:+94771234567" className="text-sm font-bold text-white hover:text-[#8ed1fc] transition-colors">
                  +94 77 123 4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#8ed1fc]/20 text-[#8ed1fc] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Email Inquiries</span>
                <a href="mailto:info@ceylonjourneys.com" className="text-sm font-bold text-white hover:text-[#8ed1fc] transition-colors">
                  info@ceylonjourneys.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">WhatsApp Direct</span>
                <span className="text-sm font-bold text-white cursor-pointer hover:text-[#25D366]" onClick={handleWhatsAppContact}>
                  Chat With Concierge
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#cba258]/20 text-[#cba258] flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Response Time</span>
                <span className="text-sm font-bold text-[#cba258]">
                  Within 2 Hours
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section id="contact-form-section" className="py-20 lg:py-28 bg-[#f8fbfa] relative overflow-hidden scroll-mt-20">
        {/* Decorative Background SVGs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <LotusBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[#002b49]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Island Office Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span
                  className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                  style={{ fontFamily: 'var(--font-caveat), cursive' }}
                >
                  Islandwide Presence
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002b49] leading-tight mb-3">
                  Our Ceylon Offices
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Headquartered in Colombo with operational hubs across the island to ensure round-the-clock ground support.
                </p>
              </div>

              <div className="space-y-4">
                {contactOffices.map((office, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-[#e2ede7] hover:border-[#002b49] transition-all shadow-sm space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-[#002b49]">
                          {office.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-[#0077b6]">
                          {office.type}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#eaf3f8] text-[#0077b6] flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {office.address}
                    </p>

                    <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between text-[11px] text-gray-500 gap-2">
                      <span className="font-medium text-[#002b49]">{office.phone}</span>
                      <span className="italic">{office.hours}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#002b49]">Prefer instant messaging?</h4>
                  <p className="text-xs text-gray-600">Connect directly with our senior travel planner.</p>
                </div>
                <button
                  onClick={handleWhatsAppContact}
                  className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md cursor-pointer shrink-0"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </div>

            {/* Right Column: Light-Theme Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7]">
                
                <div className="mb-8">
                  <span
                    className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                  >
                    Get In Touch
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[#1a1a1a] mb-2">
                    Send Us A Message
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Fill out the form below and our team will get back to you with custom travel recommendations within 2 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#e2ede7] shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      Thank you <strong>{formData.fullName}</strong>. We have received your request regarding <strong>{formData.inquiryType}</strong>. Our specialist will contact you shortly.
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
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
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
                          placeholder="e.g. Jessica Taylor"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
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
                          placeholder="jessica@example.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
                        />
                      </div>

                      {/* Country of Residence */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Country of Residence</span>
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="e.g. United Kingdom / USA"
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Inquiry Type */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Inquiry Type</span>
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                        >
                          <option value="Bespoke Tour Package Customization">
                            Tour Package Customization
                          </option>
                          <option value="Private Chauffeur & Vehicle Rental">
                            Private Chauffeur &amp; Car Rental
                          </option>
                          <option value="Airport Transfer Booking">
                            Airport Transfer Booking
                          </option>
                          <option value="Luxury Villa & Hotel Booking">
                            Luxury Villa &amp; Hotel Booking
                          </option>
                          <option value="MICE & Destination Wedding">
                            MICE &amp; Destination Wedding
                          </option>
                          <option value="General Question / Partnership">
                            General Question
                          </option>
                        </select>
                      </div>

                      {/* Travel Month */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Estimated Travel Date</span>
                        </label>
                        <input
                          type="date"
                          name="travelMonth"
                          value={formData.travelMonth}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#cba258]" />
                          <span>Total Travelers</span>
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                        >
                          {['Solo Traveler', '2 Adults (Couple)', '3-4 (Family)', '5-8 (Small Group)', '9+ (Large Group / Tour)'].map((g) => (
                            <option key={g} value={g}>
                              {g}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Your Message / Travel Wishlist *
                      </label>
                      <textarea
                        rows={4}
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about the destinations you want to visit, preferred hotel standards, special dietary needs, or any questions..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all resize-none"
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
                        <span>SLTDA Certified · 100% Free Consultation</span>
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
                          className="flex-1 sm:flex-initial h-12 sm:h-13 px-8 rounded-full bg-[#002b49] hover:bg-[#0077b6] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                        >
                          <Sparkles className="w-4 h-4 text-[#cba258] shrink-0" />
                          <span>Send Your Inquiry</span>
                        </button>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-[#e2ede7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Help &amp; Advice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002b49] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Quick answers to the most common questions from international travelers visiting Sri Lanka.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#f8fbfa] border border-[#e2ede7] space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#cba258] shrink-0 mt-0.5" />
                  <h3 className="font-serif text-lg font-bold text-[#002b49]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
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
