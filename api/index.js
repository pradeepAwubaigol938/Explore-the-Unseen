const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require("./models/User.js");


// Initialize dotenv to manage environment variables
dotenv.config();

const app = express();
const bcryptSalt = 10;

// Middleware
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});


// Test Endpoint
app.get('/test', (req, res) => {
  res.json('Test OK');
});

// Register Endpoint
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create new user document with hashed password
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    const userDoc = await User.create({ name, email, password: hashedPassword });
    res.json(userDoc);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(422).json(error);
  }
});

// Start the Server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
