import { useState, useEffect, useRef } from "react";
import { Check, Trash } from "lucide-react";

function TodoItem({ title, completed, onToggle, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(title);
  const handleChange = (e) => {
    setEditedText(e.target.value);
  };
  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() === "") return;
    onEdit(editedText);
  };
  let checkboxBg = completed ? "bg-primary" : "bg-surface";
  const inputRef = useRef(null);
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  return (
    <div className="flex justify-between bg-surface items-center w-1/2 rounded-lg py-1 px-2 mx-auto">
      {isEditing ? (
        <input
          ref={inputRef}
          value={editedText}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ) : (
        <p className="text-body" onClick={() => setIsEditing(true)}>
          {title}
        </p>
      )}
      <div className="flex items-center gap-2">
        <button
          className={`w-5 h-5 border-2 border-border rounded cursor-pointer flex justify-center items-center ${checkboxBg}`}
          onClick={onToggle}
        >
          {completed && <Check color="#fcfaf4" size={12} strokeWidth={3} />}
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
