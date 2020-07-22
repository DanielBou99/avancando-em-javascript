class ListaNegociacoes {
    
    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes); // devolve uma lista nova para não permitir alterações na original
    }

}