import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";

function ProjectSidebar({ projects, onAdd, onDelete, onEdit, onSelect }) {
  return (
    <aside className="bg-surface w-72 flex flex-col justify-between border-r border-border-strong px-2 py-5">
      <div className="flex-1">
        <h2 className="font-semibold text-2xl text-heading mb-5">Projects</h2>
        <div className="border-t border-mute py-5">
          <ProjectList projects={projects} onDelete={onDelete} onEdit={onEdit} onSelect={onSelect} />
        </div>
      </div>
      <ProjectForm onAdd={onAdd} />
    </aside>
  );
}
export default ProjectSidebar;
