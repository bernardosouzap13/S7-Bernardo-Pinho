import express from "express";
import { tarefaRoutes } from "./tarefas/routes/TarefaRoutes";

const app = express();
app.use(express.json());
app.use('/tarefas', tarefaRoutes);

app.listen(3333, () => {
    console.log(`Servidor rodando na porta 3333`);
})