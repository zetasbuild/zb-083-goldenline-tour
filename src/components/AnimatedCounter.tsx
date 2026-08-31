'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1800,
  className = '',
}) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  const { prefix, numericValue, suffix, isFloat, decimals } = useMemo(() => {
    const match = value.match(/^([^0-9.-]*)([0-9.-]+)(.*)$/);
    if (!match) return { prefix: '', numericValue: 0, suffix: value, isFloat: false, decimals: 0 };
    
    const numStr = match[2];
    const isFloat = numStr.includes('.');
    const decimals = isFloat ? numStr.split('.')[1].length : 0;
    
    return {
      prefix: match[1],
      numericValue: parseFloat(numStr),
      suffix: match[3],
      isFloat,
      decimals,
    };
  }, [value]);

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (numericValue === 0) {
      setCurrentValue(0);
      return;
    }

    const startAnimation = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease Out Cubic: 1 - pow(1 - progress, 3)
        const ease = 1 - Math.pow(1 - progress, 3);
        setCurrentValue(numericValue * ease);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCurrentValue(numericValue);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation on enter (both scrolling down and scrolling up)
            startAnimation();
          } else {
            // Reset to 0 when out of view so it replays smoothly when scrolling back from either direction
            if (animationRef.current) {
              cancelAnimationFrame(animationRef.current);
              animationRef.current = null;
            }
            setCurrentValue(0);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentEl = countRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [numericValue, duration]);

  const displayValue = isFloat 
    ? currentValue.toFixed(decimals) 
    : Math.floor(currentValue).toLocaleString();

  return (
    <span ref={countRef} className={`inline-block tabular-nums transition-transform ${className}`}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

