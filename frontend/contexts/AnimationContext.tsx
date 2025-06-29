'use client';

import { createContext, Dispatch, SetStateAction } from 'react';

interface AnimationContextType {
  isAnimationComplete: boolean;
  setIsAnimationComplete: Dispatch<SetStateAction<boolean>>;
}

export const AnimationContext = createContext<AnimationContextType>({
  isAnimationComplete: false,
  setIsAnimationComplete: () => {},
});
