namespace Views {
     export class MensagemView extends View<string> {
    
        //Override da super classe
        template(mesagem:string):string{
            return `<p class="alert alert-info">${mesagem}</p>`;
        }
    }
}
