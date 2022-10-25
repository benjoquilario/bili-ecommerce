import express from "express";
import { seeder } from "../controllers/seed";

const seedRouter = express.Router();

seedRouter.get("/", seeder);

export default seedRouter;
