
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const CTASection = () => {
  const navigate = useNavigate();
  const { saveScrollPosition } = useScrollPosition('landing');

  const handleGetStarted = () => {
    saveScrollPosition();
    navigate('/dashboard');
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card p-8 sm:p-12 rounded-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=400&fit=crop&crop=center" 
              alt="Trading setup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to start trading for free?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Join thousands of traders who have already discovered the power of our completely free platform.
            </p>
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="bg-success hover:bg-success/90 text-background px-6 sm:px-8 py-3 sm:py-4 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Start Trading Free →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
