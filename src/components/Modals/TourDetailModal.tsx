'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Star, Clock, Check, Sparkles, MessageSquare, MapPin } from 'lucide-react';
import { TourPackage } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import confetti from 'canvas-confetti';

interface TourDetailModalProps {
  pkg: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({ pkg, isOpen, onClose }) => {
  const { formatPrice } = useCurrency();
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [date, setDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !pkg) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to book the following tour package:\n` +
      `Package: ${pkg.title} (${pkg.duration})\n` +
      `Price: ${formatPrice(pkg.priceLKR)}\n` +
      `Travelers: ${travelers} Persons\n` +
      `Preferred Start Date: ${date || 'Flexible'}\n` +
      `Name: ${name} (${whatsapp})`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-gray-900 shrink-0">
          <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#e5a83b] text-black">
                {pkg.duration}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#e5a83b] text-[#e5a83b]" />
                <span>{pkg.rating} ({pkg.reviewsCount}+ reviews)</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">{pkg.title}</h3>
            <div className="text-sm font-bold text-[#e5a83b] mt-1">
              Starting from {formatPrice(pkg.priceLKR)} / person
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isBooked ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#edf7f2] text-[#0f8b53] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0e382b] mb-2">
                Tour Reservation Confirmed!
              </h4>
              <p className="text-xs text-gray-600 max-w-md mb-6 leading-relaxed">
                Thank you for selecting the <strong>{pkg.title}</strong>. Our tour manager will contact you with the complete itinerary breakdown and hotel vouchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-2xl text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Tour Overview</h4>
                <p className="text-xs sm:text-sm text-[#2d473e] leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Destinations Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {pkg.destinationsCovered.map((d) => (
                    <span key={d} className="px-3 py-1 bg-[#edf5f1] text-[#0e382b] rounded-full text-xs font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#e5a83b]" />
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">What is Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-gray-700 p-2 rounded-xl bg-gray-50">
                      <Check className="w-3.5 h-3.5 text-[#0f8b53] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Booking Form */}
              <form onSubmit={handleBooking} className="pt-4 border-t border-gray-100 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0e382b]">Reserve Tour Dates</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium outline-none focus:border-[#0e382b]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+94 ..."
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium outline-none focus:border-[#0e382b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Estimated Travel Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium outline-none focus:border-[#0e382b]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Number of Persons</label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium outline-none focus:border-[#0e382b]"
                    >
                      <option value="1">1 Person (Solo)</option>
                      <option value="2">2 Persons (Couple / Pair)</option>
                      <option value="3-4">3 - 4 Persons (Small Family)</option>
                      <option value="5-8">5 - 8 Persons (Group)</option>
                      <option value="9+">9+ Persons (Large Group)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#0e382b] hover:bg-[#165b40] text-white py-3 rounded-2xl text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    Confirm Booking Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
