import mongoose from "mongoose";
import { Request, Response } from "express";
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().limit(2).sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No user found with id: ${_id}`);

    const user = await Product.findById(_id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("Server Error");
  }
};
