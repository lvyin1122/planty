import express from "express";
import {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getAllCarts,
} from "../controllers/cart.js";

const router = express.Router();

router.post("/", createCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);
router.get("/:id", getUserCart);
router.get("/", getAllCarts);

export default router;