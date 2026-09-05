import { useState, useRef } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoCounter from "./components/TodoCounter";
import EmptyState from "./components/EmptyState";
import TodoList from "./components/TodoList";
import ProjectSidebar from "./components/ProjectSidebar";
import useCollection from "./hooks/useCollection";
import { PanelLeft } from "lucide-react";
import CollapsedSidebar from "./components/CollapsedSidebar";

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
  const [currentProjectId, setCurrentProjectId] = useState(projects?.[0]?.id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const visibleTodos = todos.filter((todo) => todo.project == currentProjectId);

  const completedCount = visibleTodos.filter((todo) => todo.completed).length;
  const totalCount = visibleTodos.length;
  const inputRef = useRef(null);

  const handleToggle = (id) => {
    const todo = todos.find((todo) => todo.id == id);
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

  const getContent = () => {
    if (projects.length == 0) {
      return (
        <EmptyState
          heading="No projects yet"
          message="Create your first project to get started"
          actionLabel="Create project"
          onAction={() => setIsSidebarOpen(true)}
        />
      );
    } else if (projects.length > 1 && !currentProjectId) {
      return (
        <EmptyState
          heading="No projects selected"
          message="Select a project from the sidebar to see its tasks"
          actionLabel="View projects"
          onAction={() => setIsSidebarOpen(true)}
        />
      );
    } else if (visibleTodos.length == 0) {
      return (
        <>
          <TodoForm inputRef={inputRef} onAddTodo={handleAddTodo} />
          <EmptyState
            heading="No tasks yet"
            message="Add your first task to this project"
            actionLabel="Add task"
            onAction={() => inputRef.current.focus()}
          />
        </>
      );
    } else {
      return (
        <>
          <TodoForm inputRef={inputRef} onAddTodo={handleAddTodo} />
          <TodoList
            todos={visibleTodos}
            onToggle={handleToggle}
            onEdit={handleEditTodo}
            onDelete={removeTodo}
            onClearCompleted={handleClearCompleted}
          />
        </>
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      {isSidebarOpen ? (
        <ProjectSidebar
          projects={projects}
          currentProject={currentProjectId}
          onSelect={setCurrentProjectId}
          onEdit={handleEditProject}
          onDelete={removeProject}
          onAdd={handleAddProject}
          onToggle={handlePanelToggle}
        />
      ) : (
        <CollapsedSidebar onToggle={handlePanelToggle}/>
      )}

      <main className="flex-1">
        <Header>
          <TodoCounter
            completedCount={completedCount}
            totalCount={totalCount}
          />
        </Header>
        {getContent()}
      </main>
    </div>
  );
}

export default App;
