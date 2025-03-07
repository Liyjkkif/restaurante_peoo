class Prato {
    constructor(id, nome, ingredientes, preco){
        this._id = id;
        this._nome = nome;
        this._ingredientes = ingredientes;
        this._preco = preco;
    }

    setId(id){
        this._id = id;
    }

    setNome(nome){
        this._nome = nome;
    }

    setIngredientes(ingredientes){
        this._ingredientes = ingredientes;
    }

    setPreco(preco){
        this._preco = preco;
    }

    getId(){
        return this._id;
    }

    getNome(){
        return this._nome;
    }

    getIngredientes(){
        return this._ingredientes;
    }

    getPreco(){
        return this._preco;
    }
}

export default Prato;
