import Cart from '../models/Cart';
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

export const createCart = async (req, res, next) => {
    try {
        const cart = new Cart({
        ...req.body,
        });
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (err) {
        next(err);
    }
    };

export const updateCart = async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }
}

export const deleteCart = async (req, res, next) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }
}

export const getUserCart = async (req, res, next) => {
    try {
        const cart = await Cart.find({ user: req.params.id });
        res.status(200).json(cart);
    } catch (err) {
        next(err);
    }
}

export const getAllCarts = async (req, res, next) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        next(err)
    }
}