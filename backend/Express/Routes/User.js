import { Router } from "express";
import bcrypt from "bcrypt";

// Middleware
import verifyJWT from "../Middleware/verifyJWT.js";
import adminRequired from "../Middleware/adminRequired.js";
import bodyRequired from "../Middleware/bodyRequired.js";

// Model
import User from "../../Models/User.js";

const user = Router();

/**
 * @description Get User Details
 */
const getUser = async (req, res) => {
  const id = req.params.id || req.payload.id;

  try {
    const user = await User.findOne({ _id: id });

    if (!user) {
      res.status(404).json({ success: false, message: "User Doesn't Exist" });
      return;
    }

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
};

/**
 * @method GET
 * @listens /api/v1/user/
 * @description Get Authenticated Users Profile Info
 */

user.get("/", verifyJWT, getUser);
/**
 * @method GET
 * @listens /api/v1/user/all
 * @description ADMIN API to get all Users
 */
user.get("/all", verifyJWT, adminRequired, async (req, res) => {
  console.log("Hit");
  try {
    const user = await User.find();
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).send({ success: false, message: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/user/stats
 * @description GET Number of User Group By Registration Month
 */
user.get("/stats", verifyJWT, adminRequired, async (req, res) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  try {
    const stats = await User.aggregate([
      { $match: { createdAt: { $gte: date } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);

    res.json({ success: true, data: stats });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: "Server Error" });
  }
});

/**
 * @method GET
 * @listens /api/v1/user/:id
 * @description Admin API to Get Users Profile Info By Id
 */
user.get("/:id", verifyJWT, adminRequired, getUser);

/**
 * @description Update User Data by ID
 */
const updateUser = async (req, res) => {
  const id = req.params.id || req.payload.id;
  const userData = req.body;

  try {
    if (userData.password) {
      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
      const encryptedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);
      userData.password = encryptedPassword;
    }

    const result = await User.updateOne({ _id: id }, { $set: userData });

    if (result.matchedCount === 0) {
      res.status(404).json({ success: false, message: "User Not Found" });
      return;
    }

    if (result.modifiedCount === 0) {
      res.json({ success: true, message: "Nothing to Update" });
      return;
    }

    res.json({ success: true, message: "Updated Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
};

/**
 * @method PUT
 * @listens /api/v1/user/
 * @description API for user to Update their Profile
 */
user.put("/", verifyJWT, bodyRequired, updateUser);

/**
 * @method PUT
 * @listens /api/v1/user/:id
 * @description API for Admin to Update User by ID
 */
user.put("/:id", verifyJWT, adminRequired, bodyRequired, updateUser);

/**
 * @description Delete User by ID
 */
const deleteUser = async (req, res) => {
  const id = req.params.id || req.payload.id;

  try {
    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ success: false, message: "User Not Found/Already Deleted" });
      return;
    }

    res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ success: false, error: "Server Error" });
  }
};
/**
 * @method DELETE
 * @listens /api/v1/user/
 * @description Deletes the Authenticated Users Profile
 */
user.delete("/", verifyJWT, deleteUser);
/**
 * @method DELETE
 * @listens /api/v1/user/:id
 * @description Admin API to Delete the Users Profile by ID
 */
user.delete("/:id", verifyJWT, adminRequired, deleteUser);

export default user;
