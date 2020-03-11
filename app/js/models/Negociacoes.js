class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    obtemArray() {
        return [].concat(this.negociacoes);
    }
}
