import { useEffect, useRef, useState } from 'react';
import { Phone, Map, Heart, Trophy, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    description: 'We start with a free 30-minute conversation to understand your goals, challenges, and determine if we\'re the right fit for each other.',
    details: ['Identify your core challenges', 'Clarify your vision for the future', 'Discuss coaching approach and fit'],
    color: '#d6e9b8'
  },
  {
    number: '02',
    icon: Map,
    title: 'Custom Roadmap',
    description: 'Together, we create a personalized action plan tailored to your unique situation, goals, and lifestyle.',
    details: ['Define clear, achievable milestones', 'Establish accountability systems', 'Create sustainable habits'],
    color: '#c3dea5'
  },
  {
    number: '03',
    icon: Heart,
    title: 'Ongoing Support',
    description: 'Regular sessions, check-ins, and resources to keep you motivated, on track, and continuously growing.',
    details: ['Weekly or bi-weekly coaching sessions', 'Unlimited email support', 'Access to exclusive resources'],
    color: '#b0d392'
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Transformation',
    description: 'Celebrate your progress and cement new habits that last a lifetime. Become the person you were meant to be.',
    details: ['Measure and celebrate wins', 'Integrate new behaviors', 'Maintain long-term success'],
    color: '#9dc77f'
  }
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="process"
      className="relative w-full py-24 lg:py-32 bg-[#f9faf7]"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span 
              className={`eyebrow inline-block mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              The Process
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
              How It Works
            </h2>
            <p 
              className={`text-lg text-gray-600 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              A proven framework that guides you from where you are to where you want to be. 
              Simple, clear, and designed for results.
            </p>
          </div>

          {/* Process Steps - Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Progress line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-[#d6e9b8] rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>

              {/* Steps */}
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ 
                      transitionDelay: `${300 + index * 150}ms`, 
                      transitionTimingFunction: 'var(--ease-expo-out)'
                    }}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step indicator */}
                    <div 
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 ${
                        activeStep >= index ? 'bg-[#d6e9b8] scale-110' : 'bg-white border-2 border-gray-200'
                      }`}
                    >
                      <span className={`font-bold ${activeStep >= index ? 'text-black' : 'text-gray-400'}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`text-center transition-all duration-300 ${activeStep === index ? 'opacity-100' : 'opacity-60'}`}>
                      <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-7 h-7 text-[#7a9b5a]" />
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Roboto Slab', serif" }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <Check className="w-4 h-4 text-[#d6e9b8]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps - Mobile */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`, 
                  transitionTimingFunction: 'var(--ease-expo-out)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#d6e9b8] flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className="w-5 h-5 text-[#7a9b5a]" />
                      <h3 className="text-lg font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      {step.description}
                    </p>
                    <ul className="space-y-1">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <Check className="w-3 h-3 text-[#d6e9b8]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className={`mt-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <p className="text-gray-600 mb-4">
              Ready to take the first step?
            </p>
            <a 
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
