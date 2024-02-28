// import React from 'react';
import Cards from '../../Components/Cards';
import data from '../../api/information.json';

function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      {data.map((project, index) => (
        <Cards
          key={index}
          name={project.name}
          tools={project.tools}
          description={project.description}
          image={project.image}
          url={project.URL}
          urlgit={project.URLgit}
        />
      ))}
    </div>
  );
}

export default Projects;
