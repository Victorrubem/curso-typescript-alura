abstract class View<T> {
    private _element: JQuery;

    constructor(seletor: string){
        this._element = $(seletor);
    }

    //O m�todo abstrato n�o tem implementa��o, obrigando a classe filha implement�-lo
    abstract template(model:T):string;

    update(model:T): void{
        this._element.html(this.template(model));
    }

}
