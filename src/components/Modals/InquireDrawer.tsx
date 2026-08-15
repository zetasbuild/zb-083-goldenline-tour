'use client';

import React, { useState } from 'react';
import { X, Check, MessageSquare, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InquireDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledInterest?: string;
}

export const InquireDrawer: React.FC<InquireDrawerProps> = ({
  isOpen,
  onClose,
  prefilledInterest,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [tourType, setTourType] = useState(prefilledInterest || 'Tailor-made Bespoke Tour');
  const [travelers, setTravelers] = useState('2');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    try {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Ceylon Journeys! I would like to inquire about a Sri Lanka tour.\n` +
      `Tour Interest: ${tourType}\n` +
      `Travelers: ${travelers}\n` +
      `Name: ${name} (${country})\n` +
      `Message: ${message || 'Please send me customized options.'}`
    );
    window.open(`https://wa.me/94771234567?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="bg-[#002b49] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#8ed1fc] font-bold">
              Ceylon Journeys DMC
            </span>
            <h3 className="font-serif text-2xl font-bold">Inquire Now</h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Get an expert personalized itinerary within 2 hours
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

        {/* Content Body */}
        <div className="p-6 flex-1">
          {isSent ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#e6f3fa] text-[#0077b6] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#002b49] mb-2">
                Inquiry Received!
              </h4>
              <p className="text-xs text-[#55697a] leading-relaxed mb-6">
                Thank you, <strong>{name || 'Traveler'}</strong>! Our travel design specialist is preparing your bespoke itinerary and will reach out shortly.
              </p>
              <div className="space-y-3 w-full">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#0f8b53] hover:bg-[#0c7043] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-2xl text-xs font-bold cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-[#002b49] block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alexander Wright"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#002b49] block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#002b49] block mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 ..."
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[#002b49] block mb-1">Country of Residence</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#002b49] block mb-1">Travelers</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-4">3 - 4 Persons</option>
                    <option value="5-8">5 - 8 Persons</option>
                    <option value="9+">9+ Persons (Group)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#002b49] block mb-1">Tour Interest</label>
                <select
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                >
                  <option value="Tailor-made Bespoke Tour">Tailor-made Bespoke Tour</option>
                  <option value="Classic Tours Sri Lanka">Classic Tours Sri Lanka</option>
                  <option value="Cultural Tours Sri Lanka">Cultural Tours Sri Lanka</option>
                  <option value="Hill Country Scenic Tours">Hill Country Scenic Tours</option>
                  <option value="Wildlife & Adventure Tours">Wildlife &amp; Adventure Tours</option>
                  <option value="Beach Holidays">Beach Holidays</option>
                  <option value="Honeymoon Tours">Honeymoon Tours</option>
                  <option value="Luxury Tours">Luxury Tours</option>
                  <option value="Corporate MICE & Events">Corporate MICE &amp; Events</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#002b49] block mb-1">Your Trip Requirements</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Estimated travel dates, preferred hotel category (4-star / 5-star / Boutique), special activities..."
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#f8fbfa] text-xs font-medium text-gray-800 outline-none focus:border-[#002b49]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#002b49] hover:bg-[#0b4d75] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer Support */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>Need immediate help?</span>
          <a href="https://wa.me/94771234567" target="_blank" className="font-bold text-[#0f8b53] hover:underline flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>+94 77 123 4567</span>
          </a>
        </div>
      </div>
    </div>
  );
};
