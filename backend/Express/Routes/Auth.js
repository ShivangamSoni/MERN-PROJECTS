import { Router } from "express";
import Bcrypt, { compareSync } from "bcrypt";
import JWT from "jsonwebtoken";

// Middleware
import bodyRequired from "../Middleware/bodyRequired.js";

// User Model
import User from "../../Models/User.js";

const auth = Router();

/**
 * @method POST
 * @listens "/api/v1/auth/register"
 * @description Register User
 */
auth.post("/register", bodyRequired, async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body;

    // Encrypting Password
    let hashedPassword;
    const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
    try {
        hashedPassword = await Bcrypt.hash(password, SALT_ROUNDS);
    } catch (error) {
        res.status(500).send({ success: false, error });
        return;
    }

    // Creating User Model
    const user = new User({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword,
    });

    // Storing Model to DB
    try {
        const savedUser = await user.save();
        res.status(201).send({ success: true, user: savedUser });
    } catch (error) {
        res.status(500).send({ success: false, error });
    }
});

/**
 * @method POST
 * @listens "/api/v1/auth/login"
 * @description Login/AUthenticate the User
 */
auth.post("/login", bodyRequired, async (req, res) => {
    const { username, password: reqPassword } = req.body;

    try {
        // Fetching User from DB
        const user = await User.findOne({ username });
        if (!user) {
            res.status(401).send({ success: false, error: "Wrong Credentials" });
            return;
        }

        // Checking for Password Match
        const match = await Bcrypt.compare(reqPassword, user.password);
        if (!match) {
            res.status(404).send({ success: false, message: "Incorrect Password" });
            return;
        }

        // Generating JWT
        const { JWT_SECRETE_KEY } = process.env;
        const payload = { id: user.id, isAdmin: user.isAdmin };
        const token = JWT.sign(payload, JWT_SECRETE_KEY, { expiresIn: "3d" });

        // User Data
        const userData = { firstname: user.firstname, lastname: user.lastname, username: user.username, email: user.email };

        res.send({ success: true, token, userData });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: "Server Error" });
        return;
    }
});

export default auth;
