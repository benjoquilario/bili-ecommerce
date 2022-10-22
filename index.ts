import cors from "cors";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import data from "./data";

import { notFound, errorHandler } from "./middleware/errorMiddleware";
import seedRouter from "./routes/seed";
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes

app.use("/api/seed", seedRouter);

// app.get("/api/products/:id", (req: Request, res: Response) => {
//   const product = data.products.find((x) => x._id === req.params.id);

//   console.log(product);
//   if (product) res.send(product);
//   else res.status(404).send({ message: "Product not found" });
// });

app.get("/api/products", (req: Request, res: Response) => {
  res.send(data.products);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

// middleware
app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Running on PORT: http://localhost:${PORT}!`)
    );
  })
  .catch((err) => {
    console.log(err.message);
  });
