
import { useEffect, useRef, useState } from 'react';

// Custom hook to handle element visibility for animations
export const useElementOnScreen = (options: IntersectionObserverInit = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, mergedOptions);

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [mergedOptions]);

  return { containerRef, isVisible };
};

// Custom hook for typing effect
export const useTypewriter = (text: string, speed: number = 100, delay: number = 0) => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (delay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, delay);
    } else {
      startTyping();
    }

    function startTyping() {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, speed);
      
      return () => clearInterval(typingInterval);
    }

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isTyping };
};

// Get staggered animation delay
export const getStaggeredDelay = (index: number, baseDelay: number = 100): number => {
  return index * baseDelay;
};

// Generate smooth scroll function
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
