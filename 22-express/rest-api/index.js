const express = require('express');

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todos = [
  {
    id: '1',
    text: 'Order pizza',
    completed: true
  },
  {
    id: '2',
    text: 'Pick up pizza',
    completed: false
  }
];

// get the list of todos
app.get('/todos', (req, res) => {
  return res.send({ data: { todos } });
});

// get an individual todo
app.get('/todos/:todoId', (req, res) => {
  const foundTodo = todos.find(todo => todo.id === req.params.todoId);
  return res.send({ data: foundTodo });
});

// create a new todo
app.post('/todos', (req, res) => {
  const todo = {
    id: String(todos.length + 1),
    text: req.body.text,
    completed: false
  };

  todos.push(todo);
  return res.send({ data: todo });
});

// update a todo
app.put('/todos/:todoId', (req, res) => {
  const todoIndex = todos.findIndex(todo => todo.id === req.params.todoId);
  const todo = {
    id: req.params.todoId,
    text: req.body.text || todos[todoIndex].text,
    completed: req.body.completed || todos[todoIndex].completed
  };

  todos[todoIndex] = todo;
  return res.send({ data: todo });
});

// delete a todo
app.delete('/todos/:todoId', (req, res) => {
  const deletedTodo = todos.find(todo => todo.id === req.params.todoId);
  todos = todos.filter(todo => todo.id !== req.params.todoId);
  return res.send({ data: deletedTodo });
});

// listen on port 3000 or the PORT set as an environment variable
app.listen(port, () => console.log(`Listening on port ${port}!`));
