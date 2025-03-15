
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  details,
  links,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "relative group rounded-lg overflow-hidden glass card-hover cursor-pointer transition-all duration-500",
          "border border-white/10",
          className
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="bg-primary/10 text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="bg-secondary text-xs">
                +{technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass border-white/10 bg-background/95 backdrop-blur-xl sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 rounded-md overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-primary/10">
                {tech}
              </Badge>
            ))}
          </div>

          {details && (
            <div className="mt-4 text-sm text-muted-foreground">
              <p>{details}</p>
            </div>
          )}

          {links && (
            <div className="flex items-center gap-4 mt-4">
              {links.github && (
                <a 
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              )}
              {links.demo && (
                <a 
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
