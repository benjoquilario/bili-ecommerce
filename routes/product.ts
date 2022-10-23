import express from "express";

const router = express.Router();
import { getProducts, getProduct } from "../controllers/products";

router.get("/", getProducts);
router.get("/:id", getProduct);

export default router;
