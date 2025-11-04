# Task Management Application

This is a simple Node.js application for managing tasks. It provides RESTful API endpoints to create, read, update, and delete tasks.

## Project Structure

```
├── .gitignore
├── api-responses.txt
├── package-lock.json
├── package.json
└── src
    ├── index.js
    └── routes
        └── tasks.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the server with:
```bash
npm start
```
The server will run on `http://localhost:3000` by default.

## API Endpoints

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## License
This project is licensed under the MIT License.