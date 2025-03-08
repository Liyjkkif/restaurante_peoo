import FuncionarioRepository from "../repositories/FuncionarioRepository.js";

const FuncionarioController = {

    async getAll(req, res){
        try {
            const funcionarios = await FuncionarioRepository.findAll();
            res.json(funcionarios);
        }catch(err){
            res.status(500).json({error : "Erro na busca de funcionarios", err});
        }
    },

    async create(req, res) {
        const novoFuncionario = req.body;
        try {
            const funcionarioCriado = await FuncionarioRepository.createProject(novoFuncionario);
            res.status(201).json(funcionarioCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de funcionarios", err});
        }
    }

}

export default FuncionarioController;
