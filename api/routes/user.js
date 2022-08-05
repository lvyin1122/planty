import express from "express";
import {
    createUser,
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getUserStats,
} from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);
router.get("/stats", getUserStats);

export default router;