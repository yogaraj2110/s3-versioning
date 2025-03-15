
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { getStaggeredDelay } from '@/utils/animations';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'outline';
  showLabels?: boolean;
}

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yogaraj-a',
    ariaLabel: 'View GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yogaraj-a',
    ariaLabel: 'View LinkedIn profile'
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:yogaraj@example.com',
    ariaLabel: 'Send an email'
  }
];

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className, 
  iconSize = 20,
  variant = 'default',
  showLabels = false
}) => {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            style={{
              animationDelay: `${getStaggeredDelay(index, 150)}ms`
            }}
            className={cn(
              "group relative inline-flex items-center justify-center gap-2 rounded-full p-2",
              "transition-all duration-300 animate-fade-in",
              variant === 'default' ? 
                "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground" : 
                "border border-muted-foreground/20 text-foreground hover:border-primary hover:text-primary",
              showLabels ? "px-4" : ""
            )}
          >
            <Icon size={iconSize} />
            {showLabels && (
              <span className="text-sm font-medium">{social.name}</span>
            )}
            <span className="absolute -inset-0.5 -z-10 rounded-full opacity-0 blur transition-all duration-300 group-hover:opacity-60 group-hover:blur-md bg-primary/30" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
