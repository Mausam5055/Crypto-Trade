import { TrendingUp, Users, Shield } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import CryptoChart from '@/components/CryptoChart';
import CryptoList from '@/components/CryptoList';
import MarketStats from '@/components/MarketStats';
import PortfolioCard from '@/components/PortfolioCard';
import TradingPairs from '@/components/TradingPairs';
import OrderBook from '@/components/OrderBook';
import RecentTrades from '@/components/RecentTrades';

const Dashboard = () => {
  const { resetScrollPosition } = useScrollPosition('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    resetScrollPosition();
  }, [resetScrollPosition]);

  useEffect(() => {
    // Add a state entry for the dashboard page
    const currentPath = window.location.pathname;
    if (currentPath === '/dashboard') {
      window.history.replaceState({ page: 'dashboard' }, '', '/dashboard');
    }

    const handlePopState = (event: PopStateEvent) => {
      // Prevent the default back behavior and navigate to home page
      event.preventDefault();
      navigate('/', { replace: true });
    };

    // Listen for back button press
    window.addEventListener('popstate', handlePopState);

    // Cleanup event listener
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground p-3 sm:p-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="mb-8 sm:mb-12 relative">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-success/5 via-primary/5 to-warning/5 rounded-2xl sm:rounded-3xl blur-3xl -z-10"></div>
          
          <div className="relative bg-secondary/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/10">
            {/* Header Content */}
            <div className="flex flex-col space-y-6">
              {/* Main Title Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
                {/* Left Content - Title */}
                <div className="flex items-start gap-3 sm:gap-6 w-full sm:w-auto">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-success/30 flex-shrink-0">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-4 flex-1">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                      Trading <span className="font-medium bg-gradient-to-r from-success via-primary to-warning bg-clip-text text-transparent">Dashboard</span>
                    </h1>
                    <p className="text-sm sm:text-lg text-muted-foreground/80 font-light italic">
                      Real-time crypto trading and portfolio management
                      <span className="hidden sm:inline"> with institutional-grade tools</span>
                    </p>
                  </div>
                </div>
                
                {/* Right Stats - Desktop */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-6">
                  <div className="flex items-center gap-2 bg-success/10 backdrop-blur-sm px-3 xl:px-4 py-2 rounded-xl border border-success/20">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-success">Live Market</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 xl:px-4 py-2 rounded-xl border border-primary/20">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Active Traders</span>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-warning/10 backdrop-blur-sm px-3 xl:px-4 py-2 rounded-xl border border-warning/20">
                    <Shield className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium text-warning">Secure</span>
                  </div>
                </div>
              </div>
              
              {/* Mobile Stats */}
              <div className="flex lg:hidden items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center gap-2 bg-success/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-success/20">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-success">Live</span>
                </div>
                
                <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-primary">Active</span>
                </div>
                
                <div className="flex items-center gap-2 bg-warning/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-warning/20">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-warning" />
                  <span className="text-xs sm:text-sm font-medium text-warning">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <MarketStats />
        
        {/* Main Trading View */}
        <div className="grid lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Chart Section */}
          <div className="lg:col-span-3">
            <CryptoChart />
          </div>
          
          {/* Portfolio Section */}
          <div>
            <PortfolioCard />
          </div>
        </div>
        
        {/* Trading Data Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <TradingPairs />
          <OrderBook />
          <RecentTrades />
        </div>
        
        {/* Crypto List */}
        <CryptoList />
      </div>
    </div>
  );
};

export default Dashboard;
