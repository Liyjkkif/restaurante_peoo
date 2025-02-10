import Bebida from "../models/Bebida";
import connection from "../config/dbConnect.js";

const BebidaRepository = {

    async findAll() {
        const rows = await connection.query("select * from bebidas", []);
        return rows.map(row => new Bebida(row.id, row.nome));
    },

    async createProject(bebida){
        const result = await connection.query("insert into bebidas (nome) values (?)",
            [bebida.nome]
        );
        bebida.id = result.insertId;
        return bebida;
    }
}

export default BebidaRepository;