System.register(["../models/IndexModels"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IndexModels_1, NegociacoesServices;
    return {
        setters: [
            function (IndexModels_1_1) {
                IndexModels_1 = IndexModels_1_1;
            }
        ],
        execute: function () {
            NegociacoesServices = class NegociacoesServices {
                obterNegociacoes(funcao) {
                    return fetch("http://localhost:8080/dados")
                        .then(response => funcao(response))
                        .then(response => response.json())
                        .then((responseJson) => responseJson.map(negociacaoJson => new IndexModels_1.Negociacao(new Date(), negociacaoJson.vezes, negociacaoJson.montante)));
                }
            };
            exports_1("NegociacoesServices", NegociacoesServices);
        }
    };
});
