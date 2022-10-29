import express from "express";
import { loginUser, authenticatedUser } from "../controllers/user";

const router = express.Router();

router.post("/login", loginUser);
router.get("/auth/login", authenticatedUser);

export default router;
