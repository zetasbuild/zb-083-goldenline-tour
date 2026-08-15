'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
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
      decimals
    };
  }, [value]);

  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (numericValue === 0) {
      setCurrentValue(0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number | null = null;
          
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            
            const percentage = Math.min(progress / duration, 1);
            // Easing function: easeOutExpo
            const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            
            setCurrentValue(numericValue * easeProgress);
            
            if (percentage < 1) {
              animationRef.current = requestAnimationFrame(animate);
            }
          };
          
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Reset count to 0 when out of view so it animates from 0 again when scrolling down
          setCurrentValue(0);
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [numericValue, duration]);

  const displayValue = isFloat ? currentValue.toFixed(decimals) : Math.floor(currentValue).toString();

  return (
    <span ref={countRef} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};
