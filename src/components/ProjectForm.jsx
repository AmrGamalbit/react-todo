import { useState } from "react";

function ProjectForm({ onAdd }) {
  const [project, setProject] = useState("");

  const handleChange = (e) => {
    setProject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project.trim() == "") {
      onAdd(project);
    }
    setProject("");
  };

  return (
    <form
      className="flex items-center gap-2 bg-bg border-2 border-border-strong text-body rounded-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="title"
        value={project}
        onChange={handleChange}
        placeholder="Add a Project"
        className="p-2 outline-none flex-1 placeholder:text-muted"
      />
      <button className="bg-primary text-surface p-2 cursor-pointer shrink-0 rounded-r-lg">
        Add
      </button>
    </form>
  );
}
export default ProjectForm;
