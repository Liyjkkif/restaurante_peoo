import Cardapio from "../models/Cardapio.js";
import connection from "../config/dbConnect.js";

const CardapioRepository = {

    async findAll() {
        const rows = await connection.query("select * from cardapios", []);
        return rows.map(row => new Cardapio(row.id, row.nome));
    },

    async createProject(cardapio){
        const result = await connection.query("insert into cardapios (nome) values (?)",
            [cardapio.nome]
        );
        cardapio.id = result.insertId;
        return cardapio;
    }
}

export default CardapioRepository;