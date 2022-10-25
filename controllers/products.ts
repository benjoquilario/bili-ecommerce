import mongoose from 'mongoose';
import { Request, Response } from 'express';
import Product from '../models/product';

/**
 * Get All product from database
 * @routes GET /api/products
 * @access Public
 */
export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

/**
 * Get a single product by id
 * @route GET /api/product/:id
 * @param id ID of product to fetch
 * @access Public
 */
export const getProduct = async (req: Request, res: Response) => {
  const { id: _id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No user found with id: ${_id}`);

    const user = await Product.findById(_id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send('Server Error');
  }
};
