
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Professional Trader",
      content: "CryptoTrade has completely transformed my trading experience. The platform is intuitive, fast, and completely free. I've increased my profits by 40% since switching.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Crypto Enthusiast",
      content: "The advanced charting tools and real-time analytics are exceptional. Plus, zero fees means more money stays in my pocket. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Day Trader",
      content: "Security is my top priority, and CryptoTrade delivers. Bank-grade security with an interface that's both powerful and easy to use.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "David Park",
      role: "Investment Advisor",
      content: "I've recommended CryptoTrade to all my clients. The zero-fee structure and professional tools make it perfect for serious traders.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Blockchain Developer",
      content: "As someone who understands the technical side, I appreciate the robust infrastructure and seamless user experience CryptoTrade provides.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const TestimonialCard = ({ testimonial, isMobile = false }: { testimonial: typeof testimonials[0], isMobile?: boolean }) => (
    <Card className={`${isMobile ? 'h-auto' : 'h-full'} bg-gradient-to-br from-background/90 to-background/70 backdrop-blur-xl border-2 border-white/10 shadow-2xl hover:shadow-success/20 hover:border-success/30 transition-all duration-500 group`}>
      <CardContent className={`${isMobile ? 'p-6' : 'p-8'} relative overflow-hidden`}>
        {/* Decorative Elements */}
        <div className={`absolute top-0 right-0 ${isMobile ? 'w-16 h-16' : 'w-20 h-20'} bg-gradient-to-br from-success/10 to-transparent rounded-bl-3xl opacity-50`}></div>
        <div className={`absolute bottom-0 left-0 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl opacity-50`}></div>
        
        {/* Quote Icon */}
        <div className={`absolute ${isMobile ? 'top-4 left-4 w-6 h-6' : 'top-6 left-6 w-8 h-8'} bg-success/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <svg className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-success`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        <div className={`relative z-10 ${isMobile ? 'pt-2' : 'pt-4'}`}>
          {/* User Info */}
          <div className={`flex items-center ${isMobile ? 'mb-4' : 'mb-6'}`}>
            <div className="relative">
              <img 
                src={testimonial.avatar}
                alt={testimonial.name}
                className={`${isMobile ? 'w-12 h-12 ring-2' : 'w-16 h-16 ring-4'} rounded-full object-cover ring-success/20 shadow-lg`}
              />
              <div className={`absolute -bottom-1 -right-1 ${isMobile ? 'w-4 h-4' : 'w-6 h-6'} bg-success rounded-full flex items-center justify-center shadow-lg`}>
                <svg className={`${isMobile ? 'w-2 h-2' : 'w-3 h-3'} text-white`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className={`${isMobile ? 'ml-3' : 'ml-4'}`}>
              <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold ${!isMobile ? 'bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent' : ''}`}>
                {testimonial.name}
              </h4>
              <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground font-medium`}>{testimonial.role}</p>
            </div>
          </div>
          
          {/* Rating */}
          <div className={`flex ${isMobile ? 'mb-4' : 'mb-6 justify-center'}`}>
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-success fill-current ${isMobile ? '' : 'mx-0.5 transform hover:scale-125 transition-transform duration-200'}`} viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          {/* Testimonial Content with Italics */}
          <blockquote className={`${isMobile ? 'text-sm' : 'text-base'} leading-relaxed text-muted-foreground italic font-medium ${isMobile ? '' : 'text-center'} relative`}>
            <span className={`text-success/50 ${isMobile ? '' : 'text-lg'}`}>"</span>
            {testimonial.content}
            <span className={`text-success/50 ${isMobile ? '' : 'text-lg'}`}>"</span>
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated Background Grid Lines - Desktop Only */}
      <div className="absolute inset-0 hidden md:block opacity-10 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Horizontal moving lines */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`h-line-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-success to-transparent"
              style={{
                top: `${(i + 1) * 12.5}%`,
                animation: `slideHorizontal ${6 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
          {/* Vertical lines for grid effect */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`v-line-${i}`}
              className="absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-success/30 to-transparent opacity-30"
              style={{
                left: `${(i + 1) * 8.33}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-4 sm:mb-6 backdrop-blur-xl">
            <span className="text-sm text-success font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-foreground to-success bg-clip-text text-transparent">
              What Our Traders
            </span>
            <br />
            <span className="text-success">Are Saying</span>
          </h2>
        </div>

        {/* Desktop Continuous Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4 animate-testimonial-scroll">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} isMobile />
          ))}
        </div>
      </div>
    </section>
  );
};
