'use client';

import React from 'react';
import Image from 'next/image';
import { X, MapPin, Star, Calendar, Check, Sparkles, Compass } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onPlanTripForDest: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  isOpen,
  onClose,
  onPlanTripForDest,
}) => {
  if (!isOpen || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col max-h-[90vh]">
        {/* Destination Image Hero */}
        <div className="relative h-64 sm:h-72 w-full bg-gray-900 shrink-0">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title and Region */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#e5a83b] text-black">
                {destination.subtitle}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#e5a83b] text-[#e5a83b]" />
                <span>{destination.rating}</span>
              </div>
            </div>
            <h3 className="font-serif text-3xl font-bold">{destination.name}</h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-200 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#e5a83b]" />
              <span>{destination.region}, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">About Destination</h4>
            <p className="text-sm text-[#2d473e] leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#f7faf8] border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0e382b] mb-1">
                <Calendar className="w-4 h-4 text-[#e5a83b]" />
                <span>Best Time to Visit</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">{destination.bestTime}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#f7faf8] border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0e382b] mb-1">
                <Compass className="w-4 h-4 text-[#e5a83b]" />
                <span>Top Category</span>
              </div>
              <p className="text-xs text-gray-600 font-medium">{destination.tag}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Key Highlights &amp; Attractions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {destination.attractions.map((att, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-xl bg-gray-50">
                  <Check className="w-4 h-4 text-[#0f8b53]" />
                  <span>{att}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onPlanTripForDest(destination.name);
            }}
            className="bg-[#0e382b] hover:bg-[#165b40] text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e5a83b]" />
            <span>Customize Trip to {destination.name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
