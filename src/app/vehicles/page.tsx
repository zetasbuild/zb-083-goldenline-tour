'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WalkersHeader } from '@/components/WalkersHeader';
import { WalkersFooter } from '@/components/WalkersFooter';
import { InquireDrawer } from '@/components/Modals/InquireDrawer';
import { OffcanvasSearch } from '@/components/Modals/OffcanvasSearch';
import { BackgroundAutoSlider } from '@/components/BackgroundAutoSlider';
import { VEHICLES } from '@/data/travelData';
import { Vehicle } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import {
  Users,
  Luggage,
  Wind,
  Gauge,
  Fuel,
  Check,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  MapPin,
  Calendar,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  Car,
  Compass,
  Star,
  ChevronDown,
  ChevronRight,
  Headphones,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';

export default function VehiclesPage() {
  const router = useRouter();
  const { formatPrice } = useCurrency();

  // Filter State
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPassengers, setSelectedPassengers] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [inquireInterest, setInquireInterest] = useState('Vehicle Rental Inquiry');

  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    pickupLocation: 'Bandaranaike International Airport (CMB)',
    dropoffLocation: 'Round Island Tour / Multiple Destinations',
    pickupDate: '',
    returnDate: '',
    selectedVehicle: 'Toyota KDH Super GL (Mini Van)',
    serviceType: 'With Private English-Speaking Chauffeur',
    passengers: '2',
    notes: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    'All',
    'Sedans & Hybrids',
    'SUVs & Crossovers',
    'Passenger Vans',
    'Safari & Adventure 4x4',
    'VIP & Executive',
  ];

  const popularTransfers = [
    {
      route: 'Airport (CMB) → Colombo City Hotels',
      duration: '45 Mins',
      priceLKR: 9500,
      badge: 'Fixed Rate',
    },
    {
      route: 'Airport (CMB) → Kandy Hill Capital',
      duration: '3.5 Hours',
      priceLKR: 18500,
      badge: 'Scenic Route',
    },
    {
      route: 'Airport (CMB) → Galle / Mirissa Coast',
      duration: '2.5 Hours (Highway)',
      priceLKR: 21000,
      badge: 'Expressway',
    },
    {
      route: 'Airport (CMB) → Sigiriya / Cultural Triangle',
      duration: '4 Hours',
      priceLKR: 24000,
      badge: 'Heritage',
    },
  ];

  const vehicleSlides = [
    { image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=85', alt: 'Scenic Coastal Highway Drive Sri Lanka', location: 'Southern Expressway' },
    { image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1920&q=85', alt: 'Highland Tea Estate Drive Nuwara Eliya', location: 'Hill Country Roads' },
    { image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=85', alt: 'Wildlife Safari 4x4 Jeep Expedition', location: 'Yala & Udawalawe' },
    { image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=85', alt: 'Cultural Heritage Tours Chauffeur Transport', location: 'Cultural Triangle' },
  ];

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter((v) => {
      const matchCat = selectedCategory === 'All' || v.category === selectedCategory;
      const matchPax =
        selectedPassengers === 'All' ||
        (selectedPassengers === '1-3' && v.passengers <= 3) ||
        (selectedPassengers === '4-7' && v.passengers >= 4 && v.passengers <= 7) ||
        (selectedPassengers === '8+' && v.passengers >= 8);
      const matchSearch =
        searchQuery === '' ||
        v.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchPax && matchSearch;
    });
  }, [selectedCategory, selectedPassengers, searchQuery]);

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

  const handleSelectVehicleForBooking = (vehicleModel: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedVehicle: vehicleModel,
    }));
    const el = document.getElementById('rental-booking-form');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppVehicleInquiry = (vehicleModel?: string) => {
    const interest = vehicleModel ? `rental for "${vehicleModel}"` : 'vehicle rental with chauffeur in Sri Lanka';
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to inquire about the ${interest}. Please share the rates and availability.`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  const scrollToFleet = () => {
    const el = document.getElementById('fleet-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen flex flex-col bg-white relative">
      {/* Walkers Navigation Header */}
      <WalkersHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquire={() => {
          setInquireInterest('General Vehicle Fleet Inquiry');
          setIsInquireOpen(true);
        }}
      />

      {/* Hero Banner with Background Auto Slider */}
      <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center text-white overflow-hidden text-center pt-28 pb-20">
        <BackgroundAutoSlider
          slides={vehicleSlides}
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
            Islandwide Private Chauffeur &amp;
          </span>

          <h1 
            data-reveal="fade-up"
            data-reveal-delay="200"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-bold tracking-widest text-[#f8fbfa] uppercase leading-none drop-shadow-2xl mb-6"
          >
            CAR RENTALS
          </h1>

          <p 
            data-reveal="fade-up"
            data-reveal-delay="350"
            className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md"
          >
            Experience Sri Lanka in supreme comfort and total safety with our fleet of modern air-conditioned sedans, SUVs, luxury vans, and certified English-speaking tourist chauffeurs.
          </p>

          <div data-reveal="zoom-in" data-reveal-delay="450" className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={scrollToFleet}
              className="next-btn next-btn--white group cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="next-btn-circle group-hover:scale-110 group-hover:bg-[#8ed1fc] transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-[#002b49]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Explore Our Fleet</span>
            </button>

            <button
              onClick={() => handleWhatsAppVehicleInquiry()}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trust Highlights Strip - Auto Sliding Marquee */}
      <section data-reveal="fade-up" className="bg-[#002b49] text-white py-6 border-t border-white/10 relative z-20 overflow-hidden">
        <div className="flex group relative w-full">
          {/* First Marquee Group */}
          <div className="animate-marquee flex gap-12 md:gap-24 min-w-full justify-around shrink-0 pr-12 md:pr-24 group-hover:[animation-play-state:paused]">
            {[
              { icon: ShieldCheck, title: "Government Licensed", desc: "SLTDA Tourist Chauffeurs", color: "text-[#cba258]" },
              { icon: Award, title: "Full Passenger Insurance", desc: "Comprehensive Coverage", color: "text-[#8ed1fc]" },
              { icon: Clock, title: "24/7 Roadside Assistance", desc: "Replacement Guarantee", color: "text-[#cba258]" },
              { icon: Sparkles, title: "No Hidden Fees", desc: "Transparent Pricing", color: "text-[#8ed1fc]" },
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
              { icon: ShieldCheck, title: "Government Licensed", desc: "SLTDA Tourist Chauffeurs", color: "text-[#cba258]" },
              { icon: Award, title: "Full Passenger Insurance", desc: "Comprehensive Coverage", color: "text-[#8ed1fc]" },
              { icon: Clock, title: "24/7 Roadside Assistance", desc: "Replacement Guarantee", color: "text-[#cba258]" },
              { icon: Sparkles, title: "No Hidden Fees", desc: "Transparent Pricing", color: "text-[#8ed1fc]" },
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

      {/* Fleet Catalog Section */}
      <section id="fleet-section" className="py-20 lg:py-28 bg-[#f8fbfa] relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 opacity-60">
          <span className="watermark-text text-[#e8eff4]">vehicles</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <span
              className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-2 inline-block -rotate-2"
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
            >
              Immaculate Comfort
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002b49] mb-4">
              Our Vehicle Fleet
            </h2>
            <p className="text-gray-600 sm:text-base leading-relaxed">
              Choose the ideal vehicle for your Sri Lankan itinerary. All rentals are driven by professional tourist chauffeurs with comprehensive passenger insurance.
            </p>
          </div>

          {/* Filter Pills */}
          <div data-reveal="fade-down" className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#002b49] text-white shadow-md scale-105'
                    : 'bg-white text-[#002b49] hover:bg-[#eaf3f8] border border-gray-200'
                }`}
              >
                {cat === 'All' ? 'All Vehicles' : cat}
              </button>
            ))}
          </div>

          {/* Vehicles Grid */}
          <div data-reveal-stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-[#e2ede7] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Vehicle Image */}
                <div className="relative h-52 w-full bg-[#001726] overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.model}
                    fill
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="bg-[#002b49]/85 backdrop-blur-md text-[#8ed1fc] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                      {vehicle.category}
                    </span>
                    <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {vehicle.transmission}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white z-10">
                    <h3 className="font-serif text-xl font-bold uppercase tracking-wider leading-tight group-hover:text-[#8ed1fc] transition-colors">
                      {vehicle.model}
                    </h3>
                  </div>
                </div>

                {/* Specs Strip */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Key Specifications Grid */}
                  <div className="grid grid-cols-3 gap-2 py-2 border-b border-gray-100 text-center">
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#f8fbfa]">
                      <Users className="w-4 h-4 text-[#0077b6] mb-1" />
                      <span className="text-[11px] font-bold text-gray-800">{vehicle.passengers} Seats</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#f8fbfa]">
                      <Luggage className="w-4 h-4 text-[#0077b6] mb-1" />
                      <span className="text-[11px] font-bold text-gray-800">{vehicle.luggage} Bags</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#f8fbfa]">
                      <Wind className="w-4 h-4 text-[#0077b6] mb-1" />
                      <span className="text-[11px] font-bold text-gray-800">{vehicle.ac ? 'Dual A/C' : 'A/C'}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5">
                    {vehicle.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & Booking CTA */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Daily Rate From</div>
                      <div className="font-serif text-lg font-bold text-[#002b49]">
                        {formatPrice(vehicle.pricePerDayLKR)}
                      </div>
                    </div>

                    <button
                      onClick={() => handleSelectVehicleForBooking(vehicle.model)}
                      className="bg-[#002b49] hover:bg-[#0077b6] text-white px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Popular Fixed Rate Airport Transfers */}
      <section className="py-16 bg-white border-t border-[#e2ede7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Fixed Price Guarantee
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002b49]">
                Popular Airport Transfers
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md leading-relaxed">
              Includes meet-and-greet inside Colombo Airport arrivals, expressway highway tolls, fuel, and luggage assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTransfers.map((tf, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#f8fbfa] border border-[#e2ede7] hover:border-[#002b49] transition-all hover:shadow-md flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#0077b6] bg-[#eaf3f8] px-2.5 py-1 rounded-full">
                    {tf.badge}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#002b49] mt-3">
                    {tf.route}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#cba258]" />
                    <span>Approx. {tf.duration}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <div className="font-serif text-lg font-bold text-[#002b49]">
                    {formatPrice(tf.priceLKR)}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        pickupLocation: 'Bandaranaike International Airport (CMB)',
                        dropoffLocation: tf.route.split('→ ')[1] || tf.route,
                        notes: `Inquiry for fixed transfer route: ${tf.route}`,
                      }));
                      const el = document.getElementById('rental-booking-form');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-[#0077b6] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Select</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Vehicle Reservation & Quotation Form (Light Theme) */}
      <section id="rental-booking-form" className="py-20 bg-[#f8fbfa] border-t border-[#e2ede7] scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7]">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Fast &amp; Transparent Booking
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#1a1a1a] mb-3">
                Reserve Your Vehicle &amp; Chauffeur
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Receive instant confirmation with transparent all-inclusive quotations. No hidden fees or surprise charges.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#f8fbfa] rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto border border-[#e2ede7] shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-2">
                  Reservation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Thank you <strong>{formData.fullName}</strong>. We have received your booking request for the <strong>{formData.selectedVehicle}</strong>. Our logistics manager will contact you within 1 hour with the driver details and vouchers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => handleWhatsAppVehicleInquiry(formData.selectedVehicle)}
                    className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Chat via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
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
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. David Miller"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all"
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
                      placeholder="david@example.com"
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

                  {/* Vehicle Model Selection */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Selected Vehicle</span>
                    </label>
                    <select
                      name="selectedVehicle"
                      value={formData.selectedVehicle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                    >
                      {VEHICLES.map((v) => (
                        <option key={v.id} value={v.model}>
                          {v.model} ({v.category} - {v.passengers} Pax)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Rental Service Type</span>
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                    >
                      <option value="With Private English-Speaking Chauffeur">
                        With Private Tourist Chauffeur Guide
                      </option>
                      <option value="Airport Arrival Pick-up Transfer Only">
                        Airport Arrival Pick-up Transfer Only
                      </option>
                      <option value="Airport Departure Drop-off Only">
                        Airport Departure Drop-off Only
                      </option>
                      <option value="Multi-Day Islandwide Round Trip Tour">
                        Multi-Day Islandwide Round Trip Tour
                      </option>
                    </select>
                  </div>

                  {/* Passengers Count */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Total Passengers</span>
                    </label>
                    <select
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, '15+'].map((pax) => (
                        <option key={pax} value={pax}>
                          {pax} Passenger{pax !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pick-up Date */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Pick-up Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white cursor-pointer"
                    />
                  </div>

                  {/* Pick-up Location */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Pick-up Location</span>
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Airport CMB / Hotel Name"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white transition-all"
                    />
                  </div>

                  {/* Drop-off Location */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#cba258]" />
                      <span>Drop-off Location</span>
                    </label>
                    <input
                      type="text"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Kandy / Galle / Airport"
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white transition-all"
                    />
                  </div>

                </div>

                {/* Additional Notes */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                    Flight Number, Itinerary Stops, or Special Luggage Requirements
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Provide any flight arrival details, infant car seat requirements, planned sightseeing stops..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fbfa] border border-gray-200 hover:border-[#002b49] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#002b49] focus:bg-white focus:ring-2 focus:ring-[#002b49]/10 transition-all resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-[11px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0077b6]" />
                      <span>Full Commercial Passenger Insurance</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleWhatsAppVehicleInquiry()}
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
                      <span>Confirm Vehicle Booking</span>
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
        onSelectSearch={(term) => setSearchQuery(term)}
      />
    </main>
  );
}
