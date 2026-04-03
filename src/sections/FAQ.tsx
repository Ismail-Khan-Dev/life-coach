import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Clock, DollarSign, HelpCircle, Calendar } from 'lucide-react';

const faqs = [
  {
    icon: Clock,
    question: 'How much time do I need to commit?',
    answer: 'Most clients find that 2-3 hours per month is sufficient for meaningful progress. This includes our coaching sessions (typically 60 minutes each) and any reflection exercises or action steps. The beauty of coaching is that it\'s designed to fit into your busy life, not add to your stress. We\'ll work together to find a schedule that works for you.',
    category: 'Time'
  },
  {
    icon: DollarSign,
    question: 'What is the investment for coaching?',
    answer: 'I offer several packages to fit different needs and budgets. Individual sessions start at $200, with monthly packages offering better value. During our free discovery call, we\'ll discuss your goals and I\'ll recommend the best option for you. Think of it as an investment in yourself—the returns in clarity, confidence, and achievement far outweigh the cost.',
    category: 'Investment'
  },
  {
    icon: HelpCircle,
    question: 'How do I know if coaching is right for me?',
    answer: 'Coaching is perfect for you if you\'re feeling stuck, have big goals but aren\'t sure how to achieve them, or want to accelerate your personal or professional growth. If you\'re open to self-reflection, willing to take action, and ready for change, coaching can be transformative. The free discovery call is the best way to determine if we\'re a good fit.',
    category: 'Fit'
  },
  {
    icon: Calendar,
    question: 'How long does the coaching process take?',
    answer: 'While you\'ll likely experience insights and shifts from our very first session, most clients work with me for 3-6 months to see significant, lasting transformation. This allows time to identify patterns, implement new strategies, and solidify lasting change. Some clients continue for ongoing support, while others return for periodic "tune-ups."',
    category: 'Duration'
  },
  {
    icon: HelpCircle,
    question: 'What happens in a typical coaching session?',
    answer: 'Each session is tailored to your needs, but typically we\'ll start with a check-in on your progress, dive into current challenges or opportunities, and work through proven exercises and conversations to gain clarity and create action steps. I use a combination of powerful questioning, reflective listening, and strategic frameworks to help you uncover insights and move forward.',
    category: 'Process'
  },
  {
    icon: DollarSign,
    question: 'Do you offer a guarantee?',
    answer: 'While I can\'t guarantee specific outcomes (that depends on your commitment and action), I do guarantee my full dedication to your success. If after our first session you don\'t feel coaching is right for you, I\'ll refund your investment. My success is measured by your transformation, and I stand behind the value of my work.',
    category: 'Guarantee'
  }
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="faq"
      className="relative w-full py-24 lg:py-32 bg-[#f9faf7]"
    >
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span 
              className={`eyebrow inline-block mb-4 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              Common Questions
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
              Got Questions? I've Got Answers
            </h2>
            <p 
              className={`text-lg text-gray-600 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              Here are the most common questions I receive. Don't see yours? 
              <a href="#cta" onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
              }} className="text-[#7a9b5a] font-semibold hover:underline ml-1">
                Let's talk.
              </a>
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${openIndex === index ? 'shadow-lg' : ''}`}
                style={{ 
                  transitionDelay: `${300 + index * 80}ms`, 
                  transitionTimingFunction: 'var(--ease-expo-out)'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    openIndex === index ? 'bg-[#d6e9b8]' : 'bg-gray-100'
                  }`}>
                    <faq.icon className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-black' : 'text-gray-500'
                    }`} />
                  </div>
                  <span className="flex-grow font-semibold text-lg pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-smooth)' }}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className={`mt-12 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
          >
            <div className="bg-black text-white rounded-2xl p-8 inline-block max-w-lg">
              <p className="text-lg mb-4">Still have questions?</p>
              <p className="text-gray-400 mb-6">
                Let's chat. I'd love to hear about your goals and answer any questions you have.
              </p>
              <a 
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#d6e9b8] text-black font-medium rounded-full hover:bg-[#c3dea5] transition-colors duration-300"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
