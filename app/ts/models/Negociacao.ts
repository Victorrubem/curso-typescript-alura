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

    public isDiaUtil(): boolean{
        return new Date().getDay() != DiaDaSemana.Domingo && new Date().getDay() != DiaDaSemana.Sabado;  
    }
}

enum DiaDaSemana{
    Domingo = 0,
    Segunda = 1,
    Terca   = 2,
    Quarta  = 3, 
    Quita   = 4, 
    Sexta   = 5, 
    Sabado  = 6
}
