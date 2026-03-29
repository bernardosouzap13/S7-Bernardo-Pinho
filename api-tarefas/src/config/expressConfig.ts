import express from "express";
import { tarefaRoutes } from "../tarefas/routes/TarefaRoutes";

const app = express();
app.use(express.json());
app.use('/tarefas', tarefaRoutes);

export{app};