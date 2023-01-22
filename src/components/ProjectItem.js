import React from "react";

function ProjectItem({ name, about, technologies }) {


  const oneTechnology = technologies.map((namedTechnoly)=>{
return
  <span key={namedTechnoly}>{namedTechnoly}</span>

  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span>{technologies}</span>
        <div className="technologies">
          {oneTechnology}
        </div>
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
