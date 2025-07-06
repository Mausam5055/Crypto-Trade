
import { useEffect, useState } from 'react';

interface ChartData {
  time: string;
  price: number;
}

export const TradingChart = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [currentPrice, setCurrentPrice] = useState(45250);
  const [priceChange, setPriceChange] = useState(2.5);

  useEffect(() => {
    // Generate initial chart data
    const generateInitialData = () => {
      const data: ChartData[] = [];
      let basePrice = 45000;
      const now = new Date();
      
      for (let i = 29; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60000); // 1 minute intervals
        basePrice += (Math.random() - 0.5) * 1000; // Random price movement
        data.push({
          time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          price: Math.max(40000, Math.min(50000, basePrice)) // Keep price in range
        });
      }
      return data;
    };

    setChartData(generateInitialData());

    // Simulate real-time price updates
    const interval = setInterval(() => {
      const now = new Date();
      const newPrice = currentPrice + (Math.random() - 0.5) * 500;
      const boundedPrice = Math.max(40000, Math.min(50000, newPrice));
      
      setCurrentPrice(boundedPrice);
      setPriceChange((Math.random() - 0.5) * 5);
      
      setChartData(prev => {
        const newData = [...prev.slice(1), {
          time: now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }),
          price: boundedPrice
        }];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [currentPrice]);

  const maxPrice = Math.max(...chartData.map(d => d.price));
  const minPrice = Math.min(...chartData.map(d => d.price));
  const priceRange = maxPrice - minPrice || 1;

  const createPath = () => {
    if (chartData.length < 2) return '';
    
    const width = 400;
    const height = 200;
    const padding = 20;
    
    let path = '';
    
    chartData.forEach((point, index) => {
      const x = padding + (index / (chartData.length - 1)) * (width - 2 * padding);
      const y = padding + (1 - (point.price - minPrice) / priceRange) * (height - 2 * padding);
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    
    return path;
  };

  return (
    <div className="glass-card p-6 sm:p-8 rounded-3xl backdrop-blur-xl animate-fade-in">
      {/* Price Display */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg sm:text-xl font-bold text-muted-foreground">BTC/USD</h3>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="flex items-end gap-4">
          <span className="text-2xl sm:text-3xl font-bold">
            ${currentPrice.toLocaleString()}
          </span>
          <span className={`text-sm font-medium ${priceChange >= 0 ? 'text-success' : 'text-red-500'}`}>
            {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg 
          width="100%" 
          height="240" 
          viewBox="0 0 400 240"
          className="overflow-visible"
        >
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="24" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 24" fill="none" stroke="rgba(126, 191, 142, 0.1)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: 'rgba(126, 191, 142, 0.3)', stopOpacity: 1}} />
              <stop offset="100%" style={{stopColor: 'rgba(126, 191, 142, 0.05)', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Chart Area Fill */}
          {chartData.length > 1 && (
            <path
              d={`${createPath()} L 380 220 L 20 220 Z`}
              fill="url(#chartGradient)"
              className="animate-pulse-subtle"
            />
          )}
          
          {/* Chart Line */}
          {chartData.length > 1 && (
            <path
              d={createPath()}
              fill="none"
              stroke="#7EBF8E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-sm"
            />
          )}
          
          {/* Data Points */}
          {chartData.map((point, index) => {
            const x = 20 + (index / (chartData.length - 1)) * 360;
            const y = 20 + (1 - (point.price - minPrice) / priceRange) * 200;
            
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r={index === chartData.length - 1 ? "4" : "2"}
                fill="#7EBF8E"
                className={index === chartData.length - 1 ? "animate-pulse drop-shadow-lg" : "opacity-60"}
              />
            );
          })}
        </svg>
        
        {/* Floating Price Indicator */}
        <div className="absolute top-4 right-4 glass-card px-3 py-2 rounded-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">${currentPrice.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Chart Controls */}
      <div className="flex justify-center gap-2 mt-6">
        {['1H', '4H', '1D', '1W', '1M'].map((timeframe, index) => (
          <button
            key={timeframe}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 ${
              index === 2 
                ? 'bg-success text-background' 
                : 'bg-secondary/20 text-muted-foreground hover:bg-secondary/40'
            }`}
          >
            {timeframe}
          </button>
        ))}
      </div>

      {/* Trading Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-secondary/20">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">24h High</p>
          <p className="text-sm font-semibold">${(maxPrice).toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">24h Low</p>
          <p className="text-sm font-semibold">${(minPrice).toLocaleString()}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Volume</p>
          <p className="text-sm font-semibold">$2.1B</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
          <p className="text-sm font-semibold">$870B</p>
        </div>
      </div>
    </div>
  );
};
