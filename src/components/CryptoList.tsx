
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const API_KEY = 'CG-GSxms5hVy46p1JE6cRZ3hAoZ';

const fetchCryptoData = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&x_cg_demo_api_key=${API_KEY}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch crypto data');
  }
  
  return response.json();
};

const CryptoList = () => {
  const { data: cryptos, isLoading, error } = useQuery({
    queryKey: ['cryptos'],
    queryFn: fetchCryptoData,
    refetchInterval: 15000, // Refetch every 15 seconds for real-time updates
  });

  if (isLoading) {
    return (
      <div className="glass-card rounded-lg p-6 animate-pulse">
        <h2 className="text-xl font-semibold mb-6">Top Cryptocurrencies</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-t border-secondary">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary/20 rounded-full"></div>
                <div className="space-y-1">
                  <div className="w-20 h-4 bg-secondary/20 rounded"></div>
                  <div className="w-12 h-3 bg-secondary/20 rounded"></div>
                </div>
              </div>
              <div className="w-16 h-4 bg-secondary/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Top Cryptocurrencies</h2>
        <div className="text-center py-8">
          <span className="text-red-500">Failed to load cryptocurrency data</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-lg p-6 animate-fade-in">
      <h2 className="text-xl font-semibold mb-6">Top Cryptocurrencies</h2>
      
      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        {cryptos?.map((crypto) => (
          <div key={crypto.id} className="border-t border-secondary pt-4 first:border-t-0 first:pt-0">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <span className="text-sm text-muted-foreground shrink-0">#{crypto.market_cap_rank}</span>
                <img 
                  src={crypto.image} 
                  alt={crypto.name} 
                  className="w-6 h-6 rounded-full shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{crypto.name}</p>
                  <p className="text-sm text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
                </div>
              </div>
              <div className="text-right ml-4 shrink-0">
                <p className="font-medium text-sm">${crypto.current_price?.toLocaleString() || 'N/A'}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span
                className={`flex items-center gap-1 ${
                  (crypto.price_change_percentage_24h || 0) >= 0 ? "text-success" : "text-warning"
                }`}
              >
                {(crypto.price_change_percentage_24h || 0) >= 0 ? (
                  <ArrowUpIcon className="w-3 h-3" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3" />
                )}
                {Math.abs(crypto.price_change_percentage_24h || 0).toFixed(2)}%
              </span>
              <span className="text-muted-foreground">
                ${(crypto.market_cap / 1e9).toFixed(1)}B
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground">
              <th className="pb-4">Rank</th>
              <th className="pb-4">Name</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">24h Change</th>
              <th className="pb-4">Market Cap</th>
              <th className="pb-4">Volume</th>
            </tr>
          </thead>
          <tbody>
            {cryptos?.map((crypto, index) => (
              <tr key={crypto.id} className="border-t border-secondary">
                <td className="py-4 text-sm text-muted-foreground">
                  #{crypto.market_cap_rank}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={crypto.image} 
                      alt={crypto.name} 
                      className="w-8 h-8 rounded-full"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div>
                      <p className="font-medium">{crypto.name}</p>
                      <p className="text-sm text-muted-foreground">{crypto.symbol.toUpperCase()}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 font-medium">
                  ${crypto.current_price?.toLocaleString() || 'N/A'}
                </td>
                <td className="py-4">
                  <span
                    className={`flex items-center gap-1 ${
                      (crypto.price_change_percentage_24h || 0) >= 0 ? "text-success" : "text-warning"
                    }`}
                  >
                    {(crypto.price_change_percentage_24h || 0) >= 0 ? (
                      <ArrowUpIcon className="w-3 h-3" />
                    ) : (
                      <ArrowDownIcon className="w-3 h-3" />
                    )}
                    ${Math.abs((crypto.current_price * crypto.price_change_percentage_24h / 100) || 0).toFixed(2)}
                  </span>
                </td>
                <td className="py-4">
                  ${(crypto.market_cap / 1e9).toFixed(1)}B
                </td>
                <td className="py-4">
                  ${(crypto.total_volume / 1e9).toFixed(1)}B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;
