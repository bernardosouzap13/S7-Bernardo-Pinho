import type { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService.js";

class TarefaController {
    create(req: Request, res: Response) {
        try {
            const{title} = req.body;
            
            const service= new TarefaService();
            const tarefa = service.create(title);

            return res.status(201).json(tarefa);
        } catch (error: any) {
            return res.status(400).json({erro: error.message})
        }
    }

    list(req: Request, res: Response) {
        const service = new TarefaService();
        let tarefas = service.list();

        if (req.query.completed !== undefined) {
            const completed = req.query.completed === 'true';
            tarefas = tarefas.filter(tarefa => tarefa.completed === completed);
        }

        return res.status(200).json(tarefas);
    }

    searchID(req:Request, res: Response) {
        try {
            const{id} = req.params;

            const service= new TarefaService();
            const tarefa = service.searchID(Number(id));

            return res.status(200).json(tarefa);
        } catch(error:any) {
            return res.status(404).json({erro: error.message})
        }
    }
    
    atualizarTarefa(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, completed } = req.body;

            const service = new TarefaService();
            const tarefa = service.atualizarTarefa(Number(id), title, completed);

            return res.status(200).json(tarefa);
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }
    
    tarefaDelete(req:Request, res:Response) {
        try {
            const{id} = req.params;

            const service = new TarefaService();
            service.tarefaDelete(Number(id));

            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }

}

export {TarefaController};