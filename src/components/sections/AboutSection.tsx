
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Heart, Coffee, Code, Rocket } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Frontend Developer',
    description: 'Specializing in React.js, Next.js, and modern JavaScript frameworks to build responsive, interactive user interfaces.'
  },
  {
    icon: Rocket,
    title: 'Backend Expert',
    description: 'Proficient in building robust APIs and server-side applications using Node.js, Express, and cloud services.'
  },
  {
    icon: Coffee,
    title: 'Database Design',
    description: 'Experienced in designing and optimizing databases with MongoDB and SQL for efficient data management.'
  },
  {
    icon: Heart,
    title: 'Clean Code Advocate',
    description: 'Passionate about writing maintainable, scalable code following best practices and design patterns.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <AnimatedCard animation="fade-in">
          <h2 className="section-title">About Me</h2>
        </AnimatedCard>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedCard 
            className="glass rounded-lg p-6 md:p-8"
            animation="slide-in-left"
            delay={200}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Yogaraj A, a passionate software developer with expertise in building modern web applications. I specialize in React.js, Next.js, Node.js, and AWS cloud services.
              </p>
              <p>
                With a focus on creating scalable and high-performance applications, I combine technical excellence with a user-centered approach to deliver exceptional digital experiences.
              </p>
              <p>
                I enjoy tackling complex problems and continuously learning new technologies to stay at the forefront of web development.
              </p>
            </div>
          </AnimatedCard>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <AnimatedCard 
                  key={feature.title}
                  animation="fade-in"
                  delay={300 + index * 100}
                  className={cn(
                    "glass rounded-lg p-6 flex flex-col h-full",
                    "border border-white/10 hover:border-primary/30 transition-colors"
                  )}
                >
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
