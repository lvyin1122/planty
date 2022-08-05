import express from "express";
import {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts,
} from "../controllers/product.js";

const router = express.Router();

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/:id", getProduct);
router.get("/", getProducts);

export default router;