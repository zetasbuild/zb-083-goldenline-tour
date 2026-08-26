'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { MandalaBackground, TropicalLeafBackground } from '@/components/DecorativeBackgrounds';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import {
  Compass,
  Car,
  Footprints,
  Landmark,
  Sparkles,
  Heart,
  Briefcase,
  Plane,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ChevronRight,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  Check,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function ServicesPage() {
  const router = useRouter();

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('General Services Inquiry');

  // Service Booking Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Bespoke Private Holiday Planning',
    travelDate: '',
    guests: '2 Guests',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    {
      id: 'bespoke-tours',
      title: 'Bespoke Tour Planning & Itinerary Design',
      category: 'Tailor-Made Holidays',
      image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
      description:
        'Every traveler is unique. Our experienced destination specialists design personalized day-by-day itineraries matching your exact pace, interests, and budget—from slow-paced cultural immersions to exhilarating multi-region adventures.',
      features: [
        'Personalized 1-on-1 consultation with island specialists',
        'Handpicked boutique, colonial heritage, and 5-star luxury resorts',
        'Flexible pacing with private chauffeur and local naturalist guides',
        'Transparent itemized pricing with zero hidden fees',
      ],
      icon: Compass,
    },
    {
      id: 'chauffeur-transport',
      title: 'Private Chauffeur & Luxury Transport',
      category: 'Ground Logistics',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      description:
        'Travel across Sri Lanka in total safety and premium air-conditioned comfort. Our fleet includes modern sedans, 4WD SUVs, executive high-roof vans, and tourist coaches driven by government-licensed (SLTDA) English-speaking chauffeur guides.',
      features: [
        'SLTDA certified tourist chauffeurs trained in first aid & history',
        'Full commercial passenger insurance coverage',
        'Expressway toll fees, fuel, driver accommodation, and meals inclusive',
        'Complimentary high-speed WiFi, chilled mineral water, and infant car seats',
      ],
      icon: Car,
    },
    {
      id: 'wildlife-safari',
      title: 'Wildlife Safaris & Naturalist Expeditions',
      category: 'Eco & Adventure',
      image: '/images/wildlife.webp',
      description:
        'Witness Sri Lanka’s legendary biodiversity with thrilling game drives through Yala, Wilpattu, Udawalawe, and Minneriya. Our custom open-top 4x4 safari cruisers and dedicated naturalists maximize your chances of spotting leopards, sloth bears, and wild elephants.',
      features: [
        'Custom open-roof 4x4 safari cruisers with elevated stadium seating',
        'Certified wildlife trackers and senior naturalist guides',
        'Morning & sunset safari permit booking and priority gate entry',
        'Strict adherence to ethical, non-intrusive wildlife viewing guidelines',
      ],
      icon: Footprints,
    },
    {
      id: 'cultural-heritage',
      title: 'Cultural Heritage & Archaeological Tours',
      category: 'Historic Wonders',
      image: '/images/locations/sigiriya.webp',
      description:
        'Unravel over 2,500 years of glorious ancient civilization. Climb the 5th-century Sigiriya Rock Fortress, wander the UNESCO sacred ruins of Polonnaruwa and Anuradhapura, explore the Dambulla Cave Monasteries, and experience the sacred Temple of the Tooth in Kandy.',
      features: [
        'Licensed archaeological expert guides for in-depth historical context',
        'Skip-the-line monument access and VIP temple visit arrangements',
        'Authentic rural village excursions (bullock cart, catamaran, traditional lunch)',
        'Traditional Kandyan cultural dance and music performances',
      ],
      icon: Landmark,
    },
    {
      id: 'wellness-ayurveda',
      title: 'Ayurvedic Healing, Yoga & Wellness Retreats',
      category: 'Holistic Rejuvenation',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      description:
        'Restore balance to mind, body, and spirit with authentic Ayurvedic healing therapies. We partner with prestigious eco-sanctuaries and coastal retreats offering doctor-prescribed Panchakarma, daily sunrise yoga, and organic herbal nutrition.',
      features: [
        'Consultations with certified Ayurvedic medical doctors (Vaidyas)',
        'Customized herbal oil treatments, steam baths, and body therapies',
        'Daily beachfront or jungle yoga and meditation sessions',
        'Tranquil settings in rainforest pavilions or secluded coastal villas',
      ],
      icon: Sparkles,
    },
    {
      id: 'mice-weddings',
      title: 'MICE, Corporate Retreats & Destination Weddings',
      category: 'Events & Celebrations',
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      description:
        'From high-profile international conferences and corporate team-building getaways to romantic barefoot beach weddings and milestone anniversaries, our dedicated events team handles end-to-end logistics with flawless execution.',
      features: [
        'Complete event planning, audiovisual setup, and themed decor',
        'Luxury group hotel room blocks and private charter transport',
        'Traditional Poruwa wedding ceremonies and sunset cocktail receptions',
        'Bespoke incentive itineraries with unique VIP excursions',
      ],
      icon: Briefcase,
    },
    {
      id: 'scenic-train-air',
      title: 'Scenic Hill Country Trains & Helicopter Charters',
      category: 'Exclusive Transit',
      image: '/images/locations/hero-ella.webp',
      description:
        'Elevate your journey with unforgettable scenic transport. We secure coveted first-class observation train tickets for the legendary Kandy to Ella mountain railway, as well as domestic seaplane and private helicopter charter transfers.',
      features: [
        'Guaranteed first-class reserved seats on the scenic Ella train route',
        'Domestic seaplane flights between Colombo, Kandy, Sigiriya, and South Coast',
        'Private VIP helicopter charters for swift, panoramic island transfers',
        'Luggage transfer and station chauffeur meet-and-greet service',
      ],
      icon: Plane,
    },
    {
      id: 'honeymoon-curations',
      title: 'Romantic Honeymoons & Intimate Escapes',
      category: 'Couples & Romance',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      description:
        'Celebrate your love in paradise with handcrafted romantic touches. Enjoy candlelit private beach dinners under the stars, secluded private plunge pool villas, couples’ Ayurvedic spa rituals, and sunset yacht cruises.',
      features: [
        'Complimentary honeymoon perks (champagne, cake, floral room decor)',
        'Private candlelit beachfront dinners and secluded tea-estate picnics',
        'Boutique plunge-pool villas in Ella, Sigiriya, and Bentota',
        'Sunset catamaran cruises and private wildlife safari drives',
      ],
      icon: Heart,
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

  const handleOpenInquireForService = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, serviceType: serviceTitle }));
    const el = document.getElementById('service-inquiry-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppServiceInquiry = (serviceTitle?: string) => {
    const interest = serviceTitle ? `"${serviceTitle}"` : 'GoldenLine TOUR travel & transport services';
    const text = encodeURIComponent(
      `Hello GoldenLine TOUR! I would like to inquire about your ${interest}. Please share details and pricing.`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F5F2E6] relative">
      {/* Walkers Navigation Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => {
          setInquireInterest('General Travel Services Inquiry');
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
            End-to-End Excellence &amp;
          </span>

          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6"
          >
            OUR SERVICES
          </h1>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md"
          >
            From tailor-made bespoke itineraries and luxury private chauffeur logistics to wildlife safaris, scenic rail bookings, and holistic Ayurvedic retreats.
          </p>

          <div data-reveal="zoom-in" data-reveal-delay="450" className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const el = document.getElementById('services-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Explore Services</span>
            </button>

            <button
              onClick={() => handleWhatsAppServiceInquiry()}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip - Auto Sliding Marquee */}
      <section data-reveal="fade-up" className="bg-[var(--color-primary)] text-white py-6 border-t border-white/10 relative z-20 overflow-hidden">
        <div className="flex group relative w-full">
          {/* First Marquee Group */}
          <div className="animate-marquee flex gap-12 md:gap-24 min-w-full justify-around shrink-0 pr-12 md:pr-24 group-hover:[animation-play-state:paused]">
            {[
              { icon: ShieldCheck, title: "100% Tailor-Made", desc: "Flexible Custom Itineraries", color: "text-[#cba258]" },
              { icon: Award, title: "Government Licensed", desc: "SLTDA Certified Operators", color: "text-[#8ed1fc]" },
              { icon: Clock, title: "24/7 Island Concierge", desc: "Continuous Guest Support", color: "text-[#cba258]" },
              { icon: Sparkles, title: "Direct Operator Prices", desc: "No Hidden Middleman Fees", color: "text-[#8ed1fc]" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center shrink-0">
                <item.icon className={`w-6 h-6 ${item.color} mb-1.5`} />
                <span className="text-xs font-bold uppercase tracking-wider">{item.title}</span>
                <span className="text-[11px] text-gray-300">{item.desc}</span>
              </div>
            ))}
          </div>
          {/* Second Marquee Group (for seamless loop) */}
          <div className="animate-marquee flex gap-12 md:gap-24 min-w-full justify-around shrink-0 pr-12 md:pr-24 group-hover:[animation-play-state:paused]" aria-hidden="true">
            {[
              { icon: ShieldCheck, title: "100% Tailor-Made", desc: "Flexible Custom Itineraries", color: "text-[#cba258]" },
              { icon: Award, title: "Government Licensed", desc: "SLTDA Certified Operators", color: "text-[#8ed1fc]" },
              { icon: Clock, title: "24/7 Island Concierge", desc: "Continuous Guest Support", color: "text-[#cba258]" },
              { icon: Sparkles, title: "Direct Operator Prices", desc: "No Hidden Middleman Fees", color: "text-[#8ed1fc]" },
            ].map((item, idx) => (
              <div key={`dup-${idx}`} className="flex flex-col items-center shrink-0">
                <item.icon className={`w-6 h-6 ${item.color} mb-1.5`} />
                <span className="text-xs font-bold uppercase tracking-wider">{item.title}</span>
                <span className="text-[11px] text-gray-300">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="py-20 lg:py-28 bg-[#f8fbfa] relative overflow-hidden">
        {/* Decorative Background SVGs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] -translate-y-1/4 -translate-x-1/4 pointer-events-none select-none z-0 opacity-20 text-[#cba258]">
          <MandalaBackground className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] translate-y-1/4 translate-x-1/4 pointer-events-none select-none z-0 opacity-10 text-[var(--color-primary)]">
          <TropicalLeafBackground className="w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Comprehensive Travel Solutions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-primary)] mb-4">
              What We Do For You
            </h2>
            <p className="text-gray-600 sm:text-base leading-relaxed">
              Every aspect of your journey is handled with meticulous precision, authentic warmth, and unrivaled local expertise.
            </p>
          </div>

          {/* Detailed Alternating Service Blocks */}
          <div className="space-y-16 lg:space-y-24">
            {servicesList.map((service, index) => {
              const isEven = index % 2 === 1;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  data-reveal="fade-up"
                  className="bg-[#F5F2E6] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-xl border border-[#e2ede7] transition-all duration-300 hover-lift"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Media Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative h-[280px] sm:h-[360px] lg:h-[400px] rounded-3xl overflow-hidden shadow-md group bg-[#041B2D]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041B2D]/80 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-[var(--color-primary)]/90 backdrop-blur-md text-[#8ed1fc] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                            <Icon className="w-3.5 h-3.5 text-[#cba258]" />
                            <span>{service.category}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Text Details Column */}
                    <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-center`}>
                      <span
                        className="font-caveat text-2xl sm:text-3xl text-[#cba258] mb-1 inline-block -rotate-2"
                        style={{ fontFamily: 'var(--font-caveat), cursive' }}
                      >
                        {service.category}
                      </span>

                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-4">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                        {service.description}
                      </p>

                      {/* Features Bullet List */}
                      <div className="space-y-2.5 mb-8">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-primary)] font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#0077b6] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTAs */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleOpenInquireForService(service.title)}
                          className="bg-[var(--color-primary)] hover:bg-[#0077b6] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center gap-2"
                        >
                          <span>Inquire About This</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleWhatsAppServiceInquiry(service.title)}
                          className="w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                          title="Quick WhatsApp Chat"
                        >
                          <MessageSquare className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Service Inquiry Form (Light Theme) */}
      <section id="service-inquiry-form" className="py-20 bg-[#F5F2E6] border-t border-[#e2ede7] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7]">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Let Us Help You
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#1a1a1a] mb-3">
                Request Service Information
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Send us your travel dates and requirements. Our destination team will reach out with customized solutions within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#F5F2E6] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#e2ede7] shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">
                  Service Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Thank you <strong>{formData.fullName}</strong>. We have received your inquiry for <strong>{formData.serviceType}</strong>. A dedicated specialist will contact you shortly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => handleWhatsAppServiceInquiry(formData.serviceType)}
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
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Your Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rachel Adams"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>

                  {/* Email */}
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
                      placeholder="rachel@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>WhatsApp / Phone *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all"
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Service of Interest</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] cursor-pointer"
                    >
                      {servicesList.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Travel Date */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Estimated Travel Date</span>
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] cursor-pointer"
                    />
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Number of Travelers</span>
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] cursor-pointer"
                    >
                      {['Solo Traveler', '2 Guests (Couple)', '3-4 Guests (Family)', '5-8 Guests (Small Group)', '9+ Guests (Large Tour / MICE)'].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                    Specific Requests, Target Destinations, or Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us any specific requirements, preferred hotel standards, activities, or special assistance..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F5F2E6] border border-gray-200 hover:border-[var(--color-primary)] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-[11px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
                      <span>Direct Operator Service Guarantee</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppServiceInquiry()}
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
                      <span>Submit Service Inquiry</span>
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
