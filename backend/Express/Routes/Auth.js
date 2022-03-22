import { Router } from "express";

// User Model
import User from "../../Models/User.js";

const auth = Router();

/**
 * @method POST
 * @listens "/register"
 * @description Register User
 */
auth.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    const user = new User({
        username,
        email,
        password,
    });

    res.send({ success: true, user });
});

export default auth;
