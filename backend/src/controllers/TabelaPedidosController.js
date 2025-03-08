import TabelaPedidos from "../models/TabelaPedidos.js";
import connection from "../config/dbConnect.js";

const TabelaPedidosRepository = {

    async findAll() {
        const rows = await connection.query("select * from pedido", []);
        return rows.map(row => new TabelaPedidos(row.id_pedido, row.data_hora, row.comanda, row.titular, row.pedido, row.quantidade, row.anotação, row.situação));
    },

    async createTabelaPedido(tabelaPedido) {
        const result = await connection.query(
            "insert into pedido (titular, comanda, pedido, quantidade, anotação) values (?, ?, ?, ?, ?)",
            [tabelaPedido._titular, tabelaPedido._comanda, tabelaPedido._pedido, tabelaPedido._quantidade, tabelaPedido._anotacao]
        );
        tabelaPedido = result.insertId;
        return tabelaPedido;
    }
};

export default TabelaPedidosRepository;
