const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;
let users = [{ id: 1, name: 'Alice' }];
// READ
app.get('/users', (req, res) => res.json(users));
// CREATE
app.post('/users', (req, res) => {
  const newUser = { id: Date.now(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});
// UPDATE
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found.');
  user.name = req.body.name;
  res.json(user);
});
// DELETE
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
});
app.listen(port, () => console.log(`CRUD server on port ${port}`));
