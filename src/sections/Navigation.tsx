import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Process', id: 'process' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-padding">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold"
              style={{ fontFamily: "'Roboto Slab', serif" }}
            >
              <span className={isScrolled ? 'text-black' : 'text-black'}>
                Sarah Mitchell
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#7a9b5a] ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('cta')}
                className="btn-primary text-sm py-3 px-6"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Call
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="section-padding py-6">
            <div className="space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left py-3 text-gray-700 font-medium hover:text-[#7a9b5a] transition-colors border-b border-gray-100"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('cta')}
                className="btn-primary w-full justify-center mt-4"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Your Free Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Mobile CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-500 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <div className="bg-white border-t border-gray-200 p-4 shadow-lg">
          <button 
            onClick={() => scrollToSection('cta')}
            className="btn-primary w-full justify-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Your Free Strategy Call
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
