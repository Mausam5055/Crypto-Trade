
import { useContentLoader } from '@/hooks/useContentLoader';
import { ContentLoader } from '@/components/ui/content-loader';

export const AboutSection = () => {
  const videoLoader = useContentLoader({ delay: 800 });
  const contentLoader = useContentLoader({ delay: 400 });
  const benefitsLoader = useContentLoader({ delay: 600 });

  const benefits = [
    {
      icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      title: "Zero Trading Fees",
      description: "Trade without worrying about platform fees eating into your profits.",
      color: "success"
    },
    {
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      title: "Bank-Grade Security",
      description: "Your assets are protected with institutional-level security measures.",
      color: "primary"
    },
    {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      title: "Lightning Fast",
      description: "Execute trades instantly with our high-performance infrastructure.",
      color: "warning"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-background via-background/98 to-background">
      {/* Clean Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-success/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={contentLoader.elementRef} className="text-center mb-16">
          {contentLoader.isLoading ? (
            <div className="space-y-6">
              <ContentLoader type="button" className="mx-auto" />
              <ContentLoader type="text" lines={2} className="max-w-2xl mx-auto" />
              <ContentLoader type="text" lines={3} className="max-w-4xl mx-auto" />
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-secondary/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/5">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-success/90 tracking-wide">About CryptoTrade</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight">
                <span className="block text-foreground/60 mb-2 font-extralight">The Future of</span>
                <span className="block bg-gradient-to-r from-success via-primary to-warning bg-clip-text text-transparent font-medium">
                  Crypto Trading
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-light italic">
                Experience seamless trading with institutional-grade security and zero fees. 
                <span className="text-foreground/90"> Built for the next generation of traders.</span>
              </p>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div ref={videoLoader.elementRef} className="relative">
            {videoLoader.isLoading ? (
              <ContentLoader type="video" className="rounded-3xl" />
            ) : (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-[400px] md:h-[500px] object-cover"
                >
                  <source src="/Crypto-Trade-2.mp4" type="video/mp4" />
                  <img 
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center" 
                    alt="Advanced crypto trading interface"
                    className="w-full h-full object-cover"
                  />
                </video>
                
                {/* Floating Stats */}
                <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-success">$2.4B+</div>
                    <div className="text-xs text-muted-foreground">Daily Volume</div>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">500K+</div>
                    <div className="text-xs text-muted-foreground">Active Users</div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-success">Live Trading</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-background/95 backdrop-blur-lg px-4 py-3 rounded-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-warning">99.99%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div ref={benefitsLoader.elementRef} className="space-y-10">
            {benefitsLoader.isLoading ? (
              <div className="space-y-8">
                <ContentLoader type="text" lines={2} />
                <ContentLoader type="text" lines={3} />
                {Array.from({ length: 3 }).map((_, i) => (
                  <ContentLoader key={i} type="card" />
                ))}
                <div className="flex gap-4">
                  <ContentLoader type="button" />
                  <ContentLoader type="button" />
                </div>
              </div>
            ) : (
              <>
                {/* Main Content */}
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-foreground leading-tight">
                    Built for the
                    <span className="block text-success font-medium">Next Generation</span>
                  </h3>
                  
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-light italic">
                    Our platform combines institutional-grade infrastructure with consumer-friendly design. 
                    Experience the future of crypto trading with zero fees and maximum security.
                  </p>
                </div>
                
                {/* Benefits Grid */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="group flex items-start gap-4 p-6 rounded-2xl bg-secondary/3 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-secondary/5"
                    >
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        benefit.color === 'success' ? 'bg-success/10 border border-success/20' :
                        benefit.color === 'primary' ? 'bg-primary/10 border border-primary/20' :
                        'bg-warning/10 border border-warning/20'
                      }`}>
                        <svg 
                          className={`w-6 h-6 ${
                            benefit.color === 'success' ? 'text-success' :
                            benefit.color === 'primary' ? 'text-primary' :
                            'text-warning'
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={benefit.icon} />
                        </svg>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-1">
                        <h4 className={`text-lg font-medium ${
                          benefit.color === 'success' ? 'text-success' :
                          benefit.color === 'primary' ? 'text-primary' :
                          'text-warning'
                        }`}>
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-muted-foreground/80 font-light italic leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-success hover:bg-success/90 text-background font-medium rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      Start Trading Now
                    </button>
                    <button className="px-8 py-4 bg-secondary/10 hover:bg-secondary/20 text-foreground font-medium rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
