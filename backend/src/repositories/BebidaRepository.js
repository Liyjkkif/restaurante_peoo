import TabelaPedidos from "../models/TabelaPedidos.js";
import connection from "../config/dbConnect.js";

const TabelaPedidosRepository = {

    async findAll() {
        const rows = await connection.query("select * from pedido", []);
        return rows.map(row => new TabelaPedidos(row.id_pedido, row.data_hora, row.comanda, row.titular, row.pedido, row.quantidade,  row.anotação, row.situação));
    },

    async createTabelaPedido(tabelaPedido) {
        const result = await connection.query(
            "insert into pedido (data_hora, titular, comanda, pedido, quantidade, anotação, situação) values (?, ?, ?, ?, ?, ?, ?)",
            [tabelaPedido.getDataHora(), tabelaPedido.getTitular(), tabelaPedido.getComanda(), tabelaPedido.getPedido(), tabelaPedido.getQuantidade(), tabelaPedido.getAnotacao(), tabelaPedido.getSituacao()]
        );
        tabelaPedido.setIdPedido(result.insertId);
        return tabelaPedido;
    }
};

export default TabelaPedidosRepository;
