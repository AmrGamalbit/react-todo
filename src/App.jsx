import { useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleAdd = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const handleEdit = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos(
      todos.filter((todo) => {
        todo.id !== id;
      }),
    );
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-heading flex items-center justify-center m-10">
        React ToDo
      </h2>
      <TodoForm onAddTodo={handleAdd} />
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
