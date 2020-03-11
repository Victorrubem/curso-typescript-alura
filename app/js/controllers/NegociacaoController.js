System.register(["../views/IndexView", "../models/IndexModels"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IndexView_1, IndexModels_1, NegociacaoController;
    return {
        setters: [
            function (IndexView_1_1) {
                IndexView_1 = IndexView_1_1;
            },
            function (IndexModels_1_1) {
                IndexModels_1 = IndexModels_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoes = new IndexModels_1.Negociacoes();
                    this._negociacoesView = new IndexView_1.NegociacoesView('#negociacoesView');
                    this._mensagem = new IndexView_1.MensagemView('#mensagemView');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new IndexModels_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagem.update(' Negociações cadastrada com sucesso! ');
                    this._negociacoes.obtemArray().forEach(negociacao => {
                        console.log(negociacao.data);
                        console.log(negociacao.quantidade);
                        console.log(negociacao.valor);
                        console.log(negociacao.volume);
                    });
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
