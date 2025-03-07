import express from "express";
import FuncionarioController from "../controllers/FuncionarioController.js";

const FuncionarioRouters = express.Router();

FuncionarioRouters.get("/", FuncionarioController.getAll);
FuncionarioRouters.post("/", FuncionarioController.create);

export default FuncionarioRouters;
