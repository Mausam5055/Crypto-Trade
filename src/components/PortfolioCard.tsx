import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, AreaChart, Area } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

const fetchBitcoinPrices = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily&x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch Bitcoin prices');
  }
  
  const data = await response.json();
  
  return data.prices.map(([timestamp, price]: [number, number]) => ({
    date: new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    price: Math.round(price),
    volume: Math.round(Math.random() * 1000000000) // Simulated volume data
  }));
};

const fetchPortfolioStats = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd&include_24hr_change=true&x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch portfolio stats');
  }
  
  return response.json();
};

const PortfolioCard = () => {
  const { data: priceData, isLoading } = useQuery({
    queryKey: ['bitcoinPrices'],
    queryFn: fetchBitcoinPrices,
    refetchInterval: 30000,
  });

  const { data: portfolioStats } = useQuery({
    queryKey: ['portfolioStats'],
    queryFn: fetchPortfolioStats,
    refetchInterval: 15000,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="glass-card p-6 rounded-lg animate-fade-in">
          <h2 className="text-xl font-semibold mb-6">Portfolio Overview</h2>
          <div className="w-full h-[300px] flex items-center justify-center">
            <span className="text-muted-foreground">Loading portfolio data...</span>
          </div>
        </div>
      </div>
    );
  }

  const totalValue = 125000; // Simulated portfolio value
  const dayChange = 3250;
  const dayChangePercent = 2.67;

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="glass-card p-4 lg:p-6 rounded-lg animate-fade-in">
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <h2 className="text-lg lg:text-xl font-semibold">Portfolio Overview</h2>
          <DollarSign className="w-4 h-4 lg:w-5 lg:h-5 text-success" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
          <div className="text-left p-4 bg-secondary/10 rounded-lg">
            <p className="text-2xl lg:text-3xl font-bold text-success mb-2">${totalValue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Value</p>
          </div>
          
          <div className="text-left p-4 bg-secondary/10 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              {dayChange >= 0 ? (
                <TrendingUp className="w-4 h-4 text-success" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <p className={`text-xl lg:text-2xl font-bold ${dayChange >= 0 ? 'text-success' : 'text-red-500'}`}>
                ${Math.abs(dayChange).toLocaleString()}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">24h Change</p>
          </div>
        </div>

        <div className="w-full h-[200px] lg:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={priceData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8989DE" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8989DE" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#E6E4DD"
                fontSize={12}
                hide
              />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ 
                  background: '#3A3935',
                  border: '1px solid #605F5B',
                  borderRadius: '8px'
                }}
                labelStyle={{ color: '#E6E4DD' }}
                itemStyle={{ color: '#8989DE' }}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
              />
              <Area 
                type="monotone" 
                dataKey="price" 
                stroke="#8989DE" 
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Holdings Breakdown */}
      <div className="glass-card p-4 lg:p-6 rounded-lg animate-fade-in">
        <h3 className="text-base lg:text-lg font-semibold mb-4">Top Holdings</h3>
        <div className="space-y-3">
          {portfolioStats && Object.entries(portfolioStats).map(([coin, data]: [string, any]) => (
            <div key={coin} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-success to-primary rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{coin.slice(0, 2).toUpperCase()}</span>
                </div>
                <div>
                  <p className="font-medium capitalize">{coin}</p>
                  <p className="text-sm text-muted-foreground">${data.usd.toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right min-w-[100px] space-y-1">
                <p className="font-medium">2.5 {coin.slice(0, 3).toUpperCase()}</p>
                <p className={`text-sm ${data.usd_24h_change >= 0 ? 'text-success' : 'text-red-500'}`}>
                  <span className="md:hidden">
                    {data.usd_24h_change >= 0 ? '+' : ''}{data.usd_24h_change.toFixed(2)}%
                  </span>
                  <span className="hidden md:inline">
                    {data.usd_24h_change >= 0 ? '+' : ''}${(data.usd * data.usd_24h_change / 100).toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
