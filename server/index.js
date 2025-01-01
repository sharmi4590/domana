const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/usermodel");

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['https://domain-analyzer-ten.vercel.app/'], // Replace with your frontend URL
    credentials: true
}));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Domain-analyser", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// Login Route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    console.log("Received login request:", req.body);

    if (!email || !password) {
        console.log("Validation error: Missing email or password");
        return res.status(400).json({ message: "All fields are required!" });
    }

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            console.log(`User not found: ${email}`);
            return res.status(401).json({ message: "No user found with this email!" });
        }
        if (user.password !== password) {
            console.log(`Incorrect password for user: ${email}`);
            return res.status(401).json({ message: "Incorrect password!" });
        }
        console.log(`Login successful for user: ${email}`);
        res.status(200).json({ status: "200 OK"});
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "An error occurred during login." });
    }
});


// Signup Route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required!" });
    }

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists with this email!" });
        }

        const newUser = await UserModel.create({ name, email, password });
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred during signup." });
    }
});

// Start the server
require('dotenv').config();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

