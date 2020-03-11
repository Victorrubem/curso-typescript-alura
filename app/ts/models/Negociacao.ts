class  Negociacao {
/*
No typeScript, n�o � necess�rio, 
escrever as propriedades que ser�o atribuidas no construror

    private _data;
    private _quantidade;
    private _valor;
*/

    /**
     * No typeScript � poss�vel tipar as vari�veis e a sintaxe � a usada nos par�mentros desse m�todo construtor
     */
    constructor(private _data: Date, private _quantidade: number, private _valor: number){

        //Por convencao definimos a variavel com _ 
        //para snalizar para o programador que essa propriedade nao devera ser acessada fora da classe
       /*
        O typeScript � inteligente o suficiente para entender que os par�mentros passados no construtor 
        s�o os par�metros da propria classe, sem ter a necessidade de escrever todo esse c�digo abaixo:

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
