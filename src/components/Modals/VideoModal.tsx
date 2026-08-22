'use client';

import React from 'react';
import { X, Sparkles, MapPin } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-[#FFDF00]" />
            <span>Uncover The Wonder of Sri Lanka</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video"
            className="w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md border border-white/20 flex items-center justify-center pointer-events-auto transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/5T5BgO35f-Y?autoplay=1&mute=0&rel=0"
            title="GoldenLine TOUR Cinematic Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info in modal */}
        <div className="p-4 sm:p-5 bg-[#072118] text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-4 h-4 text-[#FFDF00]" />
            <span>Nine Arch Bridge · Sigiriya · Mirissa · Kandy · Yala National Park</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#D4AF37] hover:bg-[#AA8C2C] text-white px-4 py-2 rounded-xl text-xs font-bold border border-white/20 transition-all cursor-pointer"
          >
            Close &amp; Plan Trip
          </button>
        </div>
      </div>
    </div>
  );
};
