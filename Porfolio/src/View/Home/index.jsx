// src/View/Home.jsx
import React from 'react';
import FrontPage from "../../Sections/FrontPage";
import Layout from "../../Components/Layout";
import image from '../../assets/Fondosuperior.svg';
import style from './home.module.css';

function Home() {
  return (
    <Layout>
      <div>
        <FrontPage />
      </div>
    </Layout>
  );
}

export default Home;
