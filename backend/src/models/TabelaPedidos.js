class TabelaPedidos {
    constructor(id_pedido, data_hora, situacao, quantidade, anotacao) {
        this._id_pedido = id_pedido;
        this._data_hora = data_hora;
        this._situacao = situacao;
        this._quantidade = quantidade;
        this._anotacao = anotacao;
    }

    setIdPedido(id_pedido) {
        this._id_pedido = id_pedido;
    }

    setDataHora(data_hora) {
        this._data_hora = data_hora;
    }

    setSituacao(situacao) {
        this._situacao = situacao;
    }

    setQuantidade(quantidade) {
        this._quantidade = quantidade;
    }

    setAnotacao(anotacao) {
        this._anotacao = anotacao;
    }

    getIdPedido() {
        return this._id_pedido;
    }

    getDataHora() {
        return this._data_hora;
    }

    getSituacao() {
        return this._situacao;
    }

    getQuantidade() {
        return this._quantidade;
    }

    getAnotacao() {
        return this._anotacao;
    }
}

export default TabelaPedidos;

