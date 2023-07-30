import React from 'react'
// import CrowdControl from './CrowdControl'
import TruffleHealth from './TruffleHealth'
import Coconut from './Coconut'
import GreenWave from './GreenWave'
import Seeker from './Seeker'
import Destinations from './Destinations'
// import Tetris from './Tetris'

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div id="work" className="container">
        <header>
          <h2>Code Samples</h2>
          <p className="services-text">Here are some recent projects I&#39;ve worked on, showcasing my skills as a full stack developer. I&#39;m committed to creating functional and visually appealing websites that align with your business goals. </p>
        </header>
        {/* <CrowdControl /> */}
        <TruffleHealth />
        <Coconut />
        <GreenWave />
        <Seeker />
        <Destinations />
        {/* <Tetris /> */}
      </div>
      <div className="image-section palm-3"></div>
    </section>
  )
}

export default Projects