import { NegociacaoController } from './controllers/NegociacaoController';
const negociacaoController = new NegociacaoController();
$(".form").submit(negociacaoController.adiciona.bind(negociacaoController));
$("#importar-dados").click(negociacaoController.importarDados.bind(negociacaoController));
