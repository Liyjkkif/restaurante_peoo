class Prato {
    constructor(id, ingredientes, preco){
        this._id = id;
        this._ingredientes = ingredientes;
        this._preco = preco;
    }

    setId(id){
        this._id = id;
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

    getIngredientes(){
        return this._ingredientes;
    }

    getPreco(){
        return this._preco;
    }
}

export default Prato;