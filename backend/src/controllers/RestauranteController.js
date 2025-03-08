import RestauranteRepository from "../repositories/RestauranteRepository.js";

const RestauranteController = {

    async getAll(req, res){
        try {
            const restaurantes = await RestauranteRepository.findAll();
            res.json(restaurantes);
        }catch(err){
            res.status(500).json({error : "Erro na busca de restaurantes", err});
        }
    },

    async create(req, res) {
        const novoRestaurante = req.body;
        try {
            const restauranteCriado = await RestauranteRepository.createProject(novoRestaurante);
            res.status(201).json(restauranteCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de restaurantes", err});
        }
    }

}

export default RestauranteController;
