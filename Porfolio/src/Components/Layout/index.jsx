// Layout.jsx

import React from 'react';
import style from '../Layout/layout.module.css';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
  return (
    <div className={style.containerchild}>
      <Navbar />
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Layout;
