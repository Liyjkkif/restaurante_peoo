import express from "express";
import FuncionarioController from "../controllers/RestauranteController.js";

const FuncionarioRouters = express.Router();

FuncionarioRouters.get("/", FuncionarioController.getAll);
FuncionarioRouters.post("/", FuncionarioController.create);

export default Funcionario.Routers;
