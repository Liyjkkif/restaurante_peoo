class Restaurante {
    constructor(id, nome, endereco, telefone){
        this._id = id;
        this._nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    setId(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    setEndereco(endereco){
        this.endereco = endereco
    }

    setTelefone(telefone){
        this.telefone = telefone
    }

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }
    
    getEndereco(){
        return this._endereco;
    }

    getTelefone(){
        return this._telefone;
    }
}

export default Restaurante;