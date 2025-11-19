// client/src/App.jsx
import { useEffect, useState } from "react";
import { requestNotificationPermission, onMessageListener } from "./firebase";

function App() {
  const [token, setToken] = useState("");
  const [incomingMessage, setIncomingMessage] = useState(null);

  const handleGetToken = async () => {
    try {
      const fcmToken = await requestNotificationPermission();
      setToken(fcmToken);
      alert("Token generated! Check console.");
      // In real app you would POST this token to your backend.
    } catch (err) {
      console.error(err);
      alert("User denied notifications or error occurred.");
    }
  };

  useEffect(() => {
    onMessageListener()
      .then((payload) => {
        setIncomingMessage(payload);
      })
      .catch((err) => console.log("onMessage error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>FCM Practice (React + Node)</h1>

      <button onClick={handleGetToken}>Enable Notifications & Get Token</button>

      {token && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Your FCM Token (for testing)</h3>
          <textarea
            style={{ width: "100%", height: "100px" }}
            value={token}
            readOnly
          />
          <p>Copy this token and paste into your Node.js sender.</p>
        </div>
      )}

      {incomingMessage && (
        <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
          <h3>Foreground message received:</h3>
          <pre>{JSON.stringify(incomingMessage, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
