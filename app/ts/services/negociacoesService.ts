import { Negociacao, InterfaceNegociacaoParcialJson } from '../models/IndexModels';
export class NegociacoesServices {

    obterNegociacoes(funcao: HandleFunction): Promise<Negociacao[]> {
        
       return  fetch("http://localhost:8080/dados")
            .then(response => funcao(response) )
            .then(response => response.json())
            .then((responseJson: InterfaceNegociacaoParcialJson[]) => 
                responseJson.map (
                        negociacaoJson => 
                        new Negociacao(new Date(),negociacaoJson.vezes, negociacaoJson.montante)
                    )
                )
            .catch(err => {console.log(err); return null });
           
    }
}

interface HandleFunction {
    (response: Response) : Response;
}
