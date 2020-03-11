abstract class View<T> {
    private _element: JQuery;

    constructor(seletor: string){
        this._element = $(seletor);
    }

    //O método abstrato não tem implementação, obrigando a classe filha implementá-lo
    abstract template(model:T):string;

    update(model:T): void{
        this._element.html(this.template(model));
    }

}
