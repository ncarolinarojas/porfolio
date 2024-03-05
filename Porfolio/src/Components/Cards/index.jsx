// import React from 'react'
// import { NavLink } from 'react-router-dom'
import style from './cards.module.css';
import { FaCode } from "react-icons/fa";
import { FaPager } from "react-icons/fa";

function Cards({ name, tools, description, image, url, urlgit }) {
  return (
    <div className={`${style.card} ${style.container}`}>
      <div className={style.photo}>
        <figure>
          <img src={image} alt={name} className={style.pic} />
        </figure>
      </div>
      <div className={style.paragraph}>
        <h3>{name}</h3>
        <p>Tools: {tools}</p>
        <p>Description: {description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer"><FaPager className={style.icons}/></a>
        <a href={urlgit} target="_blank" rel="noopener noreferrer"><FaCode className={style.icons} /></a>
      </div>
    </div>
  );
}

export default Cards;