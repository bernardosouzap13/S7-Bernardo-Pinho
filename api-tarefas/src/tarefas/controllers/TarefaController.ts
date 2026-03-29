import type { Request, Response } from "express";
import { TarefaService } from "../services/TarefaService";

class TarefaController {
    async create(req: Request, res: Response) {
        try {
            const{title} = req.body;
            
            const service= new TarefaService();
            const tarefa = await service.create(title);

            return res.status(201).json(tarefa);
        } catch (error: any) {
            return res.status(400).json({erro: error.message})
        }
    }

    async getAll(req: Request, res: Response) {
        const service = new TarefaService();
        let completed: boolean | undefined = undefined;
        if (req.query.completed !== undefined) {
            completed = req.query.completed === 'true';
        }
        const tarefas = await service.getAll(completed);
        return res.status(200).json(tarefas);
    }

    async getById(req:Request, res: Response) {
        try {
            const id = Number (req.params.id);

            const service= new TarefaService();
            const tarefa = await service.getById(Number(id));

            return res.status(200).json(tarefa);
        } catch(error:any) {
            return res.status(404).json({erro: error.message})
        }
    }
    
    async atualizarTarefa(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { title, completed } = req.body;

            const service = new TarefaService();
            const tarefa = await service.atualizarTarefa(Number(id), title, completed);

            return res.status(200).json(tarefa);
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }
    
    async tarefaDelete(req:Request, res:Response) {
        try {
            const id = Number(req.params.id);

            const service = new TarefaService();
            await service.tarefaDelete(id);

            return res.status(204).send();
        } catch (error: any) {
            return res.status(404).json({ erro: error.message });
        }
    }

}

export {TarefaController};