import { Linkedin, Instagram } from 'lucide-react';
import xaltLogo from '@/assets/xalt-logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={xaltLogo} alt="Xalt Solution" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gradient">Xalt Solution</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming businesses through cutting-edge AI automation solutions. 
              We empower companies to achieve unprecedented efficiency and growth with 
              intelligent process automation and AI integration.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/jawadahmad40/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-accent group-hover:text-gold-muted" />
              </a>
              <a 
                href="https://x.com/codewithJaykay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors group"
              >
                <svg className="h-5 w-5 text-accent group-hover:text-gold-muted" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/jawadtheaibuilder/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="h-5 w-5 text-accent group-hover:text-gold-muted" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Process Automation</li>
              <li>AI Consulting</li>
              <li>Chatbot Development</li>
              <li>Voice Agent Development</li>
              <li>AI Integration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-muted-foreground text-sm">
                © 2024 Xalt Solution. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:jawad@xaltsolution.com"
                className="text-muted-foreground hover:text-accent transition-colors text-sm"
              >
                jawad@xaltsolution.com
              </a>
              <button 
                onClick={() => window.open('https://calendly.com/ijawadahmad40/ai-automation-business-growth-strategy-call', '_blank')}
                className="text-accent hover:text-gold-muted transition-colors text-sm font-medium"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;