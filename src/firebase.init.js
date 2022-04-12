// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA81iq0eqke6rd9XCDgg3mDEqdPxbG0unI",
  authDomain: "router-firebase-fe4dc.firebaseapp.com",
  projectId: "router-firebase-fe4dc",
  storageBucket: "router-firebase-fe4dc.appspot.com",
  messagingSenderId: "633638356314",
  appId: "1:633638356314:web:c12f7d622e718dfc479f63",
  measurementId: "G-EPSX4YJ9WQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;