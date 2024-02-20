// import React from 'react';
import style from '../FrontPage/frontpage.module.css';
import Contact from '../../Components/Contact';

function FrontPage() {
  return (
    <div className={style.cotainer_front}>
      <h1 className={style.tittle}>Natalia Rojas</h1>
      <h3 className={style.subtittle}>
        Fullstack Developer / Business Management
      </h3>
      <p className={style.paragraph}>
      I am a Web Developer and Business Administrator passionate about technology and continuous learning, both in technology and in language learning.
I currently have solid and demonstrable knowledge of tools such as React.js, Node.js, PostgreSQL, Sequelize, AWS, using the Javascript programming language. Likewise, I have skills in communication, teamwork, leadership and sales in my capacity as a Business Administrator, which allows me to prioritize what a client needs, organize, direct and seek effective and comprehensive solutions to problems.
      </p>
      <Contact/>
    </div>
  )
}

export default FrontPage