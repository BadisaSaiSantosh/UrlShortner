const LoginModel = require("../model/login.model.js");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const account = await LoginModel.findOne({ email });
        if (!account) {
            console.log("Email not found... Sign up first");
            return res.status(400).json({ error: "Email not found... Sign up first" });
        }

        // Check password
        const checkPassword = await bcrypt.compare(password, account.password);
        if (!checkPassword) {
            console.log("Incorrect Password...");
            return res.status(400).json({ error: "Incorrect Password..." });
        }

        // Successful login
        console.log("Login successful!");
        return res.status(200).json({ message: "Login successful!", user: account });

    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({ error: "Server error" });
    }
};

module.exports = { Login };
