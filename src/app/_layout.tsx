import { Stack } from "expo-router";
import { useEffect } from "react";

const linking = {
  prefixes: [
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '',
  ],
  config: {
    screens: {
      index: '',
      'admin/home': 'admin/home',
      'admin/signin': 'admin/signin',
    },
  },
};

export default function RootLayout() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const manifestLink = document.querySelector("link[rel='manifest']");
    if (!manifestLink) {
      const link = document.createElement('link');
      link.rel = 'manifest';
      link.href = '/manifest.webmanifest';
      document.head.appendChild(link);
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.warn('Service worker registration failed:', error);
      });
    }
  }, []);

  return <Stack screenOptions={{ headerShown: false }} />;
}
