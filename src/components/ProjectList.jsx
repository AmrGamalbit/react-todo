import ProjectItem from "./ProjectItem";

function ProjectList({ projects, onDelete, onEdit, onSelect, currentProject }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} onEdit={onEdit} onSelect={onSelect} isSelected={project.id == currentProject} />
      ))}
    </div>
  );
}
export default ProjectList;
