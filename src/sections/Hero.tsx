import { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden gradient-bg"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 animate-float"
          style={{ 
            background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full opacity-15 animate-float"
          style={{ 
            background: 'radial-gradient(circle, var(--brand-primary-dark) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full opacity-25 animate-float"
          style={{ 
            background: 'radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)',
            animationDelay: '4s'
          }}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className="w-full section-padding py-20 lg:py-0">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                {/* Eyebrow */}
                <div 
                  className={`transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
                >
                  <span className="eyebrow inline-flex items-center gap-2 mb-6">
                    <span className="w-8 h-[2px] bg-black"></span>
                    Transform Your Life
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                  <span 
                    className={`block transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ 
                      transitionDelay: '300ms', 
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      fontFamily: "'Roboto Slab', serif"
                    }}
                  >
                    Unlock Your
                  </span>
                  <span 
                    className={`block transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ 
                      transitionDelay: '450ms', 
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      fontFamily: "'Roboto Slab', serif"
                    }}
                  >
                    Full Potential
                  </span>
                </h1>

                {/* Subheadline */}
                <p 
                  className={`text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-smooth)' }}
                >
                  Discover clarity, confidence, and direction with personalized coaching 
                  that honors your unique journey.
                </p>

                {/* CTA Buttons */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-500 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-elastic)' }}
                >
                  <button 
                    onClick={() => scrollToSection('cta')}
                    className="btn-primary animate-pulse-glow group"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Free Strategy Call
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Trust Badge */}
                <div 
                  className={`flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-600 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: '1000ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Rated 4.9/5</span>
                  <span className="text-gray-400">|</span>
                  <span>200+ Clients Transformed</span>
                </div>
              </div>

              {/* Image */}
              <div 
                className={`order-1 lg:order-2 relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <div className="relative mx-auto max-w-md lg:max-w-lg">
                  {/* Decorative frame */}
                  <div 
                    className="absolute -inset-4 border-2 border-black/10 rounded-3xl transform rotate-3"
                    style={{ transitionDelay: '700ms' }}
                  />
                  <div 
                    className="absolute -inset-4 border-2 border-black/5 rounded-3xl transform -rotate-2"
                    style={{ transitionDelay: '800ms' }}
                  />
                  
                  {/* Main image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/hero-portrait.jpg" 
                      alt="Life Coach"
                      className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>

                  {/* Floating badge */}
                  <div 
                    className={`absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 transition-all duration-600 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '1200ms', transitionTimingFunction: 'var(--ease-bounce)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#d6e9b8] flex items-center justify-center">
                        <span className="text-2xl font-bold">10+</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Years Experience</p>
                        <p className="text-xs text-gray-500">Transforming Lives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
