import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './data';

import { notFound, errorHandler } from './middleware/errorMiddleware';

const PORT = process.env.PORT || 5000;
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.get('/api/products/:id', (req: Request, res: Response) => {
  const product = data.products.find(x => x._id === req.params.id);

  console.log(product);
  if (product) res.send(product);
  else res.status(404).send({ message: 'Product not found' });
});

app.get('/api/products', (req: Request, res: Response) => {
  res.send(data.products);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

// middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log('Hello World!!'));
