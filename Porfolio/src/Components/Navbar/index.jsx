// import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO_NR.svg';
import style from '../Navbar/navbar.module.css';

function Navbar() {
  return (
    <nav className={style.container}>
      <div className={style.logoContainer}>
        <NavLink to={'/#frontpage'}>
          <figure>
            <img src={logo} alt="logo" className={style.logo} />
          </figure>
        </NavLink>
      </div>
      <div className={style.optionsContainer}>
        <ul className={style.options}>
          <li>
            <NavLink to={'/#frontpage'} className={style.options1}>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to={'/#projects'} className={style.options1}>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
