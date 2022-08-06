import express from "express";
import {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getOrders,
    getUserOrders,
    getMonthlyIncome,
} from "../controllers/Order.js";
import {
    verifyToken,
    verifyUser,
    verifyAdmin,
} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyUser, createOrder);
router.put("/:id", verifyUser, updateOrder);
router.delete("/:id", verifyAdmin, deleteOrder);
router.get("/:id", verifyUser, getOrder);
router.get("/", verifyAdmin, getOrders);
router.get("/user/:id", verifyUser, getUserOrders);
router.get("/income", verifyAdmin, getMonthlyIncome);

export default router;