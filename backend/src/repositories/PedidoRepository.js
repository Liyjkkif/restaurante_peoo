import Pedido from "../models/Pedido.js";
import connection from "../config/dbConnect.js";

const PedidoRepository = {

    async findAll() {
        const rows = await connection.query("select * from pedidos", []);
        return rows.map(row => new Pedido(row.id, row.nome));
    },

    async createProject(pedido){
        const result = await connection.query("insert into pedidos (nome) values (?)",
            [pedido.nome]
        );
        pedido.id = result.insertId;
        return pedido;
    }
}

export default PedidoRepository;
