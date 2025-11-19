// server/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("./firebaseAdmin");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("FCM Practice Backend Running");
});

// POST /send-notification
app.post("/send-notification", async (req, res) => {
  const { token, title, body } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Missing token" });
  }

  const message = {
    token,
    notification: {
      title: title || "Hello from Node!",
      body: body || "This is a test FCM notification.",
    },
    // You can also send custom data:
    data: { customKey: "customValue" },
  };

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
