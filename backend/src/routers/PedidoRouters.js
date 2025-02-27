import express from "express";
import PedidoController from "../controllers/PedidoController.js";

const PedidoRouters = express.Router();

PedidoRouters.get("/", PedidoController.getAll);
PedidoRouters.post("/", PedidoController.create);

export default PedidoRouters;
