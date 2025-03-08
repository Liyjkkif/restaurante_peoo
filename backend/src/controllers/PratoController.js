import PratoRepository from "../repositories/PratoRepository.js";

const PratoController = {

    async getAll(req, res){
        try {
            const pratos = await PratoRepository.findAll();
            res.json(pratos);
        }catch(err){
            res.status(500).json({error : "Erro na busca de pratos", err});
        }
    },

    async create(req, res) {
        const novoPrato = req.body;
        try {
            const PratoCriado = await PratoRepository.createProject(novoPrato);
            res.status(201).json(PratoCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de pratos", err});
        }
    }

}

export default PratoController;
