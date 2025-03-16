import express from "express";
import { generateToken } from "../controllers/tokenController.js";

const tokenRouter = express.Router();

tokenRouter.post("/", generateToken);

export default tokenRouter;
