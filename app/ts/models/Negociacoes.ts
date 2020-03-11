class Negociacoes {

    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao : Negociacao): void{
        this.negociacoes.push(negociacao);
    }

    obtemArray() : Negociacao[]{
        return [].concat(this.negociacoes);
    }


}
