import { useState, useRef } from "react";
import { Trash } from "lucide-react";

function ProjectItem({ project, onDelete, onEdit, onSelect }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(project.title);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() === "") return;
    onEdit(project.id, editedText);
  };

  return (
    <div className="flex hover:bg-bg transition-colors p-1 rounded">
      <div className="flex-1">
        {isEditing ? (
          <input
            className="text-body"
            ref={inputRef}
            value={editedText}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        ) : (
          <p
            className="text-body select-none"
            onClick={() => onSelect(project.id)}
            onDoubleClick={() => setIsEditing(true)}
          >
            {project.title}
          </p>
        )}
      </div>
      <button onClick={() => onDelete(project.id)}>
        <Trash
          size={16}
          strokeWidth={3}
          color="gray"
          className="cursor-pointer"
        />
      </button>
    </div>
  );
}

export default ProjectItem;
