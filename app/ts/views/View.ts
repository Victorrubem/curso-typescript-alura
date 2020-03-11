/* O namespace serve para facilitar o acesso de uma classe que faça parte de um determindado grupo.
    Assim o autocomplete do TypeScript ajuda a encontrar a classe através do namespace. Ex: Views.(CTRL+espco)

    Mas para a classe aparecer no auto complete, sera necessario usar o "export" para espor a classe
*/

namespace Views{
    export abstract class View<T> {
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
}
