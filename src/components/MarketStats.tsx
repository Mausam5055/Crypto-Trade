
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

const fetchGlobalData = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch global market data');
  }
  
  const data = await response.json();
  return data.data;
};

const fetchBitcoinPrice = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Bitcoin price');
  }
  
  return response.json();
};

const MarketStats = () => {
  const { data: globalData, isLoading: globalLoading } = useQuery({
    queryKey: ['globalData'],
    queryFn: fetchGlobalData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const { data: bitcoinData, isLoading: bitcoinLoading } = useQuery({
    queryKey: ['bitcoinPrice'],
    queryFn: fetchBitcoinPrice,
    refetchInterval: 15000, // Refetch every 15 seconds
  });

  const isLoading = globalLoading || bitcoinLoading;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-6 rounded-lg animate-pulse">
            <div className="space-y-3">
              <div className="w-24 h-4 bg-secondary/20 rounded"></div>
              <div className="w-32 h-8 bg-secondary/20 rounded"></div>
              <div className="w-16 h-4 bg-secondary/20 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const formatCurrency = (value: number) => {
    if (value >= 1e12) {
      return `$${(value / 1e12).toFixed(2)}T`;
    }
    if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(1)}B`;
    }
    if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(1)}M`;
    }
    return `$${value.toLocaleString()}`;
  };

  const bitcoinPrice = bitcoinData?.bitcoin?.usd || 0;
  const bitcoinChange = bitcoinData?.bitcoin?.usd_24h_change || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 animate-fade-in">
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Bitcoin Price</h3>
          <TrendingUpIcon className={`w-4 h-4 ${bitcoinChange >= 0 ? 'text-success' : 'text-warning'}`} />
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-semibold">
            ${bitcoinPrice.toLocaleString()}
          </p>
          <div className={`flex items-center gap-2 ${
            bitcoinChange >= 0 ? 'text-success' : 'text-warning'
          }`}>
            {bitcoinChange >= 0 ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : (
              <ArrowDownIcon className="w-4 h-4" />
            )}
            <span className="text-sm">
              ${Math.abs(bitcoinChange * bitcoinPrice / 100).toFixed(0)}
            </span>
            <span className="text-sm md:hidden">
              ({Math.abs(bitcoinChange).toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">Market Cap</h3>
          <TrendingUpIcon className="w-4 h-4 text-success" />
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-semibold">
            {formatCurrency(globalData?.total_market_cap?.usd || 0)}
          </p>
          <div className={`flex items-center gap-2 ${
            (globalData?.market_cap_change_percentage_24h_usd || 0) >= 0 ? 'text-success' : 'text-warning'
          }`}>
            {(globalData?.market_cap_change_percentage_24h_usd || 0) >= 0 ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : (
              <ArrowDownIcon className="w-4 h-4" />
            )}
            <span className="text-sm">
              {formatCurrency(Math.abs((globalData?.total_market_cap?.usd || 0) * (globalData?.market_cap_change_percentage_24h_usd || 0) / 100))}
            </span>
            <span className="text-sm md:hidden">
              ({Math.abs(globalData?.market_cap_change_percentage_24h_usd || 0).toFixed(1)}%)
            </span>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">24h Volume</h3>
          <TrendingUpIcon className="w-4 h-4 text-success" />
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-semibold">
            {formatCurrency(globalData?.total_volume?.usd || 0)}
          </p>
          <div className="text-success flex items-center gap-2">
            <ArrowUpIcon className="w-4 h-4" />
            <span className="text-sm">Live Data</span>
          </div>
        </div>
      </div>
      
      <div className="glass-card p-6 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">BTC Dominance</h3>
          <TrendingUpIcon className="w-4 h-4 text-warning" />
        </div>
        <div className="space-y-3">
          <p className="text-2xl font-semibold">
            {(globalData?.market_cap_percentage?.btc || 0).toFixed(1)}%
          </p>
          <div className="text-muted-foreground flex items-center gap-2">
            <span className="text-sm">Market Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketStats;
