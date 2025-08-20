import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroStars from '@/assets/hero-stars.jpg';
import xaltLogo from '@/assets/xalt-logo.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 stars-bg opacity-30"
        style={{
          backgroundImage: `url(${heroStars})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img 
            src={xaltLogo} 
            alt="Xalt Solution Logo" 
            className="h-20 w-auto mx-auto mb-6 animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in">
          Transform Your Business
          <br />
          <span className="text-gradient-gold">with AI Automation</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Unlock unprecedented efficiency and growth with our cutting-edge AI solutions. 
          From process automation to intelligent chatbots, we revolutionize how you work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <Button 
            size="lg"
            className="btn-hero group"
            onClick={() => window.open('https://calendly.com/ijawadahmad40/ai-automation-business-growth-strategy-call', '_blank')}
          >
            Get Started Today
            <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="btn-premium"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
        </div>
        
        <div className="mt-12 animate-pulse-slow">
          <p className="text-sm text-muted-foreground">
            Trusted by innovative businesses worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;