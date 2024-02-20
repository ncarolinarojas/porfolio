import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './View/Home';
import FrontPage from './Sections/FrontPage';
import Projects from './Sections/Projects';
import Navbar from './Components/Navbar';

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/#frontpage' element={<FrontPage/>}/>
      <Route path='/#projects' element={<Projects/>}/>
    </Routes>
    </>
  )
}

export default App
