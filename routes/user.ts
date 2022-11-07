import express from "express";
import { loginUser, authUser } from "../controllers/user";
import { isAuth } from "../middleware/auth";
const router = express.Router();

router.post("/login", loginUser);
router.get("/login/user", isAuth, authUser);

export default router;
