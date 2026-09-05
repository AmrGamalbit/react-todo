import ProjectItem from "./ProjectItem";

function ProjectList({ projects, onDelete, onEdit, onSelect }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} onEdit={onEdit} onSelect={onSelect} />
      ))}
    </div>
  );
}
export default ProjectList;
