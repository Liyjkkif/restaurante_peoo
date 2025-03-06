class TabelaPedidos {
    constructor(id_pedido, data_hora, comanda, titular, pedido, quantidade, anotacao, situacao) {
        this._id_pedido = id_pedido;
        this._data_hora = data_hora;
        this._comanda = comanda;
        this._titular = titular;
        this._pedido = pedido;
        this._quantidade = quantidade;
        this._anotacao = anotacao;
        this._situacao = situacao;
        
        
    }

    setIdPedido(id_pedido) {
        this._id_pedido = id_pedido;
    }

    setDataHora(data_hora) {
        this._data_hora = data_hora;
    }

    setComanda(comanda){
        this._comanda = comanda;
    }

    setTitular(titular){
        this._titular = titular;
    }

    setPedido(pedido){
        this._pedido = pedido;
    }

    setQuantidade(quantidade) {
        this._quantidade = quantidade;
    }

    setAnotacao(anotacao) {
        this._anotacao = anotacao;
    }

    setSituacao(situacao) {
        this._situacao = situacao;
    }

    getIdPedido() {
        return this._id_pedido;
    }

    getDataHora() {
        return this._data_hora;
    }

    getComanda(){
        return this._comanda;
    }

    getTitular(){
        return this._titular;
    }

    getPedido(){
        return this._pedido;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getAnotacao() {
        return this._anotacao;
    }

    getSituacao(){
        return this._situacao;
    }

}

export default TabelaPedidos;

