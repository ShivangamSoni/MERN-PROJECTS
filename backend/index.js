// Node Modules
import dotenv from "dotenv";
import mongoose from "mongoose";

// Express APP
import app from "./Express/index.js";

// To use environment files for accessing sensitive information
dotenv.config();
const { PORT, MONGO_URI } = process.env;

// Listening on PORT
app.listen(PORT || 5000, () => {
    console.log(`Server Started on PORT: ${PORT || 5000}`);
});

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("DB Connection Successful"))
    .catch((err) => console.log("DB ERROR: " + err));
