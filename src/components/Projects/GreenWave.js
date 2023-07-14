import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../../assets/Projects/GreenWave/greenwave-1.jpg'
import Img2 from '../../assets/Projects/GreenWave/greenwave-2.jpg'
import Img3 from '../../assets/Projects/GreenWave/greenwave-3.jpg'
import Img4 from '../../assets/Projects/GreenWave/greenwave-4.jpg'
import Img5 from '../../assets/Projects/GreenWave/greenwave-5.jpg'
import Img6 from '../../assets/Projects/GreenWave/greenwave-6.jpg'



const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions} >
      <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} />
      <img src={Img5} />
      <img src={Img6} />
    </Flickity>
  )
}

const GreenWave = () => {
  return (
    <>
      <div className="project">
        <div className="project-image">
          <div className="mac-svg">
            <div className="carousel-container">
              <Carousel />
            </div>
          </div>
        </div>
        <div className="project-info">
          <div className="info-wrapper">
            <div className="project-left">
              <div>
                <h3>GreenWave Navigator</h3>
              </div>
              <div>
                <div className="project-links">
                  <a href="https://opensealab.eu/" target="_blank" rel="noopener noreferrer">
                    <span className="link-label">Winner of the EMODNet Open Sea Lab 3.0 Hackathon!</span>
                  </a>
                </div>
                <p>The GreenWave Navigator is a mobile application I am developing with <a href="https://www.thecarbongames.com/" target="_blank" rel="noopener noreferrer">The Carbon Games.</a> It aims to help vessel operators select routes to minimize carbon emissions and environmental impact. The app generates efficient routes based on factors such as vessel traffic, weather conditions, ocean currents, and sensitive marine life.</p>
                <p>It uses MapBox GL JS and integrates WMS data from EMODNet&#39;s open source marine data with machine learning algorithms to provide environmentally friendly route recommendations.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://www.youtube.com/watch?v=lb5qn5q6dQ0&ab_channel=TheCarbonGames" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-youtube"></i>
                      <span className="link-label"> Pitch Video</span>
                    </a>
                  </div>
                  {/* <div>
                    <a href="https://github.com/kdshea/greenwave-navigator" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code in Progress</span>
                    </a>
                  </div> */}
                  {/* <div>
                    <a href="https://greenwave-navigator.onrender.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Demo</span>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="project-right">
              <div>
                <h4>Built With</h4>
              </div>
              <div className="project-icons-wrapper">
                <ul className="project-icons">
                  <li className="cell">
                    <i className="devicon-html5-plain"></i>
                    <span>HTML 5</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-css3-plain"></i>
                    <span>CSS3</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-sass-original"></i>
                    <span>Sass</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-react-original"></i>
                    <span>React</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-python-plain"></i>
                    <span>Python</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-django-plain"></i>
                    <span>Django</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-figma-plain"></i>
                    <span>Figma</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GreenWave