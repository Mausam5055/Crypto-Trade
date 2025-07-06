
import { useContentLoader } from '@/hooks/useContentLoader';
import { ContentLoader } from '@/components/ui/content-loader';

export const StatsSection = () => {
  const headerLoader = useContentLoader({ delay: 300 });
  const statsLoader = useContentLoader({ delay: 500 });
  const ctaLoader = useContentLoader({ delay: 700 });

  const stats = [
    { 
      value: "$2.8B+", 
      label: "Trading Volume",
      description: "Monthly trading activity",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      color: "success"
    },
    { 
      value: "500K+", 
      label: "Active Traders",
      description: "Global community members",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "primary"
    },
    { 
      value: "99.9%", 
      label: "Uptime",
      description: "Platform reliability",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "warning"
    }
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-secondary/2 overflow-hidden relative">
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-br from-success/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Geometric Lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-success/10 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerLoader.elementRef} className="text-center mb-16 sm:mb-20">
          {headerLoader.isLoading ? (
            <div className="space-y-6">
              <ContentLoader type="button" className="mx-auto" />
              <ContentLoader type="text" lines={1} className="max-w-md mx-auto" />
              <ContentLoader type="text" lines={2} className="max-w-2xl mx-auto" />
            </div>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-secondary/3 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/5">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-success tracking-wider uppercase">Platform Statistics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-success to-primary bg-clip-text text-transparent">
                Trusted by Millions
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                Join a platform that delivers consistent performance and reliability across the globe.
              </p>
            </>
          )}
        </div>

        {/* Enhanced Stats Grid */}
        <div ref={statsLoader.elementRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {statsLoader.isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <ContentLoader key={index} type="card" className="bg-secondary/3 backdrop-blur-2xl rounded-3xl border border-white/5" />
            ))
          ) : (
            stats.map((stat, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden transform hover:scale-105 transition-all duration-500"
                style={{animationDelay: `${index * 150}ms`}}
              >
                {/* Modern Glass Card */}
                <div className="bg-secondary/3 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 text-center relative shadow-2xl hover:shadow-success/5">
                  
                  {/* Subtle Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    stat.color === 'success' ? 'from-success/2 to-transparent' :
                    stat.color === 'primary' ? 'from-primary/2 to-transparent' :
                    'from-warning/2 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      stat.color === 'success' ? 'bg-success/10 border-success/20 group-hover:bg-success/20' :
                      stat.color === 'primary' ? 'bg-primary/10 border-primary/20 group-hover:bg-primary/20' :
                      'bg-warning/10 border-warning/20 group-hover:bg-warning/20'
                    }`}>
                      <svg 
                        className={`w-8 h-8 ${
                          stat.color === 'success' ? 'text-success' :
                          stat.color === 'primary' ? 'text-primary' :
                          'text-warning'
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                      </svg>
                    </div>
                  </div>

                  {/* Stat Content */}
                  <div className="relative z-10 space-y-3">
                    <h3 className={`text-4xl sm:text-5xl font-bold transition-colors duration-500 ${
                      stat.color === 'success' ? 'text-success group-hover:text-success' :
                      stat.color === 'primary' ? 'text-primary group-hover:text-primary' :
                      'text-warning group-hover:text-warning'
                    }`}>
                      {stat.value}
                    </h3>
                    <p className="text-xl sm:text-2xl font-semibold text-foreground group-hover:text-foreground transition-colors duration-300">
                      {stat.label}
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-light italic">
                      {stat.description}
                    </p>
                  </div>

                  {/* Accent Line */}
                  <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full transition-all duration-500 ${
                    stat.color === 'success' ? 'bg-gradient-to-r from-transparent via-success/50 to-transparent' :
                    stat.color === 'primary' ? 'bg-gradient-to-r from-transparent via-primary/50 to-transparent' :
                    'bg-gradient-to-r from-transparent via-warning/50 to-transparent'
                  } opacity-0 group-hover:opacity-100 group-hover:w-32`}></div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Professional Bottom CTA */}
        <div ref={ctaLoader.elementRef} className="text-center">
          {ctaLoader.isLoading ? (
            <div className="bg-secondary/3 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/5 max-w-4xl mx-auto">
              <div className="space-y-6">
                <ContentLoader type="text" lines={1} className="max-w-sm mx-auto" />
                <ContentLoader type="text" lines={2} className="max-w-lg mx-auto" />
                <ContentLoader type="button" className="mx-auto" />
              </div>
            </div>
          ) : (
            <div className="bg-secondary/3 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/5 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-success/2 via-transparent to-primary/2 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                  Ready to Join Our Community?
                </h3>
                <p className="text-lg text-muted-foreground mb-6 font-light">
                  Experience the platform that millions of traders trust every day.
                </p>
                <button className="bg-gradient-to-r from-success to-primary text-background px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-success/10 transform hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Trading Now
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
