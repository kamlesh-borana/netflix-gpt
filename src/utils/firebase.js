// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAD2rmSz9T8TGwc7SoSJObA9lJeslo3us",
  authDomain: "netflixgpt-a65f5.firebaseapp.com",
  projectId: "netflixgpt-a65f5",
  storageBucket: "netflixgpt-a65f5.appspot.com",
  messagingSenderId: "542297071624",
  appId: "1:542297071624:web:5d4bde040ef91d4e5d71bd",
  measurementId: "G-MJN9TPY20M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
