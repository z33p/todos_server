const version = "/v1";

const root = "/api" + version;

const ApiRoutes = {
  todos: {
    all: root + "/todos",
    create: root + "/todos",
    index: root + "/todos/:todo_id",
    update: root + "/todos/:todo_id",
    patch: root + "/todos/:todo_id",
    delete: root + "/todos/:todo_id",
  }
}

module.exports = ApiRoutes;