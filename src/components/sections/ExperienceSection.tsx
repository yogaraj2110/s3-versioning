
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Calendar, 
  Cloud, 
  Code, 
  Database, 
  Layout, 
  Server
} from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: '2021 - Present',
    role: 'Senior Software Developer',
    company: 'ThinkInfinity Consultancy and Solutions',
    description: 'Leading development of enterprise-level applications with a focus on scalability and performance.',
    achievements: [
      {
        icon: Code,
        title: 'Full Stack Development',
        description: 'Developed and maintained multiple enterprise-level applications using React, Next.js, and Node.js.',
      },
      {
        icon: Cloud,
        title: 'Cloud Integration',
        description: 'Implemented AWS (EC2 & S3) for reliable cloud-based deployments and storage solutions.',
      },
      {
        icon: Server,
        title: 'API Architecture',
        description: 'Designed and built RESTful APIs for efficient data processing and system communications.',
      },
      {
        icon: Layout,
        title: 'UI/UX Enhancement',
        description: 'Improved user interfaces for better accessibility and user experience across web applications.',
      },
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'AWS', 'MongoDB', 'TypeScript'],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedCard animation="fade-in">
          <h2 className="section-title">Work Experience</h2>
        </AnimatedCard>
        
        <div className="mt-12">
          {experiences.map((experience, index) => (
            <AnimatedCard 
              key={index}
              animation="slide-in-bottom"
              delay={200}
              className="relative"
            >
              <div className="relative pl-0 md:pl-8 mb-8">
                {/* Timeline line (visible on md screens and up) */}
                <div className="hidden md:block absolute top-0 bottom-0 left-0 w-0.5 bg-primary/30" />
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute -left-3 top-0 items-center justify-center w-6 h-6 rounded-full bg-primary">
                  <Briefcase className="h-3 w-3 text-primary-foreground" />
                </div>
                
                {/* Timeline content */}
                <div className="glass rounded-lg p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{experience.role}</h3>
                      <div className="text-lg text-muted-foreground">{experience.company}</div>
                    </div>
                    <div className="flex items-center bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">{experience.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{experience.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {experience.achievements.map((achievement, i) => {
                      const Icon = achievement.icon;
                      
                      return (
                        <div 
                          key={i}
                          className="flex bg-secondary/50 p-4 rounded-lg border border-white/5"
                        >
                          <div className="mr-4 mt-1">
                            <div className="rounded-full bg-primary/10 w-8 h-8 flex items-center justify-center">
                              <Icon className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-base font-medium mb-1">{achievement.title}</h4>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-secondary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
