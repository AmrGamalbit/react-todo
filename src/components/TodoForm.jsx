import { useState } from "react";

function TodoForm({ inputRef, onAddTodo }) {
  const [todoData, setTodoData] = useState({ title: "", dueDate: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoData.title.trim() == "") {
      onAddTodo(todoData);
    }
    setTodoData({ title: "", dueDate: "" });
  };
  return (
    <form
      className="flex w-1/2 mx-auto bg-surface text-body rounded-lg overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        ref={inputRef}
        value={todoData.title}
        onChange={handleChange}
        placeholder="Add a task"
        className="p-2 outline-none flex-1 placeholder:text-muted"
      />
      <input
        type="date"
        name="dueDate"
        value={todoData.dueDate}
        onChange={handleChange}
        className="p-2 text-sm tracking-wider font-bold outline-none border-l border-border shrink-0"
      />
      <button className="bg-primary text-surface p-2 cursor-pointer">
        Add
      </button>
    </form>
  );
}
export default TodoForm;
