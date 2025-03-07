import Cardapio from "../models/Cardapio.js";
import connection from "../config/dbConnect.js";

const CardapioRepository = {

    async findAll() {
        const rows = await connection.query("select * from cardapios", []);
        return rows.map(row => new Cardapio(row.id, row.pratos_id, row.bebidas_id));
    },

    async createProject(cardapio){
        const result = await connection.query("insert into cardapios (pratos_id, bebidas_id) values (?, ?)",
            [cardapio.pratos_id, cardapio.bebidas_id]
        );
        cardapio.getId(result.insertId);
        return cardapio;
    }
}

export default CardapioRepository;
