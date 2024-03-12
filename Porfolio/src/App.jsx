// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './View/Home';
import Projects from './Sections/Projects';



function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;

