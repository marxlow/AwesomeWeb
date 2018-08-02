import React from 'react';

const ProjectCard = ({ title, description, technology }) => {
  return (
    <div className="col-12 col-md-6">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <h4>{technology}</h4>
    </div>
  );
}

export default ProjectCard;