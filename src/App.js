import React from "react";
import "./components/Navbar";
import Navbar from "./components/Navbar"; // Import the Navbar component
import "../src/App.css";
import About from "./components/About";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="header">
      <Navbar /> 
      <About />
      <Education />
      <Employment />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
