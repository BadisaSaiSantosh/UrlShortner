const mongoose = require("mongoose");
require('dotenv').config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(" DB connected successfully");
    } catch (err) {
        console.error(" DB connection failed:", err);
        process.exit(1); // Stop the server if DB fails
    }
};

module.exports = connectDb;
