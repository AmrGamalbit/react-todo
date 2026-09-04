import { useState, useEffect, useRef } from "react";
import { Check, Trash, Flag } from "lucide-react";
import { priorityStyles } from "../constants";

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);
  let checkboxBg = todo.completed ? "bg-primary" : "bg-surface";
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() === "") return;
    onEdit(editedText);
  };
  
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className="flex justify-between bg-surface items-center w-full rounded-lg py-1 px-2 mx-auto">
      <div className="flex-1">
        {isEditing ? (
          <input
            ref={inputRef}
            value={editedText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p className="text-body" onClick={() => setIsEditing(true)}>
            {todo.title}
          </p>
        )}
      </div>
      <p className="text-body shrink-0 text-sm">{todo.dueDate}</p>
      <p className="mx-5">
        <Flag
          size={20}
          className={`transition-colors duration-200 ${priorityStyles[todo.priority]}`}
        />
      </p>
      <div className="flex items-center gap-2">
        <button
          className={`w-5 h-5 border-2 border-border rounded cursor-pointer flex justify-center items-center ${checkboxBg}`}
          onClick={onToggle}
        >
          {todo.completed && (
            <Check color="#fcfaf4" size={12} strokeWidth={3} />
          )}
        </button>
        <button onClick={onDelete}>
          <Trash
            size={16}
            strokeWidth={3}
            color="gray"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
