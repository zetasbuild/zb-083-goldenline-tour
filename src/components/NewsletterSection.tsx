'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setSubscribed(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-12 bg-[#F5F2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#D4AF37] rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#AA8C2C]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Info */}
            <div className="lg:col-span-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F5F2E6]/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#FFDF00] shrink-0">
                <Send className="w-5 h-5 -rotate-12" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white tracking-wide mb-0.5">
                  Get Exclusive Travel Deals &amp; Inspiration
                </h3>
                <p className="text-xs text-gray-300">
                  Subscribe to our newsletter and never miss curated seasonal discounts.
                </p>
              </div>
            </div>

            {/* Right Input Form */}
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="bg-[#F5F2E6]/10 backdrop-blur-md border border-[#FFDF00]/40 rounded-2xl p-3 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#FFDF00]" />
                  <span className="text-xs font-semibold">
                    Thank you! Welcome to GoldenLine TOUR VIP Insider Circle.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#F5F2E6]/10 border border-white/20 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFDF00] focus:bg-[#F5F2E6]/15 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-[#FFDF00] hover:bg-[#d49a37] text-[#072118] px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg shrink-0 cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
