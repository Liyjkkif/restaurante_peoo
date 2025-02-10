import express from "express";
import RestauranteController from "../controllers/RestauranteController.js";

const RestauranteRouters = express.Router();

RestauranteRouters.get("/", RestauranteController.getAll);
RestauranteRouters.post("/", RestauranteController.create);

export default RestauranteRouters;
