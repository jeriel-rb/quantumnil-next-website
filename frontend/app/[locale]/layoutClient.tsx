'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { LenisContext } from '@/hooks/LenisContext';
import { AnimationContext } from '@/contexts/AnimationContext';
import { AnimatePresence } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/styles.scss';
import './globals.css';
import Script from 'next/script';

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProduction = process.env.NODE_ENV === 'production';
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Set up the animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/images/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/images/favicon/favicon.svg"
      />
      <link rel="shortcut icon" href="/images/favicon/favicon.svg" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="Quantum NIL" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <LenisContext.Provider value={lenisRef.current}>
        <AnimationContext.Provider
          value={{ isAnimationComplete, setIsAnimationComplete }}
        >
          <div className="main">
            <AnimatePresence
              onExitComplete={() => window.scrollTo(0, 0)}
              mode="wait"
              initial={true}
            >
              {children}
            </AnimatePresence>
          </div>
          <Analytics />
          <ToastContainer theme="dark" />
        </AnimationContext.Provider>
      </LenisContext.Provider>

      {isProduction && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-GH1LD8PFHQ"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GH1LD8PFHQ');
            `}
          </Script>
        </>
      )}
    </>
  );
}
