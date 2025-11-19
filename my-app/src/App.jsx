import React, { useEffect, useState } from "react";
import { requestDeviceToken, onMessageListener } from "./firebase";

function App() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Get device FCM token
    requestDeviceToken().then((token) => {
      console.log("User Token:", token);

      // You will send this token to your backend API:
      // axios.post("/api/devices", { userId, deviceType: "web", token });
    });

    // Foreground notifications (tab open)
    onMessageListener().then((payload) => {
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Firebase + FCM Setup Successful 🎉</h1>

      {notification && (
        <div style={{ background: "#eee", padding: 20, marginTop: 20 }}>
          <h3>{notification.title}</h3>
          <p>{notification.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
