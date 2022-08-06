import express from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getUserStats,
} from "../controllers/user.js";
import {
    verifyUser,
    verifyAdmin,
} from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyAdmin, getUser);
router.get("/", verifyAdmin, getUsers);
router.get("/stats", verifyAdmin, getUserStats);

export default router;