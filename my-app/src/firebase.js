// client/src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBjtbev_NpEu4utv8eCXLgwYhb8VLjb2_g",
  authDomain: "fir-notifications-fb2a2.firebaseapp.com",
  projectId: "fir-notifications-fb2a2",
  storageBucket: "fir-notifications-fb2a2.firebasestorage.app",
  messagingSenderId: "767825558648",
  appId: "1:767825558648:web:c9e3c873ffeeb0cce4018d",
  measurementId: "G-7YLYKZJKKG"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Ask for notification permission + get FCM token
export const requestNotificationPermission = async () => {
  console.log("Requesting notification permission...");

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Notification permission not granted");
  }

  // VAPID key from Firebase console → Cloud Messaging → Web push certificates
  const vapidKey = "BDOKa3tOb5_2M1_H353F5qZ6fuDP7GVQvgYSlpRjayBQ12bSIj3sBSEOExQwXjhUGcs5FT-P0cn3WjVFNMIFXJg";

  const token = await getToken(messaging, { vapidKey });
  console.log("FCM token:", token);
  return token;
};

// Listen for foreground messages (while tab is open)
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Foreground message received:", payload);
      resolve(payload);
    });
  });
