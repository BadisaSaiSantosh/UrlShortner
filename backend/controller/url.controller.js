const URLModel = require("../model/url.model.js");
const { nanoid } = require("nanoid");

// 🔹 Generate a short URL (POST) - Requires Authentication
const createShortURL = async (req, res) => {
    try {
        const { originalURL } = req.body;
        const userId = req.user.id; // Extract user ID from authenticated request

        if (!originalURL) {
            return res.status(400).json({ error: "Original URL is required" });
        }

        // Generate a unique short URL
        const shortURL = nanoid(6);

        const newURL = new URLModel({ userId, shortURL, originalURL, clicked: 0 });
        await newURL.save();

        res.status(201).json({ message: "Short URL created", shortURL });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// 🔹 Retrieve original URL and redirect (GET)
const getOriginalURL = async (req, res) => {
    try {
        const { shortURL } = req.params;
        const urlData = await URLModel.findOne({ shortURL });

        if (!urlData) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        // Increment click count
        urlData.clicked += 1;
        await urlData.save();

        res.redirect(urlData.originalURL);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// 🔹 Get all URLs for logged-in user (GET) - Requires Authentication
const getUserURLs = async (req, res) => {
    try {
        const userId = req.user.id;
        const urls = await URLModel.find({ userId });

        res.json(urls);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { createShortURL, getOriginalURL, getUserURLs };
