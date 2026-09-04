import { useState } from "react";
import { Flag } from "lucide-react";
import { priorityStyles } from "../constants";

const priorities = Object.keys(priorityStyles);

function TodoForm({ inputRef, onAddTodo }) {
  const [todoData, setTodoData] = useState({
    title: "",
    dueDate: "",
    priority: "none",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoData.title.trim() == "") {
      onAddTodo(todoData);
    }
    setTodoData({ title: "", dueDate: "", priority: "none" });
  };

  const handlePriorityChange = () => {
    setTodoData((prevData) => {
      const currentIndex = priorities.indexOf(prevData.priority);
      const nextIndex = (currentIndex + 1) % priorities.length;
      return { ...prevData, priority: priorities[nextIndex] };
    });
  };
  return (
    <form
      className="flex items-center gap-2 w-1/2 mx-auto bg-surface text-body rounded-lg"
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
      <button
        type="button"
        onClick={handlePriorityChange}
        aria-label={`Priority ${todoData.priority}`}
      >
        <Flag
          size={20}
          className={`transition-colors duration-200 ${priorityStyles[todoData.priority]}`}
        />
      </button>

      <input
        type="date"
        name="dueDate"
        value={todoData.dueDate}
        onChange={handleChange}
        className="pl-2 text-sm tracking-wider font-bold outline-none border-l border-border shrink-0"
      />
      <button className="bg-primary text-surface p-2 cursor-pointer shrink-0 rounded-r-lg">
        Add
      </button>
    </form>
  );
}
export default TodoForm;
