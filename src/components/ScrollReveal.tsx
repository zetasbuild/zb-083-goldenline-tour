'use client';

import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade-in';
  delay?: 50 | 100 | 150 | 200 | 250 | 300 | 400 | 500 | 600 | 800;
  duration?: 500 | 700 | 850 | 1000 | 1200;
  stagger?: boolean;
  className?: string;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay,
  duration,
  stagger = false,
  className = '',
  id,
}) => {
  return (
    <div
      id={id}
      data-reveal={animation}
      {...(delay ? { 'data-reveal-delay': delay.toString() } : {})}
      {...(duration ? { 'data-reveal-duration': duration.toString() } : {})}
      {...(stagger ? { 'data-reveal-stagger': 'true' } : {})}
      className={className}
    >
      {children}
    </div>
  );
};
