'use client';

import { easeOut } from 'motion/react';

export enum Locale {
  EN = 'en',
  // ZH = 'zh',
  ID = 'id',
}

export const localeDisplayNames: { [key: string]: string } = {
  'en-US': 'English',
  'ja-JP': '日本語',
  'zh-CN': '简体中文',
  'zh-TW': '繁體中文',
};

export const RB_EMAIL = 'service@qtnil.com';
export const RB_WA = 'https://wa.me/+6289677520033';
export const ANIMATIONS = {
  FADE_IN: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  SLIDE_DOWN: {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  SLIDE_UP: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  SLIDE_LEFT: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  SLIDE_RIGHT: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  ZOOM_IN: {
    initial: { scale: 0.7, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
};

export const ANIMATION_DURATION = 0.5;
export const TRANSITIONS = {
  SPRING: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
  },
  SPRING_DELAY_300: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
    delay: 0.3,
  },
  SPRING_DELAY_500: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
    delay: 0.5,
  },
  SPRING_DELAY_600: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
    delay: 0.6,
  },
  SPRING_DELAY_1000: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
    mass: 1,
    delay: 1,
  },
  FADE: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
  },
  FADE_DELAY_300: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
    delay: 0.3,
  },
  FADE_DELAY_500: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
    delay: 0.5,
  },
  FADE_DELAY_600: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
    delay: 0.6,
  },
  FADE_DELAY_900: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
    delay: 0.9,
  },
  FADE_DELAY_1000: {
    duration: ANIMATION_DURATION,
    ease: easeOut,
    delay: 1,
  },
};
