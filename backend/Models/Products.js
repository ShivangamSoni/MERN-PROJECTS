import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        category: { type: Array, required: true },
        price: { type: Number, required: true },
        size: { type: String },
        color: { type: String },
    },
    { timestamps: true },
);

export default mongoose.model("Product", ProductSchema);
