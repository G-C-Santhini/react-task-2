
import './App.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div className="app-bg">
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
</div>
    </>
  );
}

export default App;
