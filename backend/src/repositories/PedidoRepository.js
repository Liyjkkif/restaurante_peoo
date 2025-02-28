import Pedido from "../models/Pedido.js";
import connection from "../config/dbConnect.js";

const PedidoRepository = {

    async findAll() {
        const rows = await connection.query("select * from pedidos", []);
        return rows.map(row => new Pedido(row.id, row.ingredientes, row.preco, row.quantidade_pratos, row.quantidade_bebidas, row.clientes_id));
    },

    async createProject(pedido){
        const result = await connection.query("insert into pedidos (ingredientes, preco, quantidade_pratos, quantidade_bebidas, clientes_id) values (?, ?, ?, ?, ?)",
            [pedido.ingredientes, pedido.preco, pedido.quantidade_pratos, pedido.quantidade_bebidas, pedido.clientes_id]
        );
        pedido.id = result.insertId;
        return pedido;
    }
}

export default PedidoRepository;
