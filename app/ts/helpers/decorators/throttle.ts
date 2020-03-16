
/**
 * O m�todo throttle � um retardo intecional na chamada de um m�todo, assim n�o possibilitando o m�todo ser chamado
 * fora do intervalo de tempo demilitado.
 * @param milissegundos o tempo em milissegundos que a aplicar�o ir� esper� para fazer a nova requisi��o
 * 
 */
export function throttle(milissegundos = 500) {
    return function (target : any, propertyKey: string, descriptor: PropertyDescriptor){
       
        const metodoOriginal = descriptor.value; // Fun��o original
        let timer = 0;
        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this,args), milissegundos);
        }
        return descriptor;
    }
}
