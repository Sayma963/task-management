const express = require('express');
const app = express();
const port = 3000;

// Updated tasks array with 5 tasks including priority and createdAt
const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Test API with Postman', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 4, title: 'Push code to GitHub', completed: true, priority: 'low', createdAt: new Date() },
  { id: 5, title: 'Write project README', completed: false, priority: 'high', createdAt: new Date() },
];

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// /tasks route
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
