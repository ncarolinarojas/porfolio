// src/View/Home.jsx
// import React from 'react';
import FrontPage from "../../Sections/FrontPage";
import Projects from "../../Sections/Projects";
import Contact from "../../Components/Contact";
import style from '../Home/home.module.css';
import Navbar from "../../Components/Navbar";

function Home() {
  return (
    <div >
      <div className={style.container}>
        <div className={style.fixedContent}>
        <FrontPage />

        <Navbar/>
        </div>
        <div className={style.scrollableContent}>
        <Contact/>
        <Projects />
        </div>
      </div>
    </div>
  );
}

export default Home;
