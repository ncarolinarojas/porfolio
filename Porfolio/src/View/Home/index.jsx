// src/View/Home.jsx
// import React from 'react';
import FrontPage from "../../Sections/FrontPage";
import Projects from "../../Sections/Projects";
import Contact from "../../Components/Contact";
import style from '../Home/home.module.css';

function Home() {
  return (
    <div className={style.homeContainer}>
      <div className={style.layout}>
        <FrontPage />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}

export default Home;
