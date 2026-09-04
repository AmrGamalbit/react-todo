import { useRef } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoCounter from "./components/TodoCounter";
import EmptyState from "./components/EmptyState";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleAdd = (todoData) => {
    const newTodo = { id: Date.now(), ...todoData, completed: false };
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

  const handleAddClick = () => {
    inputRef.current.focus();
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <>
      <Header>
        <TodoCounter completedCount={completedCount} totalCount={totalCount} />
      </Header>
      <TodoForm inputRef={inputRef} onAddTodo={handleAdd} />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onClearCompleted={handleClearCompleted}
        />
      ) : (
        <EmptyState onAddClick={handleAddClick} />
      )}
    </>
  );
}

export default App;
