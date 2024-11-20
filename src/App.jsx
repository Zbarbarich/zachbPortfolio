import { useState } from 'react'
import './App.css'
import Projects from './pages/projects'

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <h1>Welcome to My Portfolio</h1>
        <div className="intro">
          <p>
            Hello and welcome to my portfolio! I am long term IT professional currently transitioning into software development. Studying via Carnegie Mellon University's Software Engineering Bootcamp hosted by TalentSprint.
            Below I have included some of the projects I have worked on during my time at TalentSprint along with current skill set and contact information. Please feel free to reach out!
          </p>
        </div>
      </section>
      <Projects />
      
    </div>
    
  )
}

export default App
