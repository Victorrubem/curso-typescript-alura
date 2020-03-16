
/**
 * O método throttle é um retardo intecional na chamada de um método, assim não possibilitando o método ser chamado
 * fora do intervalo de tempo demilitado.
 * @param milissegundos o tempo em milissegundos que a aplicarão irá esperá para fazer a nova requisição
 * 
 */
export function throttle(milissegundos = 500) {
    return function (target : any, propertyKey: string, descriptor: PropertyDescriptor){
       
        const metodoOriginal = descriptor.value; // Função original
        let timer = 0;
        descriptor.value = function(...args: any[]) {
            if(event) event.preventDefault();
            clearInterval(timer);
            timer = setTimeout(() => metodoOriginal.apply(this,args), milissegundos);
        }
        return descriptor;
    }
}
