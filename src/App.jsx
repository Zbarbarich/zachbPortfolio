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
            Hello! I'm a passionate developer dedicated to creating beautiful and functional web applications.
            With a strong foundation in modern web technologies, I love turning ideas into reality through code.
          </p>
        </div>
      </section>
      <Projects />
    </div>
    
  )
}

export default App
