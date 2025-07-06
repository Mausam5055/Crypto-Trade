
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { TradingChart } from '@/components/TradingChart';

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 overflow-hidden">
      {/* Enhanced Background with Subtle Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
        <img 
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=1080&fit=crop&crop=center" 
          alt="Trading screens background"
          className="w-full h-full object-cover opacity-4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/95"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-success/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-accent/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Premium Status Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/8 to-secondary/4 backdrop-blur-xl rounded-full px-6 py-3 border border-success/10 shadow-lg animate-fade-in">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse shadow-sm shadow-success/50"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-sm shadow-primary/50" style={{animationDelay: '0.5s'}}></div>
              </div>
              <span className="text-sm text-muted-foreground font-medium tracking-wide">
                100% Free • Zero Fees • 500K+ Active Traders
              </span>
            </div>
            
            {/* Enhanced Hero Title */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block bg-gradient-to-r from-foreground via-foreground to-success bg-clip-text text-transparent mb-2">
                  Trade Crypto with
                </span>
                <span className="block text-success font-light relative">
                  Confidence
                  <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-success to-primary rounded-full"></div>
                </span>
              </h1>
            </div>
            
            {/* Enhanced Description */}
            <div className="space-y-4 animate-fade-in">
              <p className="text-xl sm:text-2xl lg:text-2xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                Experience the future of cryptocurrency trading with advanced analytics, 
                <span className="text-success font-medium"> real-time insights</span>, and 
                <span className="text-primary font-medium"> institutional-grade security</span>.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                  <span>Advanced Charting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Real-time Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span>Secure Trading</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button 
                onClick={handleGetStarted}
                size="lg"
                className="group bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success text-background px-10 py-6 text-xl font-semibold rounded-2xl transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-success/20 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Trading Free
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-success/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group px-10 py-6 text-xl font-semibold border-2 border-secondary/30 hover:border-success/30 hover:bg-secondary/10 rounded-2xl backdrop-blur-xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M9 16h6m-7 4h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Watch Demo
                </span>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 animate-fade-in">
              <div className="text-sm text-muted-foreground font-medium">Trusted by:</div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/5">
                  <div className="text-sm font-bold text-success">500K+</div>
                  <div className="text-xs text-muted-foreground">Traders</div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/5">
                  <div className="text-sm font-bold text-primary">$2.8B</div>
                  <div className="text-xs text-muted-foreground">Volume</div>
                </div>
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 backdrop-blur-xl px-4 py-2 rounded-xl border border-white/5">
                  <div className="text-sm font-bold text-accent">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Trading Chart */}
          <div className="order-first lg:order-last relative">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-success/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl"></div>
              
              {/* Chart Container */}
              <div className="relative bg-gradient-to-br from-secondary/5 to-secondary/10 backdrop-blur-xl rounded-3xl border border-white/10 p-4 shadow-2xl">
                <TradingChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
