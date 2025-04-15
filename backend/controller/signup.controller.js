const SignUpModel = require("../model/signup.model.js");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {
        const { email, password, repass } = req.body;

        // Check if email exists
        const existingUser = await SignUpModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Existing email ID.." });
        }

        // Check if passwords match
        if (password !== repass) {
            return res.status(400).json({ error: "Re-enter the same password" });
        }

        // Hash the password
        const hashedPass = await bcrypt.hash(password, 10);

        // Save new user
        const user = new SignUpModel({ email, password: hashedPass });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports = { signup };
