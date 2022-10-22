import express from "express";
import Product from "../models/product";
import data from "../data";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createProduct = await Product.insertMany(data.products);
  res.send({ createProduct });
});

export default seedRouter;
