import express from "express";
import {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getCarts,
} from "../controllers/cart.js";
import {
    verifyToken,
    verifyUser,
    verifyAdmin,
} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createCart);
router.put("/:id", verifyUser, updateCart);
router.delete("/:id", verifyUser, deleteCart);
router.get("/:id", verifyUser, getUserCart);
router.get("/", verifyAdmin, getCarts);

export default router;