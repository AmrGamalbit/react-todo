import { useState } from "react";
import { Trash } from "lucide-react";

function ProjectItem({ project, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(project.title);

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (editedText.trim() === "") return;
    onEdit(editedText);
  };

  return (
    <div className="flex">
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
