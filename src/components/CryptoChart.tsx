
import { useState } from 'react';
import { Fullscreen, X } from 'lucide-react';
import TradingViewWidget from 'react-tradingview-widget';
import { Button } from '@/components/ui/button';

const CryptoChart = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Regular Chart View */}
      <div className={`glass-card p-6 rounded-lg mb-8 animate-fade-in transition-all duration-300 ${isFullscreen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Bitcoin Price</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
            className="flex items-center gap-2 hover:bg-secondary/50 transition-colors"
          >
            <Fullscreen className="w-4 h-4" />
            Fullscreen
          </Button>
        </div>
        <div className="h-[400px] lg:h-[700px] w-full">
          <TradingViewWidget
            symbol="BINANCE:BTCUSDT"
            theme="Dark"
            locale="en"
            autosize
            hide_side_toolbar={false}
            allow_symbol_change={true}
            interval="D"
            toolbar_bg="#141413"
            enable_publishing={false}
            hide_top_toolbar={false}
            save_image={false}
            container_id="tradingview_chart"
          />
        </div>
      </div>

      {/* Enhanced Fullscreen Overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] bg-background animate-fade-in">
          <div className="h-screen w-screen flex flex-col">
            {/* Exit Button Only */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border-white/20 hover:bg-background/90 transition-all duration-200"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Exit</span>
              </Button>
            </div>
            
            {/* Full Screen Chart Container */}
            <div className="h-full w-full animate-scale-in">
              <TradingViewWidget
                symbol="BINANCE:BTCUSDT"
                theme="Dark"
                locale="en"
                autosize
                hide_side_toolbar={false}
                allow_symbol_change={true}
                interval="D"
                toolbar_bg="#141413"
                enable_publishing={false}
                hide_top_toolbar={false}
                save_image={false}
                container_id="tradingview_chart_fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CryptoChart;
