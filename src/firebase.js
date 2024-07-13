import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH7adn1eAAq2Y6A217mtKafbgvVCvClxw",
  authDomain: "agp-calculator.firebaseapp.com",
  projectId: "agp-calculator",
  storageBucket: "agp-calculator.appspot.com",
  messagingSenderId: "830373497094",
  appId: "1:830373497094:web:d888dcf61501541cd93687",
  measurementId: "G-3TR2SQT6J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth };
export const database = getDatabase(app);
