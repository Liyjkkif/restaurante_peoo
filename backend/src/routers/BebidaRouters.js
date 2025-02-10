import express from "express";
import BebidaController from "../controllers/BebidaController.js";

const BebidaRouters = express.Router();

BebidaRouters.get("/", BebidaController.getAll);
BebidaRouters.post("/", BebidaController.create);

export default BebidaRouters;
