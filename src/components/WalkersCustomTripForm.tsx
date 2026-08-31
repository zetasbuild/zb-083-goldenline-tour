'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Users,
  Car,
  Sparkles,
  Check,
  Send,
  ShieldCheck,
  Building2,
  Compass,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/WhatsAppIcon';
import confetti from 'canvas-confetti';

interface WalkersCustomTripFormProps {
  id?: string;
  initialDestination?: string;
  className?: string;
}

export const WalkersCustomTripForm: React.FC<WalkersCustomTripFormProps> = ({
  id = 'custom-tour-form',
  initialDestination,
  className = '',
}) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    initialDestination ? [initialDestination] : ['Ella', 'Sigiriya', 'Kandy']
  );
  const [tripType, setTripType] = useState('Family Vacation');
  const [duration, setDuration] = useState('7-10 Days');
  const [travelers, setTravelers] = useState('2 Adults');
  const [vehicle, setVehicle] = useState('Luxury Van (Toyota KDH / Hiace)');
  const [hotelType, setHotelType] = useState('4-5 Star Luxury & Boutique');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const destinationsList = [
    'Sigiriya Rock Citadel',
    'Ella & Nine Arch Bridge',
    'Kandy Sacred Temple',
    'Nuwara Eliya Tea Hills',
    'Yala Leopard Safari',
    'Mirissa & South Beaches',
    'Galle Historic Dutch Fort',
    'Trincomalee & East Coast',
    'Wilpattu Safari',
    'Anuradhapura Ancient City',
    'Bentota Beach Resort',
    'Colombo City',
  ];

  const tripTypes = [
    'Family Vacation',
    'Romantic Honeymoon',
    'Wildlife & Safari',
    'Cultural Heritage',
    'Scenic Mountain & Train',
    'Luxury Wellness & Beach',
  ];

  const durations = [
    '3-5 Days',
    '6-8 Days',
    '7-10 Days',
    '11-14 Days',
    '15+ Days',
  ];

  const toggleDestination = (dest: string) => {
    if (selectedDestinations.includes(dest)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== dest));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, dest]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello GoldenLine TOUR! I would like to plan a custom Sri Lanka tour itinerary.\n\n` +
      `• Destinations: ${selectedDestinations.join(', ')}\n` +
      `• Travel Style: ${tripType}\n` +
      `• Duration: ${duration}\n` +
      `• Estimated Date: ${travelDate || 'Flexible'}\n` +
      `• Travelers: ${travelers}\n` +
      `• Vehicle Preference: ${vehicle}\n` +
      `• Accommodation: ${hotelType}\n` +
      `• Name: ${fullName || 'Guest'}\n` +
      `• Phone/WhatsApp: ${whatsapp}\n` +
      (notes ? `• Special Notes: ${notes}` : '')
    );
    window.open(`https://wa.me/94715477149?text=${text}`, '_blank');
  };

  return (
    <section id={id} className={`py-20 lg:py-28 bg-[#f8fbfa] border-t border-[#e2ede7] scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div data-reveal="zoom-in" data-reveal-duration="850" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e2ede7] relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ed1fc]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#cba258]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Form Section Header */}
            <div data-reveal="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span
                className="font-caveat text-3xl sm:text-4xl text-[#cba258] mb-1.5 inline-block -rotate-2"
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
              >
                Plan Your Dream
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-[#1C1917] mb-3">
                Custom Sri Lanka Itinerary
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                Tell us your travel dates, preferred destinations, vehicle style, and accommodation standard. Our senior destination specialists will craft a customized day-by-day proposal with transparent quotes within 2 hours.
              </p>
            </div>

            {isSubmitted ? (
              /* Success Confirmation Screen */
              <div className="bg-[#FAF7EE] rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto border border-[#E7E0D0] shadow-sm animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2">
                  Trip Itinerary Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  Thank you, <strong>{fullName || 'Traveler'}</strong>! We have received your custom itinerary inquiry for <strong>{duration}</strong> covering <strong>{selectedDestinations.slice(0, 3).join(', ')}{selectedDestinations.length > 3 ? ` + ${selectedDestinations.length - 3} more` : ''}</strong>. Our senior Ceylon travel designer is crafting your bespoke itinerary proposal.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 h-12 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="flex-1 h-12 bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:border-[#1C1917] cursor-pointer"
                  >
                    Edit / Submit Another
                  </button>
                </div>
              </div>
            ) : (
              /* Full Responsive Integrated Plan Trip Form */
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Destination Selection Pills */}
                <div className="bg-[#FAF7EE] p-5 sm:p-7 rounded-2xl border border-[#E7E0D0]">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <label className="text-xs sm:text-[13px] font-bold text-[#1C1917] uppercase tracking-wider flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C85A32]" />
                      <span>1. Select Destinations of Interest (Click to add / remove)</span>
                    </label>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {selectedDestinations.length} selected
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 pt-1">
                    {destinationsList.map((dest) => {
                      const isSelected = selectedDestinations.includes(dest);
                      return (
                        <button
                          key={dest}
                          type="button"
                          onClick={() => toggleDestination(dest)}
                          className={`px-3 py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center justify-between w-full text-left cursor-pointer ${
                            isSelected
                              ? 'bg-[#1C1917] text-white shadow-sm scale-[1.02]'
                              : 'bg-white text-gray-700 border border-gray-200 hover:border-[#1C1917] hover:bg-gray-50'
                          }`}
                        >
                          <span className="truncate pr-1">{dest}</span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#cba258] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Trip Style & Duration Selection */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Trip Style */}
                  <div className="bg-[#FAF7EE] p-5 sm:p-7 rounded-2xl border border-[#E7E0D0] flex flex-col justify-between">
                    <div>
                      <label className="text-xs sm:text-[13px] font-bold text-[#1C1917] uppercase tracking-wider block mb-3 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#cba258]" />
                        <span>2. Preferred Travel Style</span>
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {tripTypes.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setTripType(t)}
                            className={`px-3 py-2.5 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all cursor-pointer w-full text-center truncate ${
                              tripType === t
                                ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-[#1C1917]'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="bg-[#FAF7EE] p-5 sm:p-7 rounded-2xl border border-[#E7E0D0] flex flex-col justify-between">
                    <div>
                      <label className="text-xs sm:text-[13px] font-bold text-[#1C1917] uppercase tracking-wider block mb-3 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#C85A32]" />
                        <span>3. Target Trip Duration</span>
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {durations.map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => setDuration(d)}
                            className={`py-2 px-1 text-center rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                              duration === d
                                ? 'bg-[#1C1917] text-white border-[#1C1917] shadow-sm'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-[#1C1917]'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Vehicle & Accommodation Standards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vehicle */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-[#C85A32]" />
                      <span>Preferred Vehicle &amp; Chauffeur Logistics</span>
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all cursor-pointer"
                    >
                      <option value="Private Car (Toyota Aqua / Sedan - 2-3 Pax)">Private Car (Toyota Aqua / Sedan - 2-3 Pax)</option>
                      <option value="Compact SUV (Toyota Rush - 4-5 Pax)">Compact SUV (Toyota Rush - 4-5 Pax)</option>
                      <option value="Luxury Van (Toyota KDH / Hiace - 6-8 Pax)">Luxury Van (Toyota KDH / Hiace - 6-8 Pax)</option>
                      <option value="Large Tourist Coach (15-30 Pax)">Luxury Tourist Coach (15-30 Pax)</option>
                    </select>
                  </div>

                  {/* Accommodation */}
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#cba258]" />
                      <span>Accommodation Standard</span>
                    </label>
                    <select
                      value={hotelType}
                      onChange={(e) => setHotelType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all cursor-pointer"
                    >
                      <option value="4-5 Star Luxury & Boutique">4-5 Star Luxury &amp; Signature Boutique Hotels</option>
                      <option value="3-4 Star Comfort & Heritage">3-4 Star Comfort &amp; Heritage Lodges</option>
                      <option value="Eco Villas & Secluded Nature Retreats">Eco Villas &amp; Secluded Nature Retreats</option>
                      <option value="I will arrange my own hotels (Transport & Guide only)">I will arrange my own hotels (Transport &amp; Guide only)</option>
                    </select>
                  </div>
                </div>

                {/* Step 4: Contact & Guest Details */}
                <div className="pt-2 border-t border-gray-200">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4">
                    4. Traveler Details &amp; Contact
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. John Smith"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        WhatsApp / Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="+1 (555) 019-283"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
                      />
                    </div>

                    {/* Travelers Count */}
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Number of Travelers
                      </label>
                      <input
                        type="text"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        placeholder="e.g. 2 Adults, 1 Child"
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
                      />
                    </div>
                  </div>

                  {/* Estimated Arrival Date & Special Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Estimated Arrival Date
                      </label>
                      <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all cursor-pointer"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700 block mb-2">
                        Special Requests, Dietary Preferences, or Notes
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Scenic train ride in Ella, private safari jeep, ocean view rooms..."
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7EE] border border-gray-200 hover:border-[#1C1917] text-gray-900 placeholder-gray-400 text-xs sm:text-sm font-medium outline-none focus:border-[#1C1917] focus:bg-white focus:ring-2 focus:ring-[#1C1917]/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action Row */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#C85A32]" />
                      <span className="font-medium">100% Tailored · Free Quotation · Direct Local Operator</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="min-h-[3rem] sm:min-h-[3.25rem] px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer shrink-0"
                      title="Instant WhatsApp Consultation"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
                      <span>WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      className="min-h-[3rem] sm:min-h-[3.25rem] py-3 sm:py-0 px-6 sm:px-8 rounded-full bg-[#1C1917] hover:bg-[#C85A32] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer group"
                    >
                      <Sparkles className="w-4 h-4 text-[#cba258] shrink-0" />
                      <span className="leading-tight text-center">Submit &amp; Get Free Itinerary Quote</span>
                    </button>
                  </div>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
