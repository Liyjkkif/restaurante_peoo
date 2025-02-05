import Restaurante from "../models/Restaurante.js";
import connection from "../config/dbConnect.js";

const RestauranteRepository = {

    async findAll() {
        const rows = await connection.query("select * from restaurantes", []);
        return rows.map(row => new Restaurante(row.id, row.nome));
    },

    async createProject(restaurante){
        const result = await connection.query("insert into restaurantes (nome) values (?)",
            [restaurante.nome]
        );
        restaurante.id = result.insertId;
        return restaurante;
    }
}

export default RestauranteRepository;