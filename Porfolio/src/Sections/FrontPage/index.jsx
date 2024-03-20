import React from 'react';
import style from '../FrontPage/frontpage.module.css';
import data from '../../api/information.json';
import pdfLink from '../../assets/CVNataliaRojas.pdf';
import { Link } from 'react-router-dom';
import node from '../../assets/node.svg';
import react from '../../assets/react.svg';
import javascript from '../../assets/javascript.svg';
import htmlcss from '../../assets/csshtml.svg';
import redux from '../../assets/redux.svg';
import sql from '../../assets/sql.svg';
import tailwind from '../../assets/tailwind.svg';

function FrontPage() {
  const skills = data[0].profile.skills;

  return (
    <div className={style.container_front} id='frontpage'>
      <div className={style.centered}>
        <h3 className={style.subtittle}>
          {data[0].profile.subtittle}
        </h3>
      </div>
      <div className={style.centered}>
        <h1>
          Hello! My name is {data[0].profile.name}
        </h1>
      </div>
      <div className={style.centered}>
        <p className={style.paragraph}>
          {data[0].profile.paragraph}
        </p>
      </div>
      <div className={style.centered}>
        <div>
          <button className={style.shimmering}>
            <Link to="https://www.linkedin.com/in/natalia-rojas-388418232/" target="_blank" rel="noopener noreferrer"> LinkedIn</Link>
          </button>
          <button className={style.shimmering}>
            <a href={pdfLink} download="CVNataliaRojas.pdf" target='_blank' rel='noopener noreferrer'>Download CV</a>
          </button>
        </div>
      </div>
      <div className={style.centered}>
        <h3>Skills</h3>
      </div>
      <div className={style.brands_list}>
        <div className={style.skills}>
          {skills.map((skill, index) => (
            <img key={index} src={getSkillImage(index)} alt={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

function getSkillImage(index) {
  switch (index % 6) {
    case 0:
      return node;
    case 1:
      return react;
    case 2:
      return javascript;
    case 3:
      return htmlcss;
    case 4:
      return redux;
    case 5:
      return sql;
    default:
      return null;
  }
}

export default FrontPage;
