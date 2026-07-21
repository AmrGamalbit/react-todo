import { useState } from "react";
import "./App.css";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoCounter from "./TodoCounter";

function App() {
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

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
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header>
        <TodoCounter completedCount={completedCount} totalCount={totalCount} />
      </Header>
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
