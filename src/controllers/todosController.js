const Todo = require("../models/Todo");

module.exports = {
	async all(req, res) {
		const todos = await Todo.findAll();

		if (todos) return res.json(todos);

		return res.status(400).json({ erros: ["There's no todos."] })
	},

	async index(req, res) {
		const { todo_id } = req.params;

		const todo = await Todo.findByPk(todo_id);

		if (todo) return res.json(todo);

		return res.status(400).json({ erros: ["Todo not found."] });
	},

	async create(req, res) {
		const { title, description, is_done } = req.body;

		const todo = await Todo.create({ title, description, is_done });

		return res.status(201).json(todo);
	},

	async update(req, res) {
		const { todo_id } = req.params;

		const todo = await Todo.findByPk(todo_id);

		if (!todo) return res.status(400).json({ erros: ["Todo not found."] });

		todo.title = req.body.title;
		todo.description = req.body.description;
		todo.is_done = req.body.is_done;

		await todo.save();

		return res.sendStatus(200);
	},

	async patch(req, res) {
		const { todo_id } = req.params;

		const todo = await Todo.findByPk(todo_id);

		if (!todo) return res.status(400).json({ erros: ["Todo not found."] });

		if (req.body.title) todo.title = req.body.title;

		if (req.body.description)	todo.description = req.body.description;

		if (req.body.is_done) todo.is_done = req.body.is_done;

		await todo.save();

		return res.sendStatus(200);
	},

	async delete(req, res) {
		const { todo_id } = req.params;

		const todo = await Todo.findByPk(todo_id);

		if (!todo) return res.status(400).json({ erros: ["Todo not found."] });

		await todo.destroy();

		return res.sendStatus(204);
	}
};