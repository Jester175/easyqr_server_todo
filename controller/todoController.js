import TODO from '../models/Todo.js';
import { definitionBoardID } from '../utils/board.js'
import dotenv from 'dotenv';
dotenv.config();

class todoController {
  async createTodo(req, res) {
    try {
      const { title, description, status } = req.body;
      const boardID = definitionBoardID(status);
      const todo = new TODO({ title, description, status, boardID });
      await todo.save();
      return res.status(201).json({ todos: todo, message: `Todo was created` });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Server error' });
    }
  }

  async updateTodo(req, res) {
    try {
      const { id, title, description, status } = req.body;
      const boardID = definitionBoardID(status);
      const todo = await TODO.findOne({ _id: id });

      if (!todo) {
        return res.status(404).json({ message: `Todo not found` });
      }
      if (title) todo.title = title;
      if (description) todo.description = description;
      if (status) todo.status = status;
      todo.boardID = boardID;

      await todo.save();

      return res.status(200).json({ todo: todo, message: `Todo was updated` })
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Server error' });
    }
  }

  async getTodos(req, res) {
    try {
      const todos = await TODO.find()
      return res.status(200).json(todos);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Server error' });
    }
  }

  async deleteTodo(req, res) {
    try {
      const { id } = req.body
      await TODO.deleteOne({ _id: id });
      res.status(200).json({ message: `Todo was updated` });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Server error' });
    }
  }
}

export default new todoController();
