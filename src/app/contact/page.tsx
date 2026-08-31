'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { LotusBackground, TropicalLeafBackground } from '@/components/DecorativeBackgrounds';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  ArrowRight,
  User,
  Calendar,
  Users,
  Check,
  Globe,
  Compass,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function ContactPage() {
  const router = useRouter();

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const contactCards = [
    {
      icon: Phone,
      title: 'Direct Phone & Hotline',
      value: '+94 71 547 7149',
      sub: 'Secondary: +94 72 321 0119 (24/7 Support)',
      action: 'tel:+94715477149',
      actionText: 'Call Now',
      color: 'bg-[#1C1917] text-white',
    },
    {
      icon: WhatsAppIcon,
      title: 'Official WhatsApp Concierge',
      value: '+94 71 547 7149',
      sub: 'Instant replies for custom quotes & transfers',
      action: 'https://wa.me/94715477149',
      actionText: 'Chat on WhatsApp',
      color: 'bg-[#25D366] text-white',
    },
    {
      icon: MapPin,
      title: 'Headquarters Location',
      value: 'Kolonnawa, Colombo',
      sub: '3/11 Sri Wimalarama Road, Kolonnawa',
      action: 'https://maps.app.goo.gl/zTcvDFJTytdRrH4S8?g_st=iw',
      actionText: 'Open in Google Maps',
      color: 'bg-[#C85A32] text-white',
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
      `Hello GoldenLine TOUR! My name is ${formData.fullName || 'Guest'} (${formData.country}).\n` +
      `Estimated Travel Date: ${formData.travelMonth || 'Flexible'}\n` +
      `Guests: ${formData.guests}\n` +
      `Inquiry / Wishlist: ${formData.message || 'I would like to plan a trip to Sri Lanka.'}`
    );
    window.open(`https://wa.me/94715477149?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Header Navigation */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Banner with Background Auto Slider */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <BackgroundAutoSlider
          intervalMs={4500}
          overlayGradient="bg-gradient-to-b from-black/80 via-black/45 to-[#181513]"
        />

        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            data-reveal="fade-down"
            data-reveal-delay="100"
            className="font-caveat text-3xl sm:text-5xl md:text-6xl text-[#cba258] mb-[-8px] sm:mb-[-15px] z-10 -rotate-2 inline-block"
            style={{ fontFamily: 'var(--font-caveat), cursive' }}
          >
            Always At Your Service &amp;
          </span>

          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-[90px] font-bold tracking-wider sm:tracking-widest text-[#f8fbfa] uppercase leading-tight sm:leading-none drop-shadow-2xl mb-6 max-w-full"
          >
            CONTACT US
          </h1>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-xs sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md px-2"
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
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#cba258] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#1C1917]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Send Message</span>
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section data-reveal="fade-up" className="bg-[#1C1917] text-white py-8 border-t border-white/10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-reveal-stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover-lift">
              <div className="w-12 h-12 rounded-full bg-[#cba258]/20 text-[#cba258] flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">24/7 Hotline</span>
                <a href="tel:+94715477149" className="text-sm font-bold text-white hover:text-[#cba258] transition-colors block">
                  +94 71 547 7149
                </a>
                <a href="tel:+94723210119" className="text-xs text-gray-300 hover:text-[#cba258] transition-colors block">
                  +94 72 321 0119
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#cba258]/20 text-[#cba258] flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block">Email Inquiries</span>
                <a href="mailto:info@goldenlinetour.com" className="text-sm font-bold text-white hover:text-[#cba258] transition-colors">
                  info@goldenlinetour.com
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
      <section id="contact-form-section" className="py-20 lg:py-28 bg-[#FAF7EE] relative overflow-hidden scroll-mt-20">
        {/* Decorative Background SVGs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <LotusBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[#1C1917]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#E7E0D0]">
                
                <div className="mb-8">
                  <span
                    className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                  >
                    Get In Touch
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-wide text-[#1C1917] mb-2">
                    Send Us A Message
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Fill out the form below and our team will get back to you with custom travel recommendations within 2 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-[#FAF7EE] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#E7E0D0] shadow-sm">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2">
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
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
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
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
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
                          className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
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
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white cursor-pointer"
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
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white cursor-pointer"
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
                          className="w-full px-3 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white cursor-pointer"
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
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all resize-none"
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                        <span>SLTDA Certified · 100% Free Consultation</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={handleWhatsAppContact}
                          className="h-12 sm:h-13 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shrink-0"
                          title="Instant WhatsApp Chat"
                        >
                          <WhatsAppIcon className="w-4 h-4 fill-white" />
                          <span>WhatsApp</span>
                        </button>

                        <button
                          type="submit"
                          className="flex-1 sm:flex-initial h-12 sm:h-13 px-8 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
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
      </section>

      {/* Location Map Section */}
      <section className="py-16 sm:py-24 bg-[#F5F2E6] border-t border-[#E7E0D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Visit Our Location
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-3">
              Headquarters &amp; Operations
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Find our central operations base in Kolonnawa, Colombo. Open 24/7 for guest assistance and tour planning.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#E7E0D0] overflow-hidden">
            {/* Top Bar with Address and Direct Action Button */}
            <div className="p-4 sm:p-6 bg-[#FAF7EE] rounded-2xl border border-[#E7E0D0] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1C1917] text-[#cba258] flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                    GoldenLine TOUR Head Office
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">
                    3/11 Sri Wimalarama Road, Kolonnawa, Sri Lanka
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#C85A32] font-semibold mt-1">
                    <Clock className="w-3.5 h-3.5" /> 24/7 Islandwide Operations &amp; Guest Assistance
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto flex-wrap sm:flex-nowrap">
                <a
                  href="https://maps.app.goo.gl/zTcvDFJTytdRrH4S8?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#cba258]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <a
                  href="https://wa.me/94715477149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
              <iframe
                title="GoldenLine TOUR Office Location Map"
                src="https://maps.google.com/maps?q=3%2C%20Golden%20Line%20Tours%2C%2011%20Sri%20Vimalarama%20Rd%202%2C%20Kolonnawa%2010600&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white border-t border-[#E7E0D0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Help &amp; Advice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mb-3">
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
                className="p-6 rounded-3xl bg-[#FAF7EE] border border-[#E7E0D0] space-y-2"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-[#cba258] shrink-0 mt-0.5" />
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
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
          href="https://wa.me/94715477149"
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
