
import React from 'react';
import { useTypewriter } from '@/utils/animations';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursorClassName?: string;
  showCursor?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className,
  speed = 70,
  delay = 0,
  cursorClassName,
  showCursor = true
}) => {
  const { displayText, isTyping } = useTypewriter(text, speed, delay);

  return (
    <div className={cn("inline-flex", className)}>
      <span>{displayText}</span>
      {showCursor && isTyping && (
        <span className={cn("animate-blink ml-1", cursorClassName)}>|</span>
      )}
    </div>
  );
};

export default AnimatedText;
