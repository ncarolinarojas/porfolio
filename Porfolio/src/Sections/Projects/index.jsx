// import React from 'react';
import Cards from '../../Components/Cards';
import data from '../../api/information.json';
import style from '../Projects/projects.module.css';

console.log(data);

function Projects() {
  return (
    <section id='projects'>
      <h3 className={style.tittle}>Projects</h3>
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
    </section>
  );
}

export default Projects;
