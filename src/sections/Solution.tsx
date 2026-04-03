import { useEffect, useRef, useState } from 'react';
import { Sparkles, Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Sparkles,
    title: 'Clarity & Focus',
    description: 'Cut through the noise and discover what truly matters to you. Gain crystal-clear direction for your life and career.',
    outcome: 'Know exactly what you want and how to get there'
  },
  {
    icon: Heart,
    title: 'Confidence & Self-Worth',
    description: 'Break free from self-doubt and limiting beliefs. Build unshakeable confidence that radiates in every area of your life.',
    outcome: 'Show up authentically and command respect'
  },
  {
    icon: Lightbulb,
    title: 'Strategic Action',
    description: 'Transform insights into results with a personalized roadmap designed specifically for your goals and lifestyle.',
    outcome: 'Make consistent progress toward your dreams'
  },
  {
    icon: Users,
    title: 'Accountability & Support',
    description: 'Never feel alone on your journey. Receive ongoing guidance, encouragement, and accountability to keep you on track.',
    outcome: 'Stay motivated and overcome obstacles faster'
  }
];

const Solution = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="solution"
      className="relative w-full py-24 lg:py-32 bg-[#f9faf7]"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#d6e9b8]/10 to-transparent pointer-events-none" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span 
              className={`eyebrow inline-block mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              The Solution
            </span>
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: '100ms', 
                transitionTimingFunction: 'var(--ease-expo-out)',
                fontFamily: "'Roboto Slab', serif"
              }}
            >
              A Proven Framework for Lasting Transformation
            </h2>
            <p 
              className={`text-lg text-gray-600 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              My approach combines evidence-based methodologies with intuitive coaching to create 
              <span className="font-semibold text-black"> real, sustainable change</span> in your life.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`, 
                  transitionTimingFunction: 'var(--ease-expo-out)'
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#d6e9b8] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-xl font-bold pt-2" style={{ fontFamily: "'Roboto Slab', serif" }}>
                      {solution.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 flex-grow">
                    {solution.description}
                  </p>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-[#7a9b5a]">
                      Result: {solution.outcome}
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-[#d6e9b8]/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-[#d6e9b8]/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div 
            className={`text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <button 
              onClick={() => scrollToSection('cta')}
              className="btn-primary group"
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Join 200+ clients who have already transformed their lives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
