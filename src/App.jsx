import { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoCounter from "./components/TodoCounter";
import EmptyState from "./components/EmptyState";
import TodoList from "./components/TodoList";
import ProjectSidebar from "./components/ProjectSidebar";
import useCollection from "./hooks/useCollection";

function App() {
  const {
    items: todos,
    setItems: setTodos,
    addItem: addTodo,
    updateItem: updateTodo,
    removeItem: removeTodo,
  } = useCollection("todos", []);

  const {
    items: projects,
    addItem: addProject,
    removeItem: removeProject,
  } = useCollection("projects", []);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    const todo = todos.filter((todo) => todo.id == id)
    updateTodo(id, {completed: !todo.complete})
  };

  const handleAddTodo = (todoData) => {
    const newTodo = { ...todoData, completed: false };
    addTodo(newTodo);
  };

  const handleEditTodo = (id, newTitle) => {
    updateTodo(id, { title: newTitle });
  };

  const handleAddClick = () => {
    inputRef.current.focus();
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const handleAddProject = (project) => {
    const newProject = { title: project };
    addProject(newProject);
  };

  return (
    <div className="flex min-h-screen">
      <ProjectSidebar
        projects={projects}
        onDelete={removeProject}
        onAdd={handleAddProject}
      />
      <main className="flex-1">
        <Header>
          <TodoCounter
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </Header>
        <TodoForm inputRef={inputRef} onAddTodo={handleAddTodo} />
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            onToggle={handleToggle}
            onEdit={handleEditTodo}
            onDelete={removeTodo}
            onClearCompleted={handleClearCompleted}
          />
        ) : (
          <EmptyState onAddClick={handleAddClick} />
        )}
      </main>
    </div>
  );
}

export default App;
