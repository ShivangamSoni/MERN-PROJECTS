import { Router } from "express";

// Middleware
import verifyJWT from "../Middleware/verifyJWT.js";
import adminRequired from "../Middleware/adminRequired.js";
import bodyRequired from "../Middleware/bodyRequired.js";

// Model
import Product from "../../Models/Products.js";

const product = Router();

/**
 * @method GET
 * @listens /api/v1/product/all
 * @description GET All Products
 */
product.get("/all", async (req, res) => {
  const { category } = req.query;

  try {
    let prods;
    if (category) {
      prods = await Product.find({
        category: {
          $in: [category],
        },
      });
    } else {
      prods = await Product.find();
    }
    res.json({ success: true, data: prods });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/product/:id
 * @description GET a Product by ID
 */
product.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const prod = await Product.findOne({ _id: id });

    if (!prod) {
      res.status(404).json({ success: false, message: "Product Doesn't Exist" });
      return;
    }

    res.json({ success: true, data: prod });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method POST
 * @listens /api/v1/product
 * @description Admin API to Create/Add a New Product
 */
product.post("/", verifyJWT, adminRequired, bodyRequired, async (req, res) => {
  const newProd = new Product(req.body);

  try {
    const savedProd = await newProd.save();
    res.status(201).json({ success: true, data: savedProd });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method PUT
 * @listens /api/v1/product/id
 * @description Admin API to Update a Product
 */
product.put("/:id", verifyJWT, adminRequired, bodyRequired, async (req, res) => {
  const { id } = req.params;
  const prodData = req.body;

  try {
    const result = await Product.updateOne({ _id: id }, { $set: prodData });

    if (result.matchedCount === 0) {
      res.status(404).json({ success: false, message: "Product Doesn't Exist" });
      return;
    }

    if (result.modifiedCount === 0) {
      res.json({ success: true, message: "Nothing to Update/Already Updated" });
      return;
    }

    res.status(201).json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

export default product;
