import { prisma } from "../../config/prismaClient";

const tarefas: Tarefa[] = [];

interface Tarefa {
    id: number;
    title: string;
    completed: boolean;
}

class TarefaService {
    async create(title: string) {
        if (!title) {
            throw new Error("Título é obrigatório");
        }

        const novaTarefa = await prisma.task.create({
            data: {
                title: title,
            }
        });
        return novaTarefa;
    }
    
    async getAll(completed?: boolean) {
        const where = completed !== undefined ? { completed } : undefined;
        const allTasks = await prisma.task.findMany({ where });
        return allTasks;
    }

    async getById(id: number) {
        const tarefa = await prisma.task.findUnique({where: {id}});
        
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        return { title: tarefa.title, completed: tarefa.completed };
    }

    async atualizarTarefa(id: number, title?: string, completed?: boolean) {
        const tarefa = await prisma.task.findUnique({where: {id}});

        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }
        
        const data: any = {};
        if (title !== undefined) data.title = title;
        if (completed !== undefined) data.completed = completed;

        const tarefaAtualizada = await prisma.task.update({where: {id}, data})
        
        return tarefaAtualizada;
    }

    async tarefaDelete(id: number) {
        const tarefa = await prisma.task.findUnique({where:{id}});

        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        const tarefaDeletada = await prisma.task.delete({where: {id}});
    }

}

export {TarefaService};