import Funcionario from "../models/Funcionario.js";
import connection from "../config/dbConnect.js";

const FuncionarioRepository = {

    async findAll() {
        const rows = await connection.query("select * from funcionarios", []);
        return rows.map(row => new Funcionario(row.id, row.nome, row.funcao, row.senha_sistema));
    },

    async createProject(funcionario){
        const result = await connection.query("insert into funcionarios (nome, funcao, senha_sistema) values (?, ?, ?)",
            [funcionario.nome, funcionario.funcao, funcionario.senha_sistema]
        );
        funcionario.id = result.insertId;
        return funcionario;
    }
}

export default FuncionarioRepository;
