import React from 'react'
import CrowdControl from './CrowdControl'
import TruffleHealth from './TruffleHealth'
import Coconut from './Coconut'
import GreenWave from './GreenWave'
import Seeker from './Seeker'
import Destinations from './Destinations'
import Tetris from './Tetris'

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div id="work" className="container">
        {/* <CrowdControl /> */}
        <TruffleHealth />
        <Coconut />
        <GreenWave />
        <Seeker />
        <Destinations />
        <Tetris />
      </div>
      <div className="image-section palm-3"></div>
    </section>
  )
}

export default Projects