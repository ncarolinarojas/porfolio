// import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './cards.module.css';

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
        <button>
          <a href={url} target="_blank" rel="noopener noreferrer">Page</a>
        </button>
        <button>
        <a href={urlgit} target="_blank" rel="noopener noreferrer">Code</a>
        </button>
      </div>
    </div>
  );
}

export default Cards;