'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function: easeOutExpo
            const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
            
            setCount(Math.floor(end * easeProgress));
            
            if (percentage < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) observer.unobserve(countRef.current);
    };
  }, [end, duration, hasAnimated]);

  return (
    <div ref={countRef} className={className}>
      {count}{suffix}
    </div>
  );
};
