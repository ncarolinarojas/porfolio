// import React from 'react'
import FrontPage from "../../Sections/FrontPage";
import Projects from "../../Sections/Projects";
import style from '../Home/home.module.css';

function Home() {
  return (
    <div className={style.layout}>
        <FrontPage/>
        <Projects/>
    </div>
  )
}

export default Home;