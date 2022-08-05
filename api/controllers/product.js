import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
    try {
        const product = new Product({
            ...req.body,
        });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        next(err);
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
}

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        next(err)
    }
}