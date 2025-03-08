import BebidaRepository from "../repositories/BebidaRepository.js";

const BebidaController = {

    async getAll(req, res){
        try {
            const bebidas = await BebidaRepository.findAll();
            res.json(bebidas);
        }catch(err){
            res.status(500).json({error : "Erro na busca de bebidas", err});
        }
    },

    async create(req, res) {
        const novaBebida = req.body;
        try {
            const BebidaCriada = await BebidaRepository.createProject(novaBebida);
            res.status(201).json(BebidaCriada);
        }catch(err){
            res.status(500).json({error : "Erro na criação de bebidas", err});
        }
    }

}

export default BebidaController;
