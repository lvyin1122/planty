import express from "express";
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts,
} from "../controllers/product.js";
import {
    verifyToken,
    verifyUser,
    verifyAdmin,
} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createProduct);
router.put("/:id", verifyAdmin, updateProduct);
router.delete("/:id", verifyAdmin, deleteProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);

export default router;