
import { useQuery } from "@tanstack/react-query";
import { Clock, TrendingUp, Activity } from "lucide-react";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

// Simulated recent trades data
const generateRecentTrades = () => {
  const trades = [];
  const currentPrice = 95000;
  
  for (let i = 0; i < 25; i++) {
    const isUp = Math.random() > 0.5;
    const price = currentPrice + (Math.random() - 0.5) * 1000;
    const amount = Math.random() * 0.5 + 0.01;
    const time = new Date(Date.now() - i * 60000 * Math.random() * 10);
    
    trades.push({
      price,
      amount,
      time: time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      type: isUp ? 'buy' : 'sell'
    });
  }
  
  return trades;
};

const RecentTrades = () => {
  const { data: bitcoinPrice } = useQuery({
    queryKey: ['bitcoinPrice'],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&x_cg_demo_api_key=${API_KEY}`
      );
      const data = await response.json();
      return data.bitcoin.usd;
    },
    refetchInterval: 5000,
  });

  const trades = generateRecentTrades();

  return (
    <div className="glass-card p-3 sm:p-6 rounded-lg animate-fade-in h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-success/20 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Recent Trades</h2>
            <p className="text-sm sm:text-base text-muted-foreground hidden sm:block">Live market activity</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-success" />
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
        {/* Desktop Header */}
        <div className="hidden sm:grid grid-cols-4 gap-4 text-base text-muted-foreground border-b border-secondary/20 pb-2">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            Time
          </span>
          <span>Price (USD)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total</span>
        </div>
        
        {/* Mobile Header */}
        <div className="grid sm:hidden grid-cols-3 gap-2 text-sm text-muted-foreground border-b border-secondary/20 pb-2">
          <span>Time</span>
          <span>Price</span>
          <span className="text-right">Amount</span>
        </div>
        
        {/* Trades List */}
        <div className="space-y-1 flex-1 overflow-y-auto scrollbar-hide min-h-0 max-h-[400px] sm:max-h-[500px]">
          {trades.map((trade, index) => (
            <div key={index} className={`transition-all duration-200 hover:scale-[1.01] ${
              trade.type === 'buy' ? 'hover:bg-success/5' : 'hover:bg-red-500/5'
            }`}>
              {/* Desktop Layout */}
              <div className="hidden sm:grid grid-cols-4 gap-4 text-base py-3 px-3 rounded hover:bg-secondary/10">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {trade.time}
                </span>
                <span className={`font-semibold text-lg ${trade.type === 'buy' ? 'text-success' : 'text-red-500'}`}>
                  ${trade.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-right text-muted-foreground text-base">{trade.amount.toFixed(4)}</span>
                <span className="text-right font-semibold text-base">${(trade.price * trade.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              </div>
              
              {/* Mobile Layout */}
              <div className="sm:hidden bg-secondary/5 rounded-lg p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <span className="text-muted-foreground font-medium">{trade.time.slice(0, 5)}</span>
                  <span className={`font-bold text-base ${trade.type === 'buy' ? 'text-success' : 'text-red-500'}`}>
                    ${trade.price.toFixed(0)}
                  </span>
                  <span className="text-right text-muted-foreground font-medium">{trade.amount.toFixed(3)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                    trade.type === 'buy' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-red-500/20 text-red-500'
                  }`}>
                    {trade.type.toUpperCase()}
                  </span>
                  <span className="text-base font-bold">
                    ${(trade.price * trade.amount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTrades;
