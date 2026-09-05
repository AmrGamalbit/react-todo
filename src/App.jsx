import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoCounter from "./components/TodoCounter";
import EmptyState from "./components/EmptyState";
import TodoList from "./components/TodoList";
import ProjectSidebar from "./components/ProjectSidebar";
import useCollection from "./hooks/useCollection";
import { PanelLeft } from "lucide-react";

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
    updateItem: updateProject,
    removeItem: removeProject,
  } = useCollection("projects", []);
  const [currentProjectId, setCurrentProjectId] = useState(projects[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const visibleTodos = todos.filter((todo) => todo.project == currentProjectId);

  const completedCount = visibleTodos.filter((todo) => todo.completed).length;
  const totalCount = visibleTodos.length;
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    const todo = todos.filter((todo) => todo.id == id);
    updateTodo(id, { completed: !todo.complete });
  };

  const handleAddTodo = (todoData) => {
    const newTodo = {
      ...todoData,
      completed: false,
      project: currentProjectId,
    };
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

  const handleEditProject = (id, newTitle) => {
    updateProject(id, { title: newTitle });
  };

  const handlePanelToggle = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex min-h-screen">
      {isSidebarOpen ? (
        <ProjectSidebar
          projects={projects}
          onSelect={setCurrentProjectId}
          onEdit={handleEditProject}
          onDelete={removeProject}
          onAdd={handleAddProject}
          onPanelToggle={handlePanelToggle}
        />
      ) : (<div className="bg-surface border-r border-border-strong px-2 py-5 flex items-end">
        <button
          className="text-primary hover:text-primary-hover transition-colors"
          onClick={handlePanelToggle}
        >
          <PanelLeft size={18} />
        </button></div>
      )}

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
            todos={visibleTodos}
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
