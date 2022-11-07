import express from "express";
import { getProducts, getProduct } from "../controllers/products";
import { isAuth } from "../middleware/auth";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;
