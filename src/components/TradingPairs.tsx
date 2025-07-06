
import { useQuery } from "@tanstack/react-query";
import { ArrowUpIcon, ArrowDownIcon, Star } from "lucide-react";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

const fetchTradingPairs = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=8&page=1&sparkline=false&price_change_percentage=1h,24h,7d&x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch trading pairs');
  }
  
  return response.json();
};

const TradingPairs = () => {
  const { data: pairs, isLoading, error } = useQuery({
    queryKey: ['tradingPairs'],
    queryFn: fetchTradingPairs,
    refetchInterval: 10000,
  });

  if (isLoading) {
    return (
      <div className="glass-card p-6 rounded-lg animate-fade-in">
        <h2 className="text-xl font-semibold mb-6">Active Trading Pairs</h2>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
                <div className="space-y-1">
                  <div className="w-20 h-4 bg-secondary/20 rounded"></div>
                  <div className="w-16 h-3 bg-secondary/20 rounded"></div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="w-16 h-4 bg-secondary/20 rounded"></div>
                <div className="w-12 h-3 bg-secondary/20 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-6 rounded-lg animate-fade-in">
        <h2 className="text-xl font-semibold mb-6">Active Trading Pairs</h2>
        <div className="text-center py-8">
          <span className="text-red-500">Failed to load trading pairs</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 rounded-lg animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Active Trading Pairs</h2>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {pairs?.map((pair: any) => (
          <div key={pair.id} className="flex items-center justify-between p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <img 
                src={pair.image} 
                alt={pair.name} 
                className="w-8 h-8 rounded-full flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate">{pair.symbol.toUpperCase()}/USD</p>
                  <Star className="w-3 h-3 text-muted-foreground hover:text-yellow-500 cursor-pointer flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground truncate">Vol: ${(pair.total_volume / 1e9).toFixed(2)}B</p>
              </div>
            </div>
            
            <div className="text-right min-w-[140px] flex flex-col items-end space-y-2">
              <p className="font-medium">${pair.current_price.toLocaleString()}</p>
              <div className="flex items-center gap-2">
                {pair.price_change_percentage_24h >= 0 ? (
                  <ArrowUpIcon className="w-3 h-3 text-success flex-shrink-0" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3 text-red-500 flex-shrink-0" />
                )}
                <span className={`text-sm ${pair.price_change_percentage_24h >= 0 ? 'text-success' : 'text-red-500'}`}>
                  <span className="md:hidden">
                    {Math.abs(pair.price_change_percentage_24h).toFixed(2)}%
                  </span>
                  <span className="hidden md:inline">
                    ${Math.abs(pair.current_price * pair.price_change_percentage_24h / 100).toFixed(2)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingPairs;
