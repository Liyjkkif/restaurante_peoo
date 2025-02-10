class Cardapio {
    constructor(id, pratos_id, bebidas_id){
        this._id = id;
        this._pratos_id = pratos_id;
        this.bebidas_id = bebidas_id
    }

    setId(id){
        this._id = id;
    }

    setPratos(pratos_id){
        this._pratos_id = pratos_id;
    }

    setBebidas(bebidas_id){
        this._bebidas_id = bebidas_id;
    }
    
    getId(){
        return this._id;
    }

    getPratos(){
        return this._pratos_id;
    }

    getBebidas(){
        return this.bebidas_id;
    }

}

export default Cardapio;