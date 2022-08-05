import express from "express";
import {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getCarts,
} from "../controllers/cart.js";

const router = express.Router();

router.post("/", createCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);
router.get("/:id", getUserCart);
router.get("/", getCarts);

export default router;