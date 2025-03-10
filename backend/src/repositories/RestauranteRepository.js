import Restaurante from "../models/Restaurante.js";
import connection from "../config/dbConnect.js";

const RestauranteRepository = {

    async findAll() {
        const rows = await connection.query("select * from restaurantes", []);
        return rows.map(row => new Restaurante(row.id, row.nome, row.endereco, row.telefone));
    },

    async createProject(restaurante){
        const result = await connection.query("insert into restaurante (nome, endereco, telefone) values (?, ?, ?)",
            [restaurante.getNome(), restaurante.getEndereco(), restaurante.getTelefone()]
        );
        restaurante.getId(result.insertId);
        return restaurante;
    }
}

export default RestauranteRepository;

