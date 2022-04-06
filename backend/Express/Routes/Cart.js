import { Router } from "express";

// Middleware
import verifyJWT from "../Middleware/verifyJWT.js";
import adminRequired from "../Middleware/adminRequired.js";
import bodyRequired from "../Middleware/bodyRequired.js";

// Model
import Cart from "../../Models/Cart.js";

const cart = Router();

/**
 * @method GET
 * @listens /api/v1/cart
 * @description Get a User Cart
 */
cart.get("/", verifyJWT, async (req, res) => {
  const { id } = req.payload;

  try {
    const userCart = await Cart.findOne({ userId: id });

    if (!userCart) {
      res.status(404).json({ success: false, message: "Cart Bot Found" });
      return;
    }

    res.json({ success: true, data: userCart });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/cart/all
 * @description Get all User Carts
 */
cart.get("/", verifyJWT, adminRequired, async (req, res) => {
  try {
    const userCarts = await Cart.find();
    res.json({ success: true, data: userCarts });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method POST
 * @listens /api/v1/cart
 * @description Create a Users Cart
 */
cart.post("/", verifyJWT, bodyRequired, async (req, res) => {
  const newCart = new Cart({ userId: req.payload.id, ...req.body });

  try {
    const savedCart = await newCart.save();
    res.status(201).json({ success: true, data: savedCart });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method PUT
 * @listens /api/v1/cart
 * @description Update a Users Cart
 */
cart.put("/", verifyJWT, bodyRequired, async (req, res) => {
  const { id } = req.payload;
  const cartData = req.body;

  try {
    const result = await Cart.updateOne({ userId: id }, { $set: cartData });

    if (result.matchedCount === 0) {
      res.status(404).json({ success: false, message: "Cart Not Found" });
      return;
    }

    if (result.modifiedCount === 0) {
      res.json({ success: true, message: "No Update Needed/Already Updated" });
      return;
    }

    res.json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method DELETE
 * @listens /api/v1/cart
 * @description Delete a Users Cart
 */
cart.delete("/", verifyJWT, async (req, res) => {
  const { id } = req.payload;

  try {
    const result = await Cart.deleteOne({ userId: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ success: false, message: "Cart Not Found" });
      return;
    }

    res.json({ success: true, message: "Cart Deleted" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method DELETE
 * @listens /api/v1/cart/:id
 * @description ADMIN API to Delete a Users Cart
 */
cart.delete("/:id", verifyJWT, adminRequired, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Cart.deleteOne({ userId: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ success: false, message: "Cart Not Found" });
      return;
    }

    res.json({ success: true, message: "Cart Deleted" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

export default cart;
