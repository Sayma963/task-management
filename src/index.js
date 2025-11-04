const express = require('express');
const app = express();
const port = 3000;

// Import routes
const taskRoutes = require('./routes/tasks');

// Middleware (optional for JSON body parsing)
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
  });
});

// Task routes
app.use('/task', taskRoutes); // handles /task and /task/:id
app.use('/tasks', taskRoutes); // handles /tasks

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
