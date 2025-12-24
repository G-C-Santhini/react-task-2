import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
 function Navbar() {
  const [open , setOpen ]=useState(false);

  return (
    <nav className="nav">
      <h2>Santhini</h2>
      <div className="menu-icon" onClick={()=>setOpen(!open)}>
        {open ?<FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${open ? "show":" "}`}>
        <li><Link to="/" onClick={()=>setOpen(false)}>Home</Link></li>
        <li><Link to="/about"onClick={()=>setOpen(false)}>About</Link></li>
        <li><Link to="/skills"onClick={()=>setOpen(false)}>Skills & Education</Link></li>
        <li><Link to="/projects"onClick={()=>setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact"onClick={()=>setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
export default Navbar;