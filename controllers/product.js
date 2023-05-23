import Product from "../models/Product.js";
import asyncHandler from "express-async-handler";

// PRODUCTS
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product)
        res.json(product);
    else
        res.status(404).json({ message: "Product not found" });
});
