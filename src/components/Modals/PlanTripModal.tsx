'use client';

import React, { useState } from 'react';
import { X, Check, Sparkles, Calendar, Users, MapPin, Car, Send, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Ella', 'Sigiriya']);
  const [tripType, setTripType] = useState('Family / Leisure');
  const [duration, setDuration] = useState('7 Days');
  const [travelers, setTravelers] = useState('2 Adults');
  const [vehicle, setVehicle] = useState('Luxury Van (Toyota Hiace)');
  const [hotelType, setHotelType] = useState('4-5 Star Luxury & Boutique');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const destinationsList = [
    'Ella & Nine Arch Bridge',
    'Sigiriya Rock Fortress',
    'Mirissa & South Coast',
    'Kandy Sacred Temple',
    'Nuwara Eliya Tea Country',
    'Galle Historic Dutch Fort',
    'Yala Leopard Safari',
    'Trincomalee / Pasikuda',
  ];

  const tripTypes = ['Family Vacation', 'Romantic Honeymoon', 'Adventure & Trekking', 'Cultural & Wildlife', 'Luxury Relaxing'];
  const durations = ['3-5 Days', '6-8 Days', '9-12 Days', '13-16 Days', '2+ Weeks'];

  const toggleDest = (item: string) => {
    if (selectedDestinations.includes(item)) {
      setSelectedDestinations(selectedDestinations.filter((d) => d !== item));
    } else {
      setSelectedDestinations([...selectedDestinations, item]);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const openWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to plan a custom Sri Lanka trip.\n` +
      `Destinations: ${selectedDestinations.join(', ')}\n` +
      `Duration: ${duration}\n` +
      `Travelers: ${travelers}\n` +
      `Vehicle: ${vehicle}\n` +
      `Hotel Style: ${hotelType}\n` +
      `Name: ${fullName || 'Guest'}\n` +
      `WhatsApp: ${whatsapp}`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-[#0e382b] text-white p-6 relative flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-script text-2xl text-[#e5a83b]">Plan Your Dream</span>
            </div>
            <h3 className="font-serif text-2xl font-bold tracking-tight">
              Custom Sri Lanka Itinerary
            </h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Step {step} of 3 — Tailored to your pace and preferences
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#e8f6ef] text-[#0f8b53] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0e382b] mb-2">
                Trip Request Received!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mb-6 leading-relaxed">
                Thank you, <strong>{fullName || 'Traveler'}</strong>! Our senior Ceylon travel designer will create your customized itinerary within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={openWhatsAppDirect}
                  className="flex-1 bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-2xl text-xs font-bold transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      1. Select Places You Want to Visit
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {destinationsList.map((dest) => {
                        const isSelected = selectedDestinations.includes(dest);
                        return (
                          <button
                            key={dest}
                            type="button"
                            onClick={() => toggleDest(dest)}
                            className={`p-3 rounded-2xl text-xs font-semibold text-left border transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#0e382b] text-white border-[#0e382b] shadow-sm'
                                : 'bg-[#f7faf8] text-gray-700 border-gray-200 hover:border-[#0e382b]'
                            }`}
                          >
                            <span>{dest}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#e5a83b]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      2. Vacation Style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tripTypes.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTripType(t)}
                          className={`px-4 py-2 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                            tripType === t
                              ? 'bg-[#0e382b] text-white border-[#0e382b]'
                              : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Trip Duration
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                      {durations.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`py-2.5 px-2 text-center rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                            duration === d
                              ? 'bg-[#0e382b] text-white border-[#0e382b]'
                              : 'bg-[#f7faf8] text-gray-700 border-gray-200 hover:border-[#0e382b]'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Preferred Vehicle &amp; Transport
                    </label>
                    <select
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                    >
                      <option value="Private Car (Toyota Aqua / Sedan)">Private Car (Toyota Aqua / Sedan - 2-3 Pax)</option>
                      <option value="SUV (Toyota Rush / Similar)">Compact SUV (Toyota Rush - 4-5 Pax)</option>
                      <option value="Passenger Van (Toyota KDH)">Passenger Van (Toyota KDH - 6-8 Pax)</option>
                      <option value="Luxury Van (Toyota Hiace)">Luxury Van (Toyota Hiace - 9-12 Pax)</option>
                      <option value="Tourist Bus Coach">Luxury Mini Coach (15-30 Pax)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Accommodation Standard
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['4-5 Star Luxury & Boutique', '3-4 Star Comfort', 'Eco Lodges & Heritage'].map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setHotelType(h)}
                          className={`p-3 rounded-2xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                            hotelType === h
                              ? 'bg-[#0e382b] text-white border-[#0e382b]'
                              : 'bg-[#f7faf8] text-gray-700 border-gray-200 hover:border-[#0e382b]'
                          }`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. John Smith"
                        className="w-full p-3 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. john@example.com"
                        className="w-full p-3 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="e.g. +1 555 019 283"
                        className="w-full p-3 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1">Number of Travelers</label>
                      <input
                        type="text"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        placeholder="e.g. 2 Adults, 1 Child"
                        className="w-full p-3 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Special Requests or Notes (Optional)</label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any specific interests, dietary preferences, or arrival flight times..."
                      className="w-full p-3 rounded-2xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#0e382b] hover:bg-[#165b40] text-white py-3.5 rounded-2xl text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#e5a83b]" />
                      <span>Submit &amp; Get Free Itinerary Quote</span>
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!isSubmitted && (
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="bg-[#0e382b] hover:bg-[#165b40] text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Next Step
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
