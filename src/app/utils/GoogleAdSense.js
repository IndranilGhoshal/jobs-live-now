'use client';

import { useEffect } from 'react';

export default function GoogleAdSense() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="adsbygoogle.js"]'
    );

    if (!existingScript) {
      const script = document.createElement('script');

      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1574872040858425';

      script.async = true;
      script.crossOrigin = 'anonymous';

      document.head.appendChild(script);
    }
  }, []);

  return null;
}