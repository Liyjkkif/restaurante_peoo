import CardapioRepository from "../repositories/CardapioRepository.js";

const CardapioController = {

    async getAll(req, res){
        try {
            const cardapios = await CardapioRepository.findAll();
            res.json(cardapios);
        }catch(err){
            res.status(500).json({error : "Erro na busca de cardapios", err});
        }
    },

    async create(req, res) {
        const novoCardapio = req.body;
        try {
            const CardapioCriado = await CardapioRepository.createProject(novoCardapio);
            res.status(201).json(CardapioCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de cardapios", err});
        }
    }

}

export default CardapioController;
