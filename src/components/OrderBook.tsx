
import { useQuery } from "@tanstack/react-query";
import { Activity, TrendingUp, TrendingDown } from "lucide-react";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

// Simulated order book data since CoinGecko doesn't provide order book data
const generateOrderBookData = () => {
  const currentPrice = 95000;
  const orders = [];
  
  // Generate sell orders (asks)
  for (let i = 0; i < 12; i++) {
    orders.push({
      price: currentPrice + (i + 1) * 50 + Math.random() * 100,
      amount: Math.random() * 2 + 0.1,
      total: 0,
      type: 'sell'
    });
  }
  
  // Generate buy orders (bids)
  for (let i = 0; i < 12; i++) {
    orders.push({
      price: currentPrice - (i + 1) * 50 - Math.random() * 100,
      amount: Math.random() * 2 + 0.1,
      total: 0,
      type: 'buy'
    });
  }
  
  return orders;
};

const OrderBook = () => {
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

  const orderBookData = generateOrderBookData();
  const sellOrders = orderBookData.filter(order => order.type === 'sell').slice(0, 10);
  const buyOrders = orderBookData.filter(order => order.type === 'buy').slice(0, 10);

  return (
    <div className="glass-card p-3 sm:p-6 rounded-lg animate-fade-in h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Order Book</h2>
            <p className="text-sm sm:text-base text-muted-foreground hidden sm:block">Live buy/sell orders</p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
          <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
        </div>
      </div>
      
      <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col">
        {/* Desktop Header */}
        <div className="hidden sm:grid grid-cols-3 gap-4 text-base text-muted-foreground border-b border-secondary/20 pb-2">
          <span>Price (USD)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total</span>
        </div>
        
        {/* Mobile Header */}
        <div className="grid sm:hidden grid-cols-3 gap-2 text-sm text-muted-foreground border-b border-secondary/20 pb-2">
          <span>Price</span>
          <span className="text-center">Size</span>
          <span className="text-right">Total</span>
        </div>
        
        <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 max-h-[400px] sm:max-h-[500px]">
          {/* Sell Orders Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-red-500" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">Sell Orders</span>
            </div>
            {sellOrders.map((order, index) => (
              <div key={`sell-${index}`} className="transition-all duration-200 hover:scale-[1.01]">
                {/* Desktop Layout */}
                <div className="hidden sm:grid grid-cols-3 gap-4 text-base py-2 px-3 hover:bg-red-500/10 rounded">
                  <span className="text-red-500 font-bold text-lg">${order.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className="text-right text-muted-foreground font-medium">{order.amount.toFixed(4)}</span>
                  <span className="text-right text-muted-foreground font-medium">${(order.price * order.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                
                {/* Mobile Layout */}
                <div className="sm:hidden grid grid-cols-3 gap-2 text-sm py-3 px-3 hover:bg-red-500/10 rounded">
                  <span className="text-red-500 font-bold text-base">${order.price.toFixed(0)}</span>
                  <span className="text-center text-muted-foreground font-medium">{order.amount.toFixed(3)}</span>
                  <span className="text-right text-muted-foreground font-medium">${(order.price * order.amount).toFixed(0)}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Current Price Section */}
          <div className="flex items-center justify-center py-4 sm:py-5 bg-gradient-to-r from-success/10 via-primary/10 to-warning/10 rounded-lg border border-success/20">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-success mb-1">
                ${bitcoinPrice?.toLocaleString() || '95,000'}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">Current Price</div>
            </div>
          </div>
          
          {/* Buy Orders Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-success" />
              <span className="text-sm sm:text-base text-muted-foreground font-medium">Buy Orders</span>
            </div>
            {buyOrders.map((order, index) => (
              <div key={`buy-${index}`} className="transition-all duration-200 hover:scale-[1.01]">
                {/* Desktop Layout */}
                <div className="hidden sm:grid grid-cols-3 gap-4 text-base py-2 px-3 hover:bg-success/10 rounded">
                  <span className="text-success font-bold text-lg">${order.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  <span className="text-right text-muted-foreground font-medium">{order.amount.toFixed(4)}</span>
                  <span className="text-right text-muted-foreground font-medium">${(order.price * order.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                
                {/* Mobile Layout */}
                <div className="sm:hidden grid grid-cols-3 gap-2 text-sm py-3 px-3 hover:bg-success/10 rounded">
                  <span className="text-success font-bold text-base">${order.price.toFixed(0)}</span>
                  <span className="text-center text-muted-foreground font-medium">{order.amount.toFixed(3)}</span>
                  <span className="text-right text-muted-foreground font-medium">${(order.price * order.amount).toFixed(0)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
