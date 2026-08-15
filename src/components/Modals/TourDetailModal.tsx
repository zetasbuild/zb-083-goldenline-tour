'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Calendar, Check, Star, MessageSquare, MapPin, Sparkles, Clock, ArrowRight, Hotel } from 'lucide-react';
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
  const [phone, setPhone] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !pkg) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to inquire about "${pkg.title}" (${pkg.duration}).`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-[#001726] shrink-0">
          <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001726]/95 via-[#001726]/30 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#cba258] text-[#001726]">
                {pkg.duration}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#cba258] text-[#cba258]" />
                <span>{pkg.rating} ({pkg.reviewsCount}+ reviews)</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">{pkg.title}</h3>
            <div className="text-sm font-bold text-[#8ed1fc] mt-1">
              Starting from {formatPrice(pkg.priceLKR)} / person
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {isBooked ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#eaf7f0] text-emerald-600 flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#002b49] mb-2">
                Tour Reservation Received!
              </h4>
              <p className="text-xs text-gray-600 max-w-md mb-6 leading-relaxed">
                Thank you for selecting the <strong>{pkg.title}</strong>. Our tour manager will contact you with the complete itinerary breakdown and hotel vouchers.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-2xl text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Actions row: View Full Page */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Tour Details
                </span>
                <Link
                  href={`/tours/${pkg.id}`}
                  onClick={onClose}
                  className="text-xs font-bold text-[#0077b6] hover:underline flex items-center gap-1"
                >
                  <span>Open Full Tour Itinerary Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Tour Overview</h4>
                <p className="text-xs sm:text-sm text-[#002b49] leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Day by Day Snippet */}
              {pkg.itinerary && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Daily Itinerary Highlights</h4>
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                    {pkg.itinerary.map((item, idx) => (
                      <div key={idx} className="p-3 bg-[#f8fbfa] rounded-2xl border border-gray-100 text-xs">
                        <div className="flex items-center justify-between font-bold text-[#002b49] mb-1">
                          <span className="text-[#0077b6]">{item.day}: {item.title}</span>
                        </div>
                        <p className="text-gray-600 line-clamp-2">{item.desc}</p>
                        {item.stay && (
                          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#cba258] font-semibold">
                            <Hotel className="w-3 h-3" />
                            <span>{item.stay}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Destinations Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {pkg.destinationsCovered.map((d) => (
                    <span key={d} className="px-3 py-1 bg-[#f0f4f8] text-[#002b49] rounded-full text-xs font-semibold flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0077b6]" />
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
                      <Check className="w-3.5 h-3.5 text-[#0077b6] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Booking Form */}
              <form onSubmit={handleBooking} className="pt-4 border-t border-gray-100 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002b49]">Reserve Tour Dates</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium outline-none focus:border-[#002b49]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium outline-none focus:border-[#002b49]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Expected Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium outline-none focus:border-[#002b49]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Travelers</label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium outline-none focus:border-[#002b49] cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '10+'].map((num) => (
                        <option key={num} value={num}>
                          {num} Guest{num !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#002b49] hover:bg-[#0077b6] text-white py-3 rounded-2xl text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#cba258]" />
                    <span>Request Quotation</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-2xl text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#f8fbfa] border-t border-gray-100 flex items-center justify-between text-xs">
          <Link
            href={`/tours/${pkg.id}`}
            onClick={onClose}
            className="font-bold text-[#002b49] hover:underline flex items-center gap-1"
          >
            <span>View Full Day-by-Day Page</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#cba258]" />
          </Link>
          <button
            onClick={onClose}
            className="px-4 py-2 font-bold text-gray-500 hover:text-gray-900 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
