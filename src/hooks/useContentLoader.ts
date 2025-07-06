
import { useState, useEffect, useRef } from 'react';

interface UseContentLoaderOptions {
  delay?: number;
  threshold?: number;
}

export const useContentLoader = ({ delay = 300, threshold = 0.1 }: UseContentLoaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Simulate loading delay
          setTimeout(() => {
            setIsLoading(false);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return { isLoading: isLoading && isVisible, elementRef, isVisible };
};
