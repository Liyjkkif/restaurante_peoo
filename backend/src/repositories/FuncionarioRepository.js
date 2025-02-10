import Funcionario from "../models/Funcionario.js";
import connection from "../config/dbConnect.js";

const FuncionarioRepository = {

    async findAll() {
        const rows = await connection.query("select * from restaurantes", []);
        return rows.map(row => new Funcionario(row.id, row.nome));
    },

    async createProject(funcionario){
        const result = await connection.query("insert into funcionarios (nome) values (?)",
            [funcionario.nome]
        );
        funcionario.id = result.insertId;
        return funcionario;
    }
}

export default FuncionarioRepository;