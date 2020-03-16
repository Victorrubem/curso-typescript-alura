import { MensagemView,NegociacoesView } from '../views/IndexView';
import { Negociacao,Negociacoes,InterfaceNegociacaoParcialJson } from '../models/IndexModels';



export class NegociacaoController {
    private _inputData : JQuery;
    private _inputQuantidade : JQuery;
    private _inputValor : JQuery;
    private _negociacoes : Negociacoes;
    private _negociacoesView : NegociacoesView;
    private _mensagem : MensagemView;

/*
07 - Casting explícito
		Quando ativamos a propriedade "noImplicitAny" : true , devemos tipar todos os demais atributos, e quando retornamos um atributo da página HTML usando o DOM, devemos especificar também o tipo desse atributo. 
		Ex: Na classe NegociacaoController temos o atributo this._inputData = document.querySelector("#data"); que por padrão retorna um "Element" (qualquer elemento html), porém iremos precisar obter o valor desse input  ->   this._inputData.value. Como Element não tem a propriedade .value devemos fazer um casting para o HtmlInputElement e para fazer esse casting a sintaxe seria da seguinte maneira:
			private _inputData : HtmlInputElement;
			this._inputData = <HtmlInputElement>document.querySelector("#data");
			
		Aí sim conseguimos obter o atributo .value da propriedade this._inputData, já que é um método do HtmlInputElement

*/

    constructor(){
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        this._mensagem = new MensagemView('#mensagemView');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        /*
        Para podermos enviar os dados para o construtor que espera as propriedades tipadas
        devemos realizar o parse desses dados, e como o new Date() espera uma String no formato dd,mm,yyyy 
        e nosso front retorna dd-mm-yyyy é necessário realizar um replace para substituir os - por ,
        */
        const negociacao = new Negociacao (
            new Date(this._inputData.val().replace(/-/g,",")), 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
            );

            if(negociacao.isDiaUtil()){
                this._negociacoes.adiciona(negociacao);
                this._negociacoesView.update(this._negociacoes);
                this._mensagem.update(' NegociaÃ§Ãµes cadastrada com sucesso! ');
            }else{
                this._mensagem.update(' Somente negociações em dias úteis por favor!  ');
            }


            this._negociacoes.obtemArray().forEach(negociacao =>{
                console.log(negociacao.data);
                console.log(negociacao.quantidade);
                console.log(negociacao.valor);
                console.log(negociacao.volume);
            });
    }

    importarDados(): void {

        function isResponseOk(res:  Response){
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }
        }

        fetch("http://localhost:8080/dados")
            .then(response => isResponseOk(response) )
            .then(response => response.json())
            .then((responseJson: InterfaceNegociacaoParcialJson[]) => {
                responseJson.map(
                    negociacaoJson => new Negociacao(new Date(),negociacaoJson.vezes, negociacaoJson.montante)
                )
                .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(err => console.log(err.message));
    }

}
