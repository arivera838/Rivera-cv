'use client';

import { useEffect } from 'react';
import { app } from '@/lib/firebase';

export function FirebaseAnalytics() {
  useEffect(() => {
    // Analytics is initialized in lib/firebase.ts if supported
    // The import of app ensures the config is loaded
  }, []);

  return null;
}
