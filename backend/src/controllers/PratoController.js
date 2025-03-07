import Prato from "../models/Prato.js";
import connection from "../config/dbConnect.js";

const PratoRepository = {

    async findAll() {
        const rows = await connection.query("select * from pratos", []);
        return rows.map(row => new Prato(row.id, row.nome, row.ingredientes, row.preco));
    },

    async createProject(prato){
        const result = await connection.query("insert into pratos (nome, ingredientes, preco) values (?, ?, ?)",
            [prato.getNome(), prato.getIngredientes(), prato.getPreco()]
        );
        prato.getId(result.insertId);
        return prato;
    }
}

export default PratoRepository;
