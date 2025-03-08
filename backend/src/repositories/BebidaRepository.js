import Bebida from "../models/Bebida.js";
import connection from "../config/dbConnect.js";

const BebidaRepository = {

    async findAll() {
        const rows = await connection.query("select * from bebidas", []);
        return rows.map(row => new Bebida(row.id, row.nome, row.ingredientes, row.preco));
    },

    async createTabelaPedido(bebida) {
        const result = await connection.query(
            "insert into bebida (nome, ingredientes, preco) values (?, ?, ?)",
            [bebida._nome, bebida._ingreidentes, bebida._preco]
        );
        bebida = result.insertId;
        return bebida;
    }
};

export default BebidaRepository;
