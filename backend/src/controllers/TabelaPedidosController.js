import TabelaPedidosRepository from "../repositories/TabelaPedidosRepository.js";

const TabelaPedidosController = {

    async getAll(req, res){
        try {
            const tabelapedidos = await TabelaPedidosRepository.findAll();
            res.json(tabelapedidos);
        }catch(err){
            res.status(500).json({error : "Erro na busca de registros de Pedidos", err});
        }
    },

    async create(req, res) {
       const novoRegistro = req.body;
        try {
            const registroCriado = await TabelaPedidosRepository.createTabelaPedido(novoRegistro);
            res.status(201).json(registroCriado);
        }catch(err){
            console.log('erro')
            res.status(500).json({error : "Erro na criação de registros de Pedidos", err});
        }
    }

}

export default TabelaPedidosController;
