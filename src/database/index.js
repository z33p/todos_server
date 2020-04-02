const Sequelize = require("sequelize");
const dbConfig = require("./config");

const Todo = require("../models/Todo");

const connection = new Sequelize(dbConfig);
Todo.init(connection);

module.exports = connection;

// yarn sequelize db:create doens't work with sqlite
// yarn sequelize migration:create --name=?
// yarn sequelize db:migrate

