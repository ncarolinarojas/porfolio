// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './View/Home';
import ProjectsView from './View/Projects';
import Contact from './Sections/Contact';



function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

