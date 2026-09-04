import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onEdit, onDelete, onClearCompleted }) {
  return (
    <div className="flex flex-col flex-1 gap-4 my-5 mx-auto w-1/2 h-[60vh] scrollbar-thin">
      <div className="overflow-y-auto flex flex-col gap-2 flex-1 h-3/4">
        {todos.map((todo) => (
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
