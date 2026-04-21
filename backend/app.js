const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ IMPORTANT

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from backend API 👋" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});