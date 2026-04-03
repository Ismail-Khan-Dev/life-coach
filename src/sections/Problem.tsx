import { useEffect, useRef, useState } from 'react';
import { Target, Compass, TrendingUp, AlertCircle } from 'lucide-react';

const painPoints = [
  {
    icon: Target,
    title: 'Feeling Stuck',
    description: 'You know you\'re capable of more, but something\'s holding you back from reaching your full potential.'
  },
  {
    icon: Compass,
    title: 'Lacking Direction',
    description: 'You\'re unsure which path to take, constantly second-guessing your decisions and future.'
  },
  {
    icon: TrendingUp,
    title: 'Hit a Ceiling',
    description: 'Your growth has plateaued, and you\'re struggling to break through to the next level.'
  },
  {
    icon: AlertCircle,
    title: 'Overwhelmed',
    description: 'Between work, family, and life demands, you\'ve lost sight of what truly matters to you.'
  }
];

const Problem = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="problem"
      className="relative w-full py-24 lg:py-32 bg-white"
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
              Does This Sound Familiar?
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
              You\'re Not Alone in This Journey
            </h2>
            <p 
              className={`text-lg text-gray-600 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              Countless high-achievers find themselves at a crossroads, feeling unfulfilled despite their success. 
              The good news? <span className="font-semibold text-black">This is exactly where transformation begins.</span>
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`group relative bg-[#f9faf7] rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:bg-[#d6e9b8]/20 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${300 + index * 100}ms`, 
                  transitionTimingFunction: 'var(--ease-expo-out)'
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#d6e9b8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="w-7 h-7 text-black" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Roboto Slab', serif" }}>
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#d6e9b8] rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

          {/* Empathy Statement */}
          <div 
            className={`mt-16 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <div className="inline-block bg-black text-white rounded-2xl px-8 py-6 max-w-2xl">
              <p className="text-lg lg:text-xl font-medium leading-relaxed">
                "I\'ve been where you are. I know what it feels like to have everything look perfect on the outside, 
                while feeling lost on the inside. That\'s why I do this work."
              </p>
              <p className="mt-4 text-[#d6e9b8] font-semibold">— Sarah Mitchell, Certified Life Coach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
