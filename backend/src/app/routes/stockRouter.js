import express from "express";
import { getStocks } from "../controllers/stockController.js";
import roleValidationMiddleware from "../middleware/roleValidationMiddleware.js";

const stockRouter = express.Router();

stockRouter.get("/",
    roleValidationMiddleware('owner'),
    getStocks
);

export default stockRouter;
