
export const FeaturesSection = () => {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop&crop=center",
      title: "Advanced Trading Interface", 
      description: "Professional-grade trading tools with real-time market data and advanced charting capabilities.",
      color: "primary",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      gradient: "from-blue-500/2 to-purple-500/2"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop&crop=center",
      title: "Portfolio Management",
      description: "Track your investments and monitor your gains with our comprehensive portfolio management tools.",
      color: "success",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      gradient: "from-green-500/2 to-emerald-500/2"
    },
    {
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop&crop=center",
      title: "Security & Verification",
      description: "Industry-leading security measures with KYC verification process to protect your digital assets.",
      color: "warning",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      gradient: "from-orange-500/2 to-red-500/2"
    },
    {
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop&crop=center",
      title: "Performance Analytics",
      description: "Detailed analytics and insights to help you make informed trading decisions and maximize profits.",
      color: "accent",
      icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      gradient: "from-purple-500/2 to-pink-500/2"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background with Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-success/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-primary/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-px h-32 bg-gradient-to-b from-transparent via-success/10 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-px h-40 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Professional Header Section */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 bg-secondary/3 backdrop-blur-xl rounded-full px-8 py-4 mb-8 border border-white/5 shadow-lg">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse"></div>
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <span className="text-sm font-semibold text-success tracking-widest uppercase">Why Choose Crypto</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-success to-primary bg-clip-text text-transparent">
              Professional Trading
            </span>
            <br />
            <span className="text-success font-light">Redefined</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            <em>Experience the future of cryptocurrency trading with our cutting-edge platform designed for modern investors.</em>
          </p>
        </div>

        {/* Enhanced Feature Cards Grid with Reduced Brightness */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden h-full transform transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Subtle Card Container */}
              <div className="bg-secondary/3 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-success/20 transition-all duration-500 h-full flex flex-col shadow-2xl hover:shadow-success/5">
                
                {/* Very Subtle Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Enhanced Image Section */}
                <div className="relative mb-6 sm:mb-8 overflow-hidden rounded-2xl z-10">
                  <div className="relative">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-32 sm:h-36 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent"></div>
                    
                    {/* Enhanced Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-secondary/70 backdrop-blur-xl p-4 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                        <svg className="w-7 h-7 sm:w-9 sm:h-9 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className="flex-1 flex flex-col z-10 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-success transition-colors duration-500 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 flex-1 italic font-light">
                    {feature.description}
                  </p>

                  {/* Enhanced Learn More Button */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center gap-3 text-success hover:text-success/80 font-semibold text-sm transition-all duration-300 group/btn">
                      <span>Explore Feature</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Modern Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-success/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Call-to-Action Section */}
        <div className="text-center">
          <div className="bg-secondary/3 backdrop-blur-xl p-12 sm:p-16 rounded-3xl border border-white/5 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(126,191,142,0.1)_0%,transparent_50%)]"></div>
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(137,137,222,0.1)_0%,transparent_50%)]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-success via-primary to-accent bg-clip-text text-transparent">
                Ready to Transform Your Trading?
              </h3>
              <p className="text-xl text-muted-foreground mb-10 italic font-light max-w-3xl mx-auto">
                Join thousands of professionals who trust our platform for their cryptocurrency investments and trading strategies.
              </p>
              <button className="bg-gradient-to-r from-success to-primary text-background px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-success/15 transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                <span className="relative z-10 flex items-center gap-3">
                  Begin Trading Journey
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-success opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
