'use client';

import { useEffect, useState } from 'react';

import screenConfig from '@/screen.config';

const getMediaQueryState = () => {
  // Check if we're on the client side
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isSmallTabletAndSmaller: false,
      isLargeTabletAndSmaller: false,
      isDesktop: true,
    };
  }

  const width = window.innerWidth;
  return {
    isMobile: width <= screenConfig.sm,
    isSmallTabletAndSmaller: width <= screenConfig.md,
    isLargeTabletAndSmaller: width <= screenConfig.lg,
    isDesktop: width > screenConfig.lg,
  };
};

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState(getMediaQueryState);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => {
      setMediaQuery(getMediaQueryState());
    };

    // Set initial state after client-side hydration
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: mediaQuery.isMobile,
    isSmallTabletAndSmaller: mediaQuery.isSmallTabletAndSmaller,
    isSmallTablet: mediaQuery.isSmallTabletAndSmaller && !mediaQuery.isMobile,
    isLargeTabletAndSmaller: mediaQuery.isLargeTabletAndSmaller,
    isLargeTablet:
      mediaQuery.isLargeTabletAndSmaller && !mediaQuery.isSmallTabletAndSmaller,
    isDesktop: mediaQuery.isDesktop,
    isClient, // Export this so components can handle SSR properly
  };
};
