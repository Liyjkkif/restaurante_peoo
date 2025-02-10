import express from "express";
import PratoController from "../controllers/PratoController.js";

const PratoRouters = express.Router();

PratoRouters.get("/", PratoController.getAll);
PratoRouters.post("/", PratoController.create);

export default PratoRouters;
