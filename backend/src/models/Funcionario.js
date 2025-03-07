class Funcionario {
    constructor(id, nome, funcao, email, senha_sistema){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._funcao = funcao;
        this.senha_sistema = senha_sistema;
    }

    setId(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    setFuncao(funcao){
        this._funcao = funcao;
    }

    setEmail(email){
        this._email = email;
    }

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }

    getFuncao(){
        return this._funcao;
    }

    getEmail(){
        return this._email;
    }

    
    getSenha_Sistema(){
        return this.senha_sistema;
    }
}

export default Funcionario;
