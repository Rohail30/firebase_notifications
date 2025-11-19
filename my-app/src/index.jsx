import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Register Firebase service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/firebase-messaging-sw.js")
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.log("Service Worker registration failed:", err));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
