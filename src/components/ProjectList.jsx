import ProjectItem from "./ProjectItem";

function ProjectList({ projects, onDelete }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
}
export default ProjectList;
