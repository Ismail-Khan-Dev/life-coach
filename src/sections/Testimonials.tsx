import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'Marketing Director',
    image: '/testimonial-1.jpg',
    rating: 5,
    text: 'Working with Sarah completely changed my perspective. I went from feeling stuck in my career to having complete clarity on my path forward. Within three months, I had not only landed my dream role but also found a better balance in my personal life. The investment in coaching paid for itself many times over.'
  },
  {
    name: 'James Chen',
    title: 'Tech Entrepreneur',
    image: '/testimonial-2.jpg',
    rating: 5,
    text: 'The breakthroughs I\'ve had in just three months have been more impactful than years of self-help books. Sarah has this incredible ability to ask the right questions at the right time. My business has grown 40% since we started working together, but more importantly, I\'m happier than I\'ve ever been.'
  },
  {
    name: 'Emma Rodriguez',
    title: 'Healthcare Professional',
    image: '/testimonial-3.jpg',
    rating: 5,
    text: 'I was skeptical at first, but the personalized approach and genuine care made all the difference. Sarah didn\'t just help me set goals—she helped me understand why I kept getting in my own way. I finally feel like I\'m living my purpose, not just going through the motions.'
  },
  {
    name: 'Michael Foster',
    title: 'Finance Executive',
    image: '/testimonial-4.jpg',
    rating: 5,
    text: 'The accountability and support helped me achieve goals I\'d been putting off for years. Sarah\'s coaching style is both challenging and compassionate. She pushes you to be your best while creating a safe space to be vulnerable. Worth every penny and then some.'
  }
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9faf7] via-white to-[#f9faf7] pointer-events-none" />

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
              Testimonials
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
              What Clients Say
            </h2>
            <p 
              className={`text-lg text-gray-600 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              Real stories from people who've experienced real transformation.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            {/* Main testimonial */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative">
                {/* Quote icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 bg-[#d6e9b8] rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <div className="pt-4">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-800 leading-relaxed mb-8 transition-all duration-300">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[activeIndex].image}
                      alt={testimonials[activeIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-gray-500">{testimonials[activeIndex].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#d6e9b8] transition-colors duration-300"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-[#d6e9b8] w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#d6e9b8] transition-colors duration-300"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Side testimonials (desktop) */}
            <div className="hidden xl:block absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
              <div className="max-w-6xl mx-auto relative">
                {/* Left card */}
                <div 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-64 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform -translate-x-1/2 opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">
                        {testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length].name}
                      </p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right card */}
                <div 
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-64 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform translate-x-1/2 opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonials[(activeIndex + 1) % testimonials.length].image}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">
                        {testimonials[(activeIndex + 1) % testimonials.length].name}
                      </p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div 
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            {[
              { value: '200+', label: 'Clients Transformed' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '94%', label: 'Success Rate' },
              { value: '10+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-black mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
