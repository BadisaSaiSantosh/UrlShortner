const express = require("express");
const { createShortURL, getOriginalURL, getAnalytics } = require("../controller/url.controller.js");

const router = express.Router();

// Define routes
router.post("/shorten", createShortURL);  // Shorten a URL
router.get("/:shortURL", getOriginalURL); // Redirect to original URL
router.get("/", getAnalytics);            // Get all stored URLs

module.exports = router;
