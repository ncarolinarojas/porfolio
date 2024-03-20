// Navbar.jsx

import { useState } from 'react';
import style from '../Navbar/navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={style.navbar}>
      <ul className={style.options}>
      <li>
          <NavLink to={"/"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
