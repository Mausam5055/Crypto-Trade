
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export const Navigation = () => {
  const navigate = useNavigate();
  const { saveScrollPosition } = useScrollPosition('landing');

  const handleGetStarted = () => {
    saveScrollPosition();
    navigate('/dashboard');
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 glass-card rounded-full backdrop-blur-xl border border-white/20 px-2 sm:px-6 w-[90%] max-w-4xl group transition-all duration-700 ease-out hover:scale-x-110 hover:px-4 sm:hover:px-8">
      <div className="flex items-center justify-between px-2 sm:px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-success rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-background font-bold text-xs sm:text-sm">₿</span>
          </div>
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent">CryptoTrade</span>
        </div>
        
        <div className="flex items-center">
          <div className="hidden sm:flex items-center gap-0 group-hover:gap-8 transition-all duration-700 ease-out overflow-hidden">
            <a href="#features" className="text-muted-foreground hover:text-success transition-all duration-300 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">Features</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-success transition-all duration-300 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 delay-75">Testimonials</a>
            <a href="#contact" className="text-muted-foreground hover:text-success transition-all duration-300 text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 delay-150">Contact</a>
          </div>
          <div className="ml-2 sm:ml-6 transition-all duration-700 ease-out">
            <Button onClick={handleGetStarted} className="bg-success hover:bg-success/90 text-background px-3 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-all duration-300 hover:px-4 sm:hover:px-8 hover:shadow-lg hover:shadow-success/25">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
