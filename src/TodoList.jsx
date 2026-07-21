import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onEdit, onDelete }) {
  return (
    <div className="flex flex-col gap-2 my-10">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => onToggle(todo.id)}
          onEdit={(newTitle) => onEdit(todo.id, newTitle)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
