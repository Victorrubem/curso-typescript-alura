class  Negociacao {
/*
No typeScript, não é necessário, 
escrever as propriedades que serão atribuidas no construror

    private _data;
    private _quantidade;
    private _valor;
*/

    /**
     * No typeScript é possível tipar as variáveis e a sintaxe é a usada nos parâmentros desse método construtor
     */
    constructor(private _data: Date, private _quantidade: number, private _valor: number){

        //Por convencao definimos a variavel com _ 
        //para snalizar para o programador que essa propriedade nao devera ser acessada fora da classe
       /*
        O typeScript é inteligente o suficiente para entender que os parâmentros passados no construtor 
        são os parâmetros da propria classe, sem ter a necessidade de escrever todo esse código abaixo:

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        */
    }

    dataFormatada():string{
        return `${this._data.getDate()}/${this._data.getMonth()}/${this._data.getFullYear()}`;
    }

    get  data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this.quantidade * this._valor;
    }
}
