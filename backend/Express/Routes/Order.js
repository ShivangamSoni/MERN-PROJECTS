import { Router } from "express";

// Middleware
import verifyJWT from "../Middleware/verifyJWT.js";
import adminRequired from "../Middleware/adminRequired.js";
import bodyRequired from "../Middleware/bodyRequired.js";

// Model
import Order from "../../Models/Order.js";

const order = Router();

/**
 * @method GET
 * @listens /api/v1/order/my
 * @description Get all User Orders
 */
order.get("/my", verifyJWT, async (req, res) => {
  const { id } = req.payload;

  try {
    const userOrders = await Order.find({ userId: id });
    res.json({ success: true, data: userOrders });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/order/:orderId
 * @description Get a specific User Order
 */
order.get("/:orderId", verifyJWT, async (req, res) => {
  const { id } = req.payload;
  const { orderId } = req.params;

  try {
    const userOrders = await Order.find({ userId: id, _id: orderId });
    res.json({ success: true, data: userOrders });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/order/all
 * @description Get all Users Orders
 */
order.get("/all", verifyJWT, adminRequired, async (req, res) => {
  try {
    const userOrders = await Order.find();
    res.json({ success: true, data: userOrders });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method POST
 * @listens /api/v1/order
 * @description Create a Users Order
 */
order.post("/", verifyJWT, bodyRequired, async (req, res) => {
  const newOrder = new Order({ userId: req.payload.id, ...req.body });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json({ success: true, data: savedOrder });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method PUT
 * @listens /api/v1/order
 * @description Update a Users Order
 */
order.put("/", verifyJWT, bodyRequired, async (req, res) => {
  const { id } = req.payload;
  const orderData = req.body;

  try {
    const result = await Order.updateOne({ userId: id }, { $set: orderData });

    if (result.matchedCount === 0) {
      res.status(404).json({ success: false, message: "Order Not Found" });
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
 * @listens /api/v1/order/my/:id
 * @description Delete a Users Order
 */
order.delete("/my/:orderId", verifyJWT, async (req, res) => {
  const { id } = req.payload;
  const { orderId } = req.params;

  try {
    const result = await Order.deleteOne({ userId: id, _id: orderId });

    if (result.deletedCount === 0) {
      res.status(404).json({ success: false, message: "Order Not Found" });
      return;
    }

    res.json({ success: true, message: "Order Deleted" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method DELETE
 * @listens /api/v1/order/:id
 * @description ADMIN API to Delete an Order
 */
order.delete("/:id", verifyJWT, adminRequired, async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Order.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ success: false, message: "Order Not Found" });
      return;
    }

    res.json({ success: true, message: "Order Deleted" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

export default order;
