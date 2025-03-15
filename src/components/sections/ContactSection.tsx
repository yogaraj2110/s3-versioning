
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedCard from '@/components/ui/AnimatedCard';
import SocialIcons from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { SendIcon, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset submitted state after a while
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-30" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <AnimatedCard animation="fade-in">
          <h2 className="section-title">Get In Touch</h2>
        </AnimatedCard>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatedCard 
            animation="slide-in-left"
            delay={200}
            className="glass rounded-lg p-6 border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out if you're looking to collaborate on a project, have questions, or just want to connect.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">yogaraj@example.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground">Chennai, India</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-base font-medium mb-3">Connect with me</h4>
              <SocialIcons showLabels variant="outline" />
            </div>
          </AnimatedCard>
          
          <AnimatedCard 
            animation="slide-in-right"
            delay={300}
          >
            <form onSubmit={handleSubmit} className="glass rounded-lg p-6 border border-white/10">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-primary/50 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSubmitted}
                  className={cn(
                    "w-full mt-2 rounded-md bg-primary hover:bg-primary/90 text-white",
                    isSubmitted ? "bg-green-600 hover:bg-green-600" : "",
                    "relative overflow-hidden transition-all"
                  )}
                >
                  <span className={cn(
                    "flex items-center justify-center gap-2",
                    isSubmitting ? "invisible" : "",
                    isSubmitted ? "text-white" : ""
                  )}>
                    {isSubmitted ? (
                      <>
                        <Check size={18} />
                        Message Sent
                      </>
                    ) : (
                      <>
                        <SendIcon size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                  
                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
