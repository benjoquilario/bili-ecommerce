import express from "express";
import { loginUser, authenticatedUser } from "../controllers/user";

const router = express.Router();

router.post("/login", loginUser);
router.get("/users/login", authenticatedUser);

export default router;
