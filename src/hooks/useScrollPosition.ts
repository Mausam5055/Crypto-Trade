
import { useEffect, useRef } from 'react';

const SCROLL_POSITIONS: { [key: string]: number } = {};

export const useScrollPosition = (key: string) => {
  const scrollPositionRef = useRef<number>(0);

  const saveScrollPosition = () => {
    const position = window.scrollY;
    SCROLL_POSITIONS[key] = position;
    scrollPositionRef.current = position;
  };

  const restoreScrollPosition = () => {
    const savedPosition = SCROLL_POSITIONS[key] || 0;
    window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' });
  };

  const resetScrollPosition = () => {
    SCROLL_POSITIONS[key] = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return {
    saveScrollPosition,
    restoreScrollPosition,
    resetScrollPosition
  };
};
