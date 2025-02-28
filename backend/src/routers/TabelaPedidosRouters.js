import express from "express";
import TabelaPedidosController from "../controllers/TabelaPedidosController.js";

const TabelaPedidosRouters = express.Router();

TabelaPedidosRouters.get("/", TabelaPedidosController.getAll);
TabelaPedidosRouters.post("/", TabelaPedidosController.create);

export default TabelaPedidosRouters;
