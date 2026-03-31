import { Router } from "express";
import { TarefaController } from "../controllers/TarefaController";

const tarefaRoutes = Router();
const controller = new TarefaController();

tarefaRoutes.post('/', controller.create);

tarefaRoutes.get('/', controller.getAll);

tarefaRoutes.get('/:id', controller.getById);

tarefaRoutes.put('/:id', controller.atualizarTarefa);

tarefaRoutes.delete('/:id', controller.tarefaDelete);

export {tarefaRoutes}; 