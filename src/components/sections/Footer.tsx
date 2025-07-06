
export const Footer = () => {
  return (
    <footer className="border-t border-secondary/20 py-8 sm:py-12 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-success rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">₿</span>
              </div>
              <span className="text-xl font-bold">CryptoTrade</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Free crypto trading platform for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-success/20 transition-colors">
                <span className="text-sm">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-success/20 transition-colors">
                <span className="text-sm">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center hover:bg-success/20 transition-colors">
                <span className="text-sm">💼</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Trading</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Markets</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Free Trading</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Trading Guide</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Market Analysis</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">API Docs</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Compliance</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 CryptoTrade. All rights reserved. Trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};
