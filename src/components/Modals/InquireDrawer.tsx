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
      `Hello GoldenLine TOUR! I would like to inquire about a Sri Lanka tour.\n` +
      `Tour Interest: ${tourType}\n` +
      `Travelers: ${travelers}\n` +
      `Name: ${name} (${country})\n` +
      `Message: ${message || 'Please send me customized options.'}`
    );
    window.open(`https://wa.me/94715477149?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F5F2E6] w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#cba258] font-bold">
              GoldenLine TOUR DMC
            </span>
            <h3 className="font-serif text-2xl font-bold">Inquire Now</h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Get an expert personalized itinerary within 2 hours
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full bg-[#F5F2E6]/10 hover:bg-[#F5F2E6]/20 text-white flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1">
          {isSent ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#FAF7EE] text-[#C85A32] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-2">
                Inquiry Received!
              </h4>
              <p className="text-xs text-[#6B635B] leading-relaxed mb-6">
                Thank you, <strong>{name || 'Traveler'}</strong>! Our travel design specialist is preparing your bespoke itinerary and will reach out shortly.
              </p>
              <div className="space-y-3 w-full">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#D4AF37] hover:bg-[#AA8C2C] text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
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
                <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="eleanor@example.com"
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Country</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="United Kingdom"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">WhatsApp / Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7911 123456"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Travelers</label>
                  <input
                    type="text"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    placeholder="2 Adults"
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Trip Type</label>
                  <select
                    value={tourType}
                    onChange={(e) => setTourType(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                  >
                    <option value="Tailor-made Bespoke Tour">Tailor-made Bespoke Tour</option>
                    <option value="Classic Sri Lanka Tours">Classic Sri Lanka Tours</option>
                    <option value="Cultural & Heritage Tours">Cultural &amp; Heritage Tours</option>
                  <option value="Hill Country Scenic Tours">Hill Country Scenic Tours</option>
                  <option value="Wildlife & Adventure Tours">Wildlife &amp; Adventure Tours</option>
                  <option value="Beach Holidays">Beach Holidays</option>
                  <option value="Honeymoon Tours">Honeymoon Tours</option>
                    <option value="Luxury Tours">Luxury Tours</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[var(--color-primary)] block mb-1">Your Trip Requirements</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Estimated travel dates, preferred hotel category (4-star / 5-star / Boutique), special activities..."
                  className="w-full p-3 rounded-xl border border-gray-200 bg-[#FAF7EE] text-xs font-medium text-gray-800 outline-none focus:border-[var(--color-primary)]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[var(--color-primary)] hover:bg-[#C85A32] text-white py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
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
          <a href="https://wa.me/94715477149" target="_blank" className="font-bold text-[#D4AF37] hover:underline flex items-center gap-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>+94 71 547 7149</span>
          </a>
        </div>
      </div>
    </div>
  );
};
