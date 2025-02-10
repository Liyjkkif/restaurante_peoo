class Funcionario {
    constructor(id, nome, funcao, senha_sistema){
        this._id = id;
        this._nome = nome;
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

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }

    getFuncao(){
        return this.funcao;
    }

    
    getSenha_Sistema(){
        return this.senha_sistema;
    }
}

export default Funcionario;