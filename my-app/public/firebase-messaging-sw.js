/* client/public/firebase-messaging-sw.js */

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// Same config as in src/firebase.js
firebase.initializeApp({
  apiKey: "AIzaSyBjtbev_NpEu4utv8eCXLgwYhb8VLjb2_g",
  authDomain: "fir-notifications-fb2a2.firebaseapp.com",
  projectId: "fir-notifications-fb2a2",
  storageBucket: "fir-notifications-fb2a2.firebasestorage.app",
  messagingSenderId: "767825558648",
  appId: "1:767825558648:web:c9e3c873ffeeb0cce4018d",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification?.title || "Background Title";
  const notificationOptions = {
    body: payload.notification?.body || "Background body",
    icon: "/logo192.png", // or any icon you want
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
