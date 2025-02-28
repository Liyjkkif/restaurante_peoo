import TabelaPedidos from "../models/TabelaPedidos.js";
import connection from "../config/dbConnect.js";

const TabelaPedidosRepository = {

    async findAll() {
        const rows = await connection.query("select * from TabelaPedidos", []);
        return rows.map(row => new TabelaPedidos(row.id_pedido, row.data_hora, row.situacao, row.quantidade, row.anotacao));
    },

    async createTabelaPedido(tabelaPedido) {
        const result = await connection.query(
            "insert into TabelaPedidos (data_hora, situacao, quantidade, anotacao) values (?, ?, ?, ?)",
            [tabelaPedido.getDataHora(), tabelaPedido.getSituacao(), tabelaPedido.getQuantidade(), tabelaPedido.getAnotacao()]
        );
        tabelaPedido.setIdPedido(result.insertId);
        return tabelaPedido;
    }
};

export default TabelaPedidosRepository;
