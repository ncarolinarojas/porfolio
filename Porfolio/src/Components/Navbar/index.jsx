// Navbar.jsx

import { useState } from 'react';
import style from '../Navbar/navbar.module.css';

function Navbar() {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className={style.navbar}>
      <ul className={style.options}>
        <li>
          <a
            href="/#frontpage"
            className={`${style.options1} ${activeOption === "aboutMe" ? style.active : ""}`}
            onClick={() => handleOptionClick("aboutMe")}
          >
            <span className={style.optionText}>About me</span>
            <span className={style.line}></span>
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className={`${style.options1} ${activeOption === "projects" ? style.active : ""}`}
            onClick={() => handleOptionClick("projects")}
          >
            <span className={style.optionText}>Projects</span>
            <span className={style.line}></span>
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className={`${style.options1} ${activeOption === "contact" ? style.active : ""}`}
            onClick={() => handleOptionClick("contact")}
          >
            <span className={style.optionText}>Contact</span>
            <span className={style.line}></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
