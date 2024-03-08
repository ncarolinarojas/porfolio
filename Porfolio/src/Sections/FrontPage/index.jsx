// FrontPage.jsx
// import React from 'react';
import style from '../FrontPage/frontpage.module.css';
import data from '../../api/information.json'

function FrontPage() {
  return (
    <section className={style.container_front} id='frontpage'>
      <div className={style.overlay}>
      </div>
      <div>
        <h1 className={style.tittle}>{data[0].profile.name}</h1>
        <h3 className={style.subtittle}>
          {data[0].profile.subtittle}
        </h3>
      </div>
      <div>
        <p className={style.paragraph}>
          {data[0].profile.paragraph}
        </p>
      </div>
      <div>
        <button>
            Descarga mi CV!
        </button>
      </div>
      <div className={style.subtittle}>
        <h3>My Skills</h3>
        <div className={style.skills}>
          {data[0].profile.skills.map((skill, index) => {
            return (
              <p key={index}> {skill} </p>
            )
          })}
        </div>

      </div>
    </section>
  );
}

export default FrontPage;
