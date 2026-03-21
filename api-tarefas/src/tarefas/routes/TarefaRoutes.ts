import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController.js";

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.post('/', controller.create);

tarefaRoutes.get('/', controller.list);

tarefaRoutes.get('/:id', controller.searchID);

tarefaRoutes.put('/:id', controller.atualizarTarefa);

tarefaRoutes.delete('/:id', controller.tarefaDelete);

export {tarefaRoutes};