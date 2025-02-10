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
        const {nome} = req.body;
        try {
            const novoCardapio = {nome};
            const CardapioCriado = await CardapioRepository.createProject(novoCardapio);
            res.status(201).json(cardapioCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de cardapios", err});
        }
    }

}

export default CardapioController;