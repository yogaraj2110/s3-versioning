
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Check,
  Github,
  Typescript,
  MonitorPlay,
  ServerCrash,
  Cloud,
  Database
} from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Tools';
  className?: string;
}

const skillIcons: Record<string, React.ElementType> = {
  'React.js': MonitorPlay,
  'Next.js': MonitorPlay,
  'Angular': MonitorPlay,
  'TypeScript': Typescript,
  'Node.js': ServerCrash,
  'Express.js': ServerCrash,
  'MongoDB': Database,
  'SQL': Database,
  'AWS': Cloud,
  'Docker': Cloud,
  'Nginx': Cloud,
  'Git': Github,
  'GitHub': Github,
  'Postman': ServerCrash,
  'Jira': Github
};

const skillColorMap: Record<string, string> = {
  'Frontend': 'from-purple-500 to-blue-500',
  'Backend': 'from-blue-500 to-teal-500',
  'Cloud': 'from-teal-500 to-emerald-500',
  'Tools': 'from-amber-500 to-orange-500',
};

const levelRating = {
  'Beginner': 1,
  'Intermediate': 2,
  'Advanced': 3,
  'Expert': 4
};

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, category, className }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = skillIcons[name] || skillIcons['Typescript'];
  const gradientColor = skillColorMap[category] || 'from-purple-500 to-blue-500';

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={cn(
        "relative min-h-[160px] perspective-1000",
        className
      )}
      onClick={toggleFlip}
    >
      <div className={cn(
        "absolute w-full h-full transition-all duration-500 transform-style-3d cursor-pointer",
        isFlipped ? "rotate-y-180" : ""
      )}>
        {/* Front of card */}
        <div className={cn(
          "absolute w-full h-full flex flex-col items-center justify-center backface-hidden rounded-lg p-6",
          "glass hover:border-primary/30 transition-all duration-300",
          "bg-gradient-to-br opacity-90 hover:opacity-100",
          gradientColor,
          "shadow-lg"
        )}>
          <Icon className="h-12 w-12 mb-4 text-white" />
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>

        {/* Back of card */}
        <div className={cn(
          "absolute w-full h-full flex flex-col items-center justify-center backface-hidden rounded-lg p-6",
          "glass rotate-y-180 bg-secondary",
          "border border-white/10"
        )}>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground mb-4">{category}</p>
          <div className="flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <span 
                key={i} 
                className={cn(
                  "h-2 w-6 rounded-full transition-all",
                  i < levelRating[level] ? "bg-primary" : "bg-muted"
                )}
              />
            ))}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
