import ProjectList from "./ProjectList";
import ProjectForm from "./ProjectForm";
import { PanelLeft } from "lucide-react";

function ProjectSidebar({
  projects,
  onAdd,
  onDelete,
  onEdit,
  onSelect,
  onPanelToggle,
}) {
  return (
    <aside className="bg-surface w-72 flex flex-col justify-between border-r border-border-strong px-2 py-5">
      <div className="flex-1">
        <h2 className="font-semibold text-2xl text-heading mb-5">Projects</h2>
        <div className="border-t border-mute py-5">
          <ProjectList
            projects={projects}
            onDelete={onDelete}
            onEdit={onEdit}
            onSelect={onSelect}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <ProjectForm onAdd={onAdd} />
        <div className="flex justify-between items-center text-sm bg-muted px-3 py-2 rounded text-body">
          <div>
            {projects.length} project{projects.length > 1 ? "s" : ""}
          </div>
          <button
            className="text-primary hover:text-primary-hover transition-colors"
            onClick={onPanelToggle}
          >
            <PanelLeft size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}
export default ProjectSidebar;
