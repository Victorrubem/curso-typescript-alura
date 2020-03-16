System.register(["../views/IndexView", "../models/IndexModels", "../helpers/decorators/Index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var IndexView_1, IndexModels_1, Index_1, NegociacaoController;
    return {
        setters: [
            function (IndexView_1_1) {
                IndexView_1 = IndexView_1_1;
            },
            function (IndexModels_1_1) {
                IndexModels_1 = IndexModels_1_1;
            },
            function (Index_1_1) {
                Index_1 = Index_1_1;
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
                adiciona() {
                    const negociacao = new IndexModels_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    if (negociacao.isDiaUtil()) {
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagem.update(' Negociações cadastrada com sucesso! ');
                    }
                    else {
                        this._mensagem.update(' Somente negocia��es em dias �teis por favor!  ');
                    }
                    this._negociacoes.obtemArray().forEach(negociacao => {
                        console.log(negociacao.data);
                        console.log(negociacao.quantidade);
                        console.log(negociacao.valor);
                        console.log(negociacao.volume);
                    });
                }
                importarDados() {
                    function isResponseOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch("http://localhost:8080/dados")
                        .then(response => isResponseOk(response))
                        .then(response => response.json())
                        .then((responseJson) => {
                        responseJson.map(negociacaoJson => new IndexModels_1.Negociacao(new Date(), negociacaoJson.vezes, negociacaoJson.montante))
                            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    })
                        .catch(err => console.log(err.message));
                }
            };
            __decorate([
                Index_1.throttle()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                Index_1.throttle()
            ], NegociacaoController.prototype, "importarDados", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
