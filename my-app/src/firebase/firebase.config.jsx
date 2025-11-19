// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjtbev_NpEu4utv8eCXLgwYhb8VLjb2_g",
  authDomain: "fir-notifications-fb2a2.firebaseapp.com",
  projectId: "fir-notifications-fb2a2",
  storageBucket: "fir-notifications-fb2a2.firebasestorage.app",
  messagingSenderId: "767825558648",
  appId: "1:767825558648:web:c9e3c873ffeeb0cce4018d",
  measurementId: "G-7YLYKZJKKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);