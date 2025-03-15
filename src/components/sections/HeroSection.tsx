
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from '@/components/ui/AnimatedText';
import SocialIcons from '@/components/ui/SocialIcons';
import { ArrowDown } from 'lucide-react';
import { scrollToSection } from '@/utils/animations';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-30 animate-pulse-slow animation-delay-1000" />
      </div>
      
      <div className="max-w-4xl w-full mx-auto text-center">
        <div className="mb-4 inline-block">
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/30 bg-secondary p-1 animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/80 to-accent/80">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Yogaraj A."
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white/80">
                  YA
                </div>
              </div>
            </div>
          </div>
          
          <span className="inline-block bg-primary/10 text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Software Developer
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="block mb-2 animate-fade-in">
              Hi, I'm <span className="text-gradient">Yogaraj A</span>
            </span>
            <AnimatedText 
              text="A Software Developer passionate about crafting scalable and high-performance applications!"
              className="text-xl md:text-2xl font-normal text-muted-foreground"
              speed={40}
              delay={1000}
            />
          </h1>
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '2s' }}>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 animate-glow"
            size="lg"
          >
            Get in Touch
          </Button>
          
          <Button 
            onClick={() => scrollToSection('projects')}
            variant="outline"
            className="border-white/10 hover:bg-secondary rounded-full px-6"
            size="lg"
          >
            View My Work
          </Button>
        </div>
        
        <div className="mt-10 animate-fade-in" style={{ animationDelay: '2.2s' }}>
          <SocialIcons />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-foreground hover:bg-primary/20 transition-colors duration-300"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
