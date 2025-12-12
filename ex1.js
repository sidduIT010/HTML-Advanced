const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const name = req.query.name || 'Guest';
  res.send(`User ID: ${id}, Name: ${name}`);
});

app.get('/go/:id', (req, res) => {
  const id = req.params.id;
  const url = `/user/${id}?name=Express`;
  res.redirect(url);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
