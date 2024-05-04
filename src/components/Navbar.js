import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import './Navbar.css'

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
        <h3>Nikshep</h3>
        <nav ref={navRef}> 
          <a href='#about'>About Me</a>
          <a href='#education'>Work Experience</a>
          <a href='#achievements'>Achievements</a>
          <a href='#skills'>Skills</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}> 
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
  );
};

export default Navbar;

