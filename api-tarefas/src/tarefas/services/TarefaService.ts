const tarefas: Tarefa[] = [];

interface Tarefa {
    id: number;
    title: string;
    completed: boolean;
}

class TarefaService {
    create(title: string) {
        if (!title) {
            throw new Error("Título é obrigatório");
        }

        const novaTarefa = {id: Math.random(), title, completed: false};
        tarefas.push(novaTarefa);

        return novaTarefa;
    }
    
    list() {
        return tarefas;
    }

    searchID(id: number) {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        return { title: tarefa.title, completed: tarefa.completed };
    }

    atualizarTarefa(id: number, title?: string, completed?: boolean) {
        const tarefa = tarefas.find(tarefa => tarefa.id === id);
        if (!tarefa) {
            throw new Error("Tarefa não encontrada");
        }

        if (title !== undefined) tarefa.title = title;
        if (completed !== undefined) tarefa.completed = completed;

        return tarefa;
    }

    tarefaDelete(id: number) {
        const index = tarefas.findIndex(tarefa => tarefa.id === id);
        if (index === -1) {
            throw new Error("Tarefa não encontrada");
        }

        tarefas.splice(index, 1);
    }

}

export {TarefaService};