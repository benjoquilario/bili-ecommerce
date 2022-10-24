import express from "express";
import { getFakeData } from "../controllers/seed";

const seedRouter = express.Router();

seedRouter.get("/", getFakeData);

export default seedRouter;
