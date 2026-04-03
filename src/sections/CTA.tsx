import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const benefits = [
  'Clarity on your goals and direction',
  'Identify what\'s holding you back',
  'Personalized action plan',
  'No obligation, just value'
];

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
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

  const handleBookCall = () => {
    setShowDialog(true);
  };

  return (
    <section 
      ref={sectionRef}
      id="cta"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d6e9b8] via-[#e8f0d8] to-[#f2f2f2]" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-30 animate-float"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 animate-float"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
            animationDelay: '3s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-25 animate-float"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, transparent 70%)',
            animationDelay: '1.5s'
          }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Sparkle icon */}
            <div 
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: '100ms', transitionTimingFunction: 'var(--ease-elastic)' }}
            >
              <Sparkles className="w-8 h-8 text-[#7a9b5a]" />
            </div>

            {/* Headline */}
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: '200ms', 
                transitionTimingFunction: 'var(--ease-expo-out)',
                fontFamily: "'Roboto Slab', serif"
              }}
            >
              Ready to Transform Your Life?
            </h2>

            {/* Subheadline */}
            <p 
              className={`text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto mb-10 transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms', transitionTimingFunction: 'var(--ease-smooth)' }}
            >
              Book your free discovery call and take the first step toward the life you deserve. 
              <span className="font-semibold text-black"> 30 minutes could change everything.</span>
            </p>

            {/* Benefits */}
            <div 
              className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <Check className="w-4 h-4 text-[#7a9b5a]" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div 
              className={`mb-8 transition-all duration-600 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '500ms', transitionTimingFunction: 'var(--ease-elastic)' }}
            >
              <button 
                onClick={handleBookCall}
                className="inline-flex items-center justify-center px-10 py-5 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-xl group animate-pulse-glow"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Your Free Call
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicators */}
            <div 
              className={`flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms', transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>30 minutes</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#7a9b5a]" />
                <span>No commitment required</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2 hidden sm:flex">
                <Check className="w-4 h-4 text-[#7a9b5a]" />
                <span>100% confidential</span>
              </div>
            </div>

            {/* Urgency note */}
            <p 
              className={`mt-8 text-sm text-gray-500 transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              Limited spots available each month. Book now to secure your preferred time.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" style={{ fontFamily: "'Roboto Slab', serif" }}>
              Book Your Free Discovery Call
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Fill out the form below and I'll get back to you within 24 hours to schedule our call.
            </DialogDescription>
          </DialogHeader>
          
          <form className="space-y-4 mt-4" onSubmit={(e) => {
            e.preventDefault();
            setShowDialog(false);
            alert('Thank you! I\'ll be in touch within 24 hours to schedule your call.');
          }}>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d6e9b8] focus:ring-2 focus:ring-[#d6e9b8]/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address *</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d6e9b8] focus:ring-2 focus:ring-[#d6e9b8]/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input 
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d6e9b8] focus:ring-2 focus:ring-[#d6e9b8]/20 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">What are you hoping to achieve? *</label>
              <textarea 
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#d6e9b8] focus:ring-2 focus:ring-[#d6e9b8]/20 outline-none transition-all resize-none"
                placeholder="Tell me a bit about your goals and challenges..."
              />
            </div>
            <Button 
              type="submit"
              className="w-full py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Request My Free Call
            </Button>
            <p className="text-xs text-gray-500 text-center">
              Your information is 100% confidential and will never be shared.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
