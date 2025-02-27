import PedidoRepository from "../repositories/PedidoController.js";

const PedidoController = {

    async getAll(req, res){
        try {
            const pedidos = await PedidoRepository.findAll();
            res.json(pedidos);
        }catch(err){
            res.status(500).json({error : "Erro na busca de pedidos", err});
        }
    },

    async create(req, res) {
        const {nome} = req.body;
        try {
            const novoPedido = {nome};
            const pedidoCriado = await PedidoRepository.createProject(novoPedido);
            res.status(201).json(pedidoCriado);
        }catch(err){
            res.status(500).json({error : "Erro na criação de pedidos", err});
        }
    }

}

export default PedidoController;
