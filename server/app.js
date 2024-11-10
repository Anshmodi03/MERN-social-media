const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Update with the URL where your frontend is running
  methods: ["GET", "POST"],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions)); // Apply CORS options globally

// Middleware to parse JSON
app.use(express.json());

// Connect to database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
