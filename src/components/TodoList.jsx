import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

function TodoList({ todos, onToggle, onEdit, onDelete, onClearCompleted }) {
  const [showTodayOnly, setShowTodayOnly] = useState(false);
  const visibleTodos = todos.filter((todo) => {
    if (!showTodayOnly) return true;
    const todayString = new Date().toLocaleDateString("en-CA");
    return todo.dueDate === todayString;
  });

  return (
    <div className="flex flex-col flex-1 gap-4 my-5 mx-auto w-1/2 h-[60vh] scrollbar-thin">
      <button
        className={`text-sm border border-primary w-fit ml-auto font-medium px-3 py-2 rounded-md transition-colors ${showTodayOnly ? "bg-primary text-surface  hover:bg-primary/50 " : "bg-surface text-primary hover:bg-primary/10"}`}
        onClick={() => setShowTodayOnly((prev) => !prev)}
      >
        Today
      </button>
      <div className="overflow-y-auto flex flex-col gap-2 flex-1 h-3/4">
        {visibleTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggle(todo.id)}
            onEdit={(newTitle) => onEdit(todo.id, newTitle)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </div>
      <button
        className="bg-primary text-surface p-2 cursor-pointer rounded-lg w-fit ml-auto"
        onClick={onClearCompleted}
      >
        Clear All Completed
      </button>
    </div>
  );
}

export default TodoList;
