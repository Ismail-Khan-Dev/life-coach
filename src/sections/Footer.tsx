import { useEffect, useRef, useState } from 'react';
import { Instagram, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={footerRef}
      className="relative w-full bg-black text-white py-16 lg:py-20"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            {/* Brand column */}
            <div 
              className={`lg:col-span-1 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Roboto Slab', serif" }}>
                Sarah Mitchell
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transforming lives through personalized coaching and proven methodologies. 
                Let's unlock your full potential together.
              </p>
              {/* Social links */}
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Linkedin, label: 'LinkedIn' },
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Youtube, label: 'YouTube' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${social.label} link coming soon!`);
                    }}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d6e9b8] hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <h4 className="font-semibold mb-4 text-[#d6e9b8]">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About', id: 'about' },
                  { label: 'Process', id: 'process' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Book a Call', id: 'cta' }
                ].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-[#d6e9b8] hover:translate-x-1 transition-all duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <h4 className="font-semibold mb-4 text-[#d6e9b8]">Services</h4>
              <ul className="space-y-3">
                {[
                  'One-on-One Coaching',
                  'Group Programs',
                  'Workshops & Events',
                  'Corporate Coaching',
                  'Online Courses'
                ].map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div 
              className={`transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <h4 className="font-semibold mb-4 text-[#d6e9b8]">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#d6e9b8] flex-shrink-0 mt-0.5" />
                  <a 
                    href="mailto:hello@sarahmitchell.coach"
                    className="text-gray-400 hover:text-[#d6e9b8] transition-colors text-sm"
                  >
                    hello@sarahmitchell.coach
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#d6e9b8] flex-shrink-0 mt-0.5" />
                  <a 
                    href="tel:+15551234567"
                    className="text-gray-400 hover:text-[#d6e9b8] transition-colors text-sm"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d6e9b8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">
                    123 Growth Street<br />
                    San Francisco, CA 94102
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p 
                className={`text-gray-500 text-sm transition-all duration-600 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                © {new Date().getFullYear()} Sarah Mitchell Coaching. All rights reserved.
              </p>

              {/* Legal links */}
              <div 
                className={`flex gap-6 transition-all duration-600 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                {['Privacy Policy', 'Terms of Service'].map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`${link} coming soon!`);
                    }}
                    className="text-gray-500 hover:text-[#d6e9b8] text-sm transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d6e9b8] hover:text-black transition-all duration-300"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
