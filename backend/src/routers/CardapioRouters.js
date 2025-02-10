import express from "express";
import CardapioController from "../controllers/CardapioController.js";

const CardapioRouters = express.Router();

CardapioRouters.get("/", CardapioController.getAll);
CardapioRouters.post("/", CardapioController.create);

export default CardapioRouters;
