export class  Negociacao {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){
       /*
            O tipo readyonly é usado para melhorar a sintaxe dos atribos somente leitura, sem ter a necessidade 
            de ser private e usar get
        */
    }

    dataFormatada():string{
        return `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()}`;
    }

    get volume(){
        return this.quantidade * this.valor;
    }
}
