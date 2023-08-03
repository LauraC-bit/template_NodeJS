const getAll = (req, res) => {
  res.json({ todos: ["get all todos", "do this"] });
};

const create = (req, res) => {
  res.status(401).json({ createdTodo: { id: 3243726478324, value: "my Todo" } });
};

export const TodoController = {
  getAll,
  create,
};
