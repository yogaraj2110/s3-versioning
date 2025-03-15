
import React from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-in-bottom' | 'slide-in-top' | 'slide-in-right' | 'slide-in-left' | 'scale-in';
  threshold?: number;
  once?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  threshold = 0.1,
  once = true
}) => {
  const { containerRef, isVisible } = useElementOnScreen({
    threshold,
    rootMargin: '0px'
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "transition-all duration-700 ease-out",
        {
          'opacity-0': !isVisible,
          'translate-y-10': !isVisible && (animation === 'slide-in-bottom' || animation === 'fade-in'),
          'translate-y-0 opacity-100': isVisible && (animation === 'slide-in-bottom' || animation === 'fade-in'),
          'translate-y-[-40px]': !isVisible && animation === 'slide-in-top',
          'translate-y-0 opacity-100': isVisible && animation === 'slide-in-top',
          'translate-x-10 opacity-0': !isVisible && animation === 'slide-in-right',
          'translate-x-0 opacity-100': isVisible && animation === 'slide-in-right',
          'translate-x-[-40px] opacity-0': !isVisible && animation === 'slide-in-left',
          'translate-x-0 opacity-100': isVisible && animation === 'slide-in-left',
          'scale-95 opacity-0': !isVisible && animation === 'scale-in',
          'scale-100 opacity-100': isVisible && animation === 'scale-in',
        },
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
