
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';
import SkillCard from '@/components/ui/SkillCard';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    icon: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'react', level: 'Expert' },
      { name: 'Next.js', icon: 'next', level: 'Advanced' },
      { name: 'Angular', icon: 'angular', level: 'Intermediate' },
      { name: 'TypeScript', icon: 'typescript', level: 'Advanced' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'node', level: 'Expert' },
      { name: 'Express.js', icon: 'express', level: 'Advanced' },
      { name: 'MongoDB', icon: 'mongodb', level: 'Advanced' },
      { name: 'SQL', icon: 'sql', level: 'Intermediate' },
    ],
  },
  {
    name: 'Cloud',
    skills: [
      { name: 'AWS', icon: 'aws', level: 'Advanced' },
      { name: 'Docker', icon: 'docker', level: 'Intermediate' },
      { name: 'Nginx', icon: 'nginx', level: 'Intermediate' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: 'git', level: 'Expert' },
      { name: 'GitHub', icon: 'github', level: 'Advanced' },
      { name: 'Postman', icon: 'postman', level: 'Advanced' },
      { name: 'Jira', icon: 'jira', level: 'Intermediate' },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <AnimatedCard animation="fade-in">
          <h2 className="section-title">Technical Skills</h2>
        </AnimatedCard>
        
        <div className="mt-12 grid grid-cols-1 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <AnimatedCard 
                animation="slide-in-left"
                delay={200}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold inline-flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-3">
                    {categoryIndex + 1}
                  </span>
                  {category.name}
                </h3>
              </AnimatedCard>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <AnimatedCard 
                    key={skill.name}
                    animation="scale-in"
                    delay={300 + skillIndex * 100}
                  >
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      category={category.name as any}
                    />
                  </AnimatedCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
