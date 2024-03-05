// import React, { useState } from 'react';
import style from '../Navbar/navbar.module.css';

function Navbar() {
  // Agregar estado para manejar el clic y expandir la línea
  // const [activeOption, setActiveOption] = useState(null);

  return (
    <nav className={style.container}>
      <div className={style.optionsContainer}>
        <ul className={style.options}>
          <li>
            <a
              href="/#frontpage"
              className={style.options1}
              // Agregar evento de clic y manejar el estado para la animación
              // onClick={() => setActiveOption("aboutMe")}
            >
              <span className={style.optionText}>About me</span>
              {/* Agregar la línea debajo de la opción */}
              <span className={style.line}></span>
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className={style.options1}
              // onClick={() => setActiveOption("projects")}
            >
              <span className={style.optionText}>Projects</span>
              <span className={style.line}></span>
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={style.options1}
              // onClick={() => setActiveOption("projects")}
            >
              <span className={style.optionText}>Contact</span>
              <span className={style.line}></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
