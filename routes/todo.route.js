import Router from "express";
import todoController from '../controller/todoController.js'

const todoRouter = new Router();

todoRouter.post('/todo', todoController.createTodo);
todoRouter.put('/todo', todoController.updateTodo);
todoRouter.get('/todo', todoController.getTodos);
todoRouter.delete('/todo', todoController.deleteTodo);

export default todoRouter;
