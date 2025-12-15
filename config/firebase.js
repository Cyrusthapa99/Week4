import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Replace with your Firebase project configuration
// Get these values from Firebase Console > Project Settings > General
const firebaseConfig = {
    apiKey: "AIzaSyCoLk0rZOPYrJxeeV2YbQEwkkaCH0flZRM",
    authDomain: "week-4-43e45.firebaseapp.com",
    projectId: "week-4-43e45",
    storageBucket: "week-4-43e45.firebasestorage.app",
    messagingSenderId: "551107312108",
    appId: "1:551107312108:android:2d9e1220b6cfeb3bbc68c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };
export default app;
