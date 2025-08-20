import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import xaltLogo from '@/assets/xalt-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={xaltLogo} alt="Xalt Solution" className="h-8 w-auto" />
          <span className="text-xl font-bold text-gradient">Xalt Solution</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-accent transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-accent transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-accent transition-colors">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('blog')} className="text-foreground hover:text-accent transition-colors">
            Blog
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-accent transition-colors">
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block text-foreground hover:text-accent transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-foreground hover:text-accent transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-foreground hover:text-accent transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block text-foreground hover:text-accent transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block text-foreground hover:text-accent transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('blog')} className="block text-foreground hover:text-accent transition-colors">
                Blog
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-foreground hover:text-accent transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;