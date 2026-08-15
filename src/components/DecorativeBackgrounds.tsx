import React from 'react';

interface DecorativeSVGProps {
  className?: string;
}

export const TropicalLeafBackground: React.FC<DecorativeSVGProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 180 C 40 140, 60 100, 110 40 C 130 50, 135 70, 130 90 C 150 70, 170 65, 180 80 C 160 100, 135 110, 120 120 C 145 125, 165 140, 150 160 C 120 150, 95 130, 80 140 C 90 170, 70 190, 50 185 C 55 170, 50 155, 40 160 C 35 170, 30 175, 30 180 Z" opacity="0.8" />
      <path d="M30 180 C 50 120, 80 80, 140 20 C 160 35, 165 55, 150 80 C 175 60, 195 60, 200 80 C 175 105, 145 110, 120 115 C 145 125, 160 145, 140 170 C 110 150, 90 125, 75 135 C 75 165, 50 185, 30 180 Z" opacity="0.4" />
      <path d="M30 180 C 35 150, 50 120, 90 70 C 105 85, 105 105, 95 120 C 115 105, 135 105, 140 120 C 120 135, 100 135, 85 140 C 100 155, 110 170, 90 185 C 70 170, 55 155, 45 160 C 45 175, 35 180, 30 180 Z" opacity="0.6" />
    </svg>
  );
};

export const LotusBackground: React.FC<DecorativeSVGProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M100 30 C 130 90, 150 150, 100 180 C 50 150, 70 90, 100 30 Z" />
      <path d="M100 180 C 140 150, 180 120, 190 80 C 170 70, 130 120, 100 180 Z" opacity="0.8" />
      <path d="M100 180 C 60 150, 20 120, 10 80 C 30 70, 70 120, 100 180 Z" opacity="0.8" />
      <path d="M100 180 C 150 160, 190 150, 200 120 C 180 100, 150 140, 100 180 Z" opacity="0.5" />
      <path d="M100 180 C 50 160, 10 150, 0 120 C 20 100, 50 140, 100 180 Z" opacity="0.5" />
      <circle cx="100" cy="180" r="10" />
    </svg>
  );
};

export const MandalaBackground: React.FC<DecorativeSVGProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" opacity="0.2" />
      <circle cx="100" cy="100" r="70" opacity="0.4" />
      <circle cx="100" cy="100" r="50" opacity="0.6" />
      <circle cx="100" cy="100" r="30" opacity="0.8" />
      <path d="M100 10 L100 190 M10 100 L190 100" opacity="0.3" />
      <path d="M35 35 L165 165 M35 165 L165 35" opacity="0.3" />
      <path d="M100 10 Q 140 50, 190 100 Q 140 150, 100 190 Q 60 150, 10 100 Q 60 50, 100 10 Z" opacity="0.5" />
    </svg>
  );
};
