// import React from 'react';
import Cards from '../../Components/Cards';
import data from '../../api/information.json';
import style from '../Projects/projects.module.css';


function Projects() {
  return (
      <div className={style.cotainer}>
        {data[0].projects.map((project, index) => (
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
