import { Router } from "express";

// Middleware
import bodyRequired from "../Middleware/bodyRequired.js";
import verifyJWT from "../Middleware/verifyJWT.js";

// Model
import User from "../../Models/User.js";

const user = Router();

/**
 * @method PUT
 * @listens /api/v1/user/
 * @description API for user to Update their Profile
 */
user.put("/", verifyJWT, bodyRequired, async (req, res) => {
    const { id } = req.payload;
    const { firstname, lastname, email, username, password } = req.body;

    try {
        // Fetching User from DB
        const user = await User.findOne({ _id: id });
        if (!user) {
            res.status(401).send({ success: false, error: "Wrong Credentials" });
            return;
        }

        res.json(req.payload);
    } catch (error) {
        res.status(500).send({ success: false, error: "Server Error" });
    }
});

export default user;
