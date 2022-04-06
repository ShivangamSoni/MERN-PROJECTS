import { Router } from "express";

// Middleware
import verifyJWT from "../Middleware/verifyJWT.js";
import adminRequired from "../Middleware/adminRequired.js";
import bodyRequired from "../Middleware/bodyRequired.js";

// Model
import Cart from "../../Models/Cart.js";

const cart = Router();

export default cart;
