import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Users, TrendingUp, ArrowRight } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Certified Life Coach', value: 'ICF Accredited' },
  { icon: BookOpen, label: 'Training Hours', value: '500+' },
  { icon: Users, label: 'Clients Helped', value: '200+' },
  { icon: TrendingUp, label: 'Success Rate', value: '94%' }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-[#d6e9b8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#d6e9b8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <div className="relative">
                {/* Frame decoration */}
                <div className="absolute -inset-4 border-2 border-[#d6e9b8] rounded-3xl transform rotate-2" />
                <div className="absolute -inset-4 border-2 border-black/5 rounded-3xl transform -rotate-1" />
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    src="/about-portrait.jpg" 
                    alt="Sarah Mitchell - Life Coach"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating stats card */}
                <div 
                  className={`absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 transition-all duration-600 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-bounce)' }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {credentials.slice(0, 2).map((cred, i) => (
                      <div key={i} className="text-center">
                        <cred.icon className="w-6 h-6 mx-auto mb-1 text-[#d6e9b8]" />
                        <p className="text-lg font-bold">{cred.value}</p>
                        <p className="text-xs text-gray-500">{cred.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span 
                className={`eyebrow inline-block mb-4 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                About Me
              </span>

              <h2 
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: '400ms', 
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  fontFamily: "'Roboto Slab', serif"
                }}
              >
                Your Partner in Personal Growth
              </h2>

              <div 
                className={`space-y-4 text-gray-600 mb-8 transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-smooth)' }}
              >
                <p className="text-lg leading-relaxed">
                  Hi, I'm <span className="font-semibold text-black">Sarah Mitchell</span>. With over a decade of experience 
                  in transformational coaching, I've helped hundreds of individuals break through limitations and create 
                  lives they truly love.
                </p>
                <p className="leading-relaxed">
                  My journey into coaching began after my own experience of feeling stuck in a successful career that 
                  left me unfulfilled. Through years of training, certification, and personal growth, I developed a 
                  methodology that combines proven psychological frameworks with intuitive guidance.
                </p>
                <p className="leading-relaxed">
                  Today, I work with ambitious professionals, entrepreneurs, and leaders who are ready to stop settling 
                  and start living with purpose, clarity, and joy.
                </p>
              </div>

              {/* Credentials */}
              <div 
                className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                {credentials.map((cred, index) => (
                  <div 
                    key={index} 
                    className="text-center p-4 bg-[#f9faf7] rounded-xl hover:bg-[#d6e9b8]/20 transition-colors duration-300"
                  >
                    <cred.icon className="w-6 h-6 mx-auto mb-2 text-[#7a9b5a]" />
                    <p className="text-lg font-bold text-black">{cred.value}</p>
                    <p className="text-xs text-gray-500">{cred.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div 
                className={`transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '700ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <a 
                  href="#cta"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-black font-semibold group"
                >
                  Let's Talk About Your Goals
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
