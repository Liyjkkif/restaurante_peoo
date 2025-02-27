class Pedido{
    constructor(id, bebidas_id, pratos_id, quantidade_pratos, quantidade_bebidas, clientes_id, ){
        this.bebidas_id = bebidas_id;
        this.pratos_id = pratos_id;
        this.id = id;   
        this.quantidade_pratos = quantidade_pratos;
        this.quantidade_bebidas = quantidade_bebidas;
        this.clientes_id = clientes_id;

    }

    setClientes(clientes_id){
        this.clientes_id = clientes_id;
    }

    setBebidas(bebidas_id){
        this.bebidas_id = bebidas_id;
    }


    setId(id){
        this.id = id;
    }

    setPratos(pratos_id){
        this.pratos_id = pratos_id;
    }

    getBebidas(){
        return this.bebidas_id;
    }

    getId(){
        return this.id;
    }

    getPratos(){
        return this.pratos_id;
    }

}

export default Pedido
