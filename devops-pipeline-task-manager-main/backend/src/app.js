const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: "DevOps Task Manager API is running" });
});

app.get('/tasks', (req, res) => {
  res.json([{ id: 1, title: "Example Task" }]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
