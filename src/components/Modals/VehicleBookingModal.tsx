'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Users, Briefcase, Cog, Check, Shield, MessageSquare, Sparkles, Fuel } from 'lucide-react';
import { Vehicle } from '@/types';
import { useCurrency } from '@/context/CurrencyContext';
import confetti from 'canvas-confetti';

interface VehicleBookingModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VehicleBookingModal: React.FC<VehicleBookingModalProps> = ({
  vehicle,
  isOpen,
  onClose,
}) => {
  const { formatPrice } = useCurrency();
  const [days, setDays] = useState(3);
  const [withDriver, setWithDriver] = useState(true);
  const [airportPickup, setAirportPickup] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen || !vehicle) return null;

  const driverRatePerDay = 3500; // LKR
  const airportFee = airportPickup ? 4500 : 0; // LKR
  const dailyVehicleRate = vehicle.pricePerDayLKR;
  const totalLKR = (dailyVehicleRate + (withDriver ? driverRatePerDay : 0)) * days + airportFee;

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

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to reserve the following vehicle:\n` +
      `Vehicle: ${vehicle.category} (${vehicle.model})\n` +
      `Duration: ${days} Days\n` +
      `Chauffeur Guide: ${withDriver ? 'Yes' : 'Self Drive'}\n` +
      `Airport Transfer: ${airportPickup ? 'Yes' : 'No'}\n` +
      `Estimated Total: ${formatPrice(totalLKR)}\n` +
      `Pickup Date: ${pickupDate || 'Soon'}\n` +
      `Customer: ${name} (${phone})`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#0c241c] text-white p-5 sm:p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5a83b]">
              Vehicle Reservation &amp; Quote
            </span>
            <h3 className="font-serif text-2xl font-bold">{vehicle.category}</h3>
            <p className="text-xs text-gray-300">{vehicle.model}</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isBooked ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#edf7f2] text-[#0f8b53] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#0e382b] mb-2">
                Booking Request Sent!
              </h4>
              <p className="text-xs text-gray-600 max-w-md mb-6 leading-relaxed">
                We have received your reservation for the <strong>{vehicle.category} ({vehicle.model})</strong>. Our fleet dispatcher is confirming vehicle availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  onClick={handleWhatsAppBooking}
                  className="flex-1 bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp Confirmation</span>
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
            <form onSubmit={handleBooking} className="space-y-5">
              {/* Vehicle Specs Bar */}
              <div className="grid grid-cols-3 gap-3 p-3 bg-[#f7faf8] rounded-2xl border border-gray-200 text-center text-xs text-gray-700">
                <div className="flex items-center justify-center gap-1.5">
                  <Users className="w-4 h-4 text-[#0e382b]" />
                  <span>{vehicle.passengers} Passengers</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 border-x border-gray-200">
                  <Briefcase className="w-4 h-4 text-[#0e382b]" />
                  <span>{vehicle.luggage} Luggage</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <Cog className="w-4 h-4 text-[#0e382b]" />
                  <span>{vehicle.transmission}</span>
                </div>
              </div>

              {/* Duration and Chauffeur Options */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gray-700">Rental Duration (Days)</label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDays(Math.max(1, days - 1))}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold w-6 text-center">{days} Days</span>
                    <button
                      type="button"
                      onClick={() => setDays(days + 1)}
                      className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setWithDriver(true)}
                    className={`p-3 rounded-2xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      withDriver
                        ? 'bg-[#0e382b] text-white border-[#0e382b]'
                        : 'bg-[#f7faf8] text-gray-700 border-gray-200 hover:border-[#0e382b]'
                    }`}
                  >
                    <div>
                      <div>With Chauffeur</div>
                      <div className="text-[10px] opacity-75">English guide included</div>
                    </div>
                    {withDriver && <Check className="w-4 h-4 text-[#e5a83b]" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setWithDriver(false)}
                    className={`p-3 rounded-2xl text-xs font-semibold border transition-all text-left flex items-center justify-between cursor-pointer ${
                      !withDriver
                        ? 'bg-[#0e382b] text-white border-[#0e382b]'
                        : 'bg-[#f7faf8] text-gray-700 border-gray-200 hover:border-[#0e382b]'
                    }`}
                  >
                    <div>
                      <div>Self Drive</div>
                      <div className="text-[10px] opacity-75">Valid license required</div>
                    </div>
                    {!withDriver && <Check className="w-4 h-4 text-[#e5a83b]" />}
                  </button>
                </div>
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+94 ..."
                    className="w-full p-2.5 rounded-xl border border-gray-200 bg-[#f7faf8] text-xs font-medium text-gray-800 outline-none focus:border-[#0e382b]"
                  />
                </div>
              </div>

              {/* Live Cost Summary Box */}
              <div className="bg-[#edf5f1] rounded-2xl p-4 border border-[#d6e7df]">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Vehicle Rate ({days} Days)</span>
                  <span>{formatPrice(dailyVehicleRate * days)}</span>
                </div>
                {withDriver && (
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Chauffeur Guide Allowance ({days} Days)</span>
                    <span>{formatPrice(driverRatePerDay * days)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-[#c6dfd4] text-sm font-black text-[#0e382b]">
                  <span>Estimated Total</span>
                  <span className="text-[#0e382b] text-base">{formatPrice(totalLKR)}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#0e382b] hover:bg-[#165b40] text-white py-3 rounded-2xl text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Reserve Online
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="flex-1 bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
