import Prato from "../models/Prato.js";
import connection from "../config/dbConnect.js";

const PratoRepository = {

    async findAll() {
        const rows = await connection.query("select * from pratos", []);
        return rows.map(row => new Prato(row.id, row.nome));
    },

    async createProject(prato){
        const result = await connection.query("insert into pratos (nome) values (?)",
            [prato.nome]
        );
        prato.id = result.insertId;
        return prato;
    }
}

export default PratoRepository;
