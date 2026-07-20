import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIjcG_SYiZd1bTWWQj-SiYZDhj_QBoQa0",
  authDomain: "riveradev.firebaseapp.com",
  projectId: "riveradev",
  storageBucket: "riveradev.firebasestorage.app",
  messagingSenderId: "2348835192",
  appId: "1:2348835192:web:980aad216a145a9f62e88d",
  measurementId: "G-ZZ4YSJWWDC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only if supported (browser environment)
let analytics: any = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Custom event logger helper
export const logCustomEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  } else if (typeof window !== "undefined") {
    // If not initialized yet, try queuing or just wait. 
    // Usually it's fast enough, but just in case we can check after a short timeout.
    setTimeout(() => {
      if (analytics) logEvent(analytics, eventName, eventParams);
    }, 1000);
  }
};

export { app, analytics };
