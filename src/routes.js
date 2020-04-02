const express = require("express");
const routes = express.Router();

const ApiRoutes = require("./contracts/ApiRoutes");
const todosController = require("./controllers/todosController");

routes.get('/', function (req, res) {
  res.json(ApiRoutes);
});

routes.get(ApiRoutes.todos.all, todosController.all);
routes.get(ApiRoutes.todos.index, todosController.index);
routes.post(ApiRoutes.todos.create, todosController.create);
routes.put(ApiRoutes.todos.update, todosController.update);
routes.patch(ApiRoutes.todos.update, todosController.patch);
routes.delete(ApiRoutes.todos.delete, todosController.delete);


module.exports = routes;