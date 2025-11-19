import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp } from "./firebase.config";

export const messaging = getMessaging(firebaseApp);

// Ask for notification permission & get FCM token
export const requestDeviceToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "YOUR_WEB_PUSH_KEY"  // From Firebase -> Cloud Messaging -> Web Push certificates
    });

    if (currentToken) {
      console.log("FCM Token:", currentToken);
      return currentToken;
    } else {
      console.log("No token found. Request permission.");
    }
  } catch (err) {
    console.error("Error getting token:", err);
  }
};

// Foreground messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => resolve(payload));
  });
