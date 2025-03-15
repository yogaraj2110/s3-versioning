
import React from 'react';
import { cn } from '@/lib/utils';
import SocialIcons from '@/components/ui/SocialIcons';
import { ChevronUp } from 'lucide-react';
import { scrollToSection } from '@/utils/animations';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="order-2 md:order-1">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Yogaraj A. All rights reserved.
            </p>
          </div>
          
          <SocialIcons className="order-1 md:order-2" variant="outline" />
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('hero')}
        className={cn(
          "absolute -top-6 left-1/2 transform -translate-x-1/2",
          "bg-primary/20 hover:bg-primary/30 text-primary-foreground",
          "w-12 h-12 rounded-full flex items-center justify-center",
          "transition-all duration-300 border border-primary/20"
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
