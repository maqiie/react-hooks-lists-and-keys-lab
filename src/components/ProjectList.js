import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

const oneProject = projects.map((project)=>{
  return (
<ProjectItem  key={projects.id} name = {project.name} about = {project.about} technologies = {project.technologies}/>
      
  );
})
console.log(oneProject)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {oneProject}
      </div>
    </div>
  );
}

export default ProjectList;
