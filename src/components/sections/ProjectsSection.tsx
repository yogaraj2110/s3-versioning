
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';
import ProjectCard from '@/components/ui/ProjectCard';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  details: string;
  category: 'Web App' | 'E-commerce' | 'CMS' | 'API';
  links?: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Order Management System',
    description: 'A comprehensive system for tracking and managing customer orders from placement to delivery.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS'],
    details: 'Developed a full-stack order management application for a retail company. The system includes inventory management, order processing, and delivery tracking with real-time updates.',
    category: 'Web App',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    title: 'E-commerce Platform',
    description: 'A feature-rich online store with product catalog, cart, and secure checkout functionality.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Vercel'],
    details: 'Built a modern e-commerce platform with seamless product browsing, search functionality, and secure payment processing using Stripe integration.',
    category: 'E-commerce',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    title: 'Content Management System',
    description: 'A custom CMS designed for content creators to manage and publish digital content.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
    details: 'Designed and implemented a content management system allowing users to create, edit, and publish content with role-based access control and workflow management.',
    category: 'CMS',
    links: {
      demo: 'https://example.com',
      github: 'https://github.com',
    },
  },
  {
    title: 'API Gateway Service',
    description: 'A centralized API gateway for managing microservice communications and authentication.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker', 'AWS'],
    details: 'Developed an API gateway service that handles routing, authentication, request validation, and rate limiting for a microservice architecture.',
    category: 'API',
    links: {
      github: 'https://github.com',
    },
  },
];

const categories = ['All', 'Web App', 'E-commerce', 'CMS', 'API'];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedCard animation="fade-in">
          <h2 className="section-title">Projects & Portfolio</h2>
        </AnimatedCard>
        
        <AnimatedCard 
          animation="slide-in-bottom"
          delay={200}
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className={cn(
                "rounded-full text-sm",
                activeCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-white/10 hover:border-primary/30"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </AnimatedCard>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimatedCard 
              key={project.title}
              animation="scale-in"
              delay={300 + index * 100}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                details={project.details}
                links={project.links}
              />
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
