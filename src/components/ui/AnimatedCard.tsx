
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

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'slide-in-bottom':
        case 'fade-in':
          return 'opacity-0 translate-y-10';
        case 'slide-in-top':
          return 'opacity-0 translate-y-[-40px]';
        case 'slide-in-right':
          return 'opacity-0 translate-x-10';
        case 'slide-in-left':
          return 'opacity-0 translate-x-[-40px]';
        case 'scale-in':
          return 'opacity-0 scale-95';
        default:
          return 'opacity-0';
      }
    }
    
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "transition-all duration-700 ease-out",
        getAnimationClasses(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
