
import { useEffect } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { BackgroundGrid } from '@/components/BackgroundGrid';
import { Navigation } from '@/components/sections/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const Landing = () => {
  const { restoreScrollPosition, saveScrollPosition } = useScrollPosition('landing');

  useEffect(() => {
    // Restore scroll position when component mounts
    restoreScrollPosition();

    // Save scroll position when component unmounts
    return () => {
      saveScrollPosition();
    };
  }, [restoreScrollPosition, saveScrollPosition]);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <BackgroundGrid />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Landing;
