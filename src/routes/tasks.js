const express = require('express');
const router = express.Router();

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Test API with Postman', completed: true, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Refactor Code', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 5, title: 'Write Documentation', completed: false, priority: 'high', createdAt: new Date() }
];

// ✅ GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// ✅ GET /task/:id
router.get('/:id', (req, res) => {
  const taskId = req.params.id;

  // Handle invalid ID format (not a number)
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const id = parseInt(taskId);
  const task = tasks.find(t => t.id === id);

  // Handle task not found
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

module.exports = router;
