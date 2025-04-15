require('dotenv').config();  
const express = require("express");
const cors = require("cors");
const connectDb = require('./config/db.js');

const urlRouter = require("./router/url.router.js");

connectDb(); // Connect to MongoDB

const app = express();
app.use(cors());  // Middleware for CORS
app.use(express.json());  // Middleware to parse JSON

// Use router for API routes
app.use("/api/url", urlRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`🚀 Server is running on port ${port}`));

