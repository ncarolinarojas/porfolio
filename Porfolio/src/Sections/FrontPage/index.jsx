// FrontPage.jsx
import React from 'react';
import style from '../FrontPage/frontpage.module.css';

function FrontPage() {
  return (
    <div className={style.container_front}>
      <div className={style.overlay}>
      </div>
      <div>
        <h1 className={style.tittle}>Natalia Rojas</h1>
        <h3 className={style.subtittle}>
          Fullstack Developer / Business Management
        </h3>
      </div>
      <div>
        <p className={style.paragraph}>
          I'm a FullStack Developer passionate about new technologies with solid knowledge in tools like Node.js, Amazon Web Services AWS, Express, Sequelize, PostgreSQL, React.js, Redux, and Bootstrap. Also, I'm a lover of languages; currently, I'm at a B2 level in English and business management, with experience in sales and purchasing analytics. In addition, I love working in a team, and I am passionate about leadership. Likewise, I like to solve problems with comprehensive solutions; I am responsible and proactive.
        </p>
      </div>
      <div className={style.subtittle}>
        <h3>My Skills</h3>
        <div className={style.skills}>
          <p>Javascript</p>
          <p>Node.js</p>
          <p>Express</p>
          <p>Sequelize</p>
          <p>PostgreSQL</p>
          <p>React.js</p>
          <p>AWS</p>
          <p>Boostrap</p>
        </div>

      </div>
    </div>
  );
}

export default FrontPage;
