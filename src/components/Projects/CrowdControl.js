import React from 'react'
import Flickity from 'react-flickity-component'
// import Img1 from '../../assets/Projects/CrowdControl/crowd-1.jpg'
// import Img2 from '../../assets/Projects/CrowdControl/crowd-2.jpg'
// import Img3 from '../../assets/Projects/CrowdControl/crowd-3.jpg'
// import Img4 from '../../assets/Projects/CrowdControl/crowd-4.jpg'
// import Img5 from '../../assets/Projects/CrowdControl/crowd-5.jpg'




const flickityOptions = {
  wrapAround: true,
  autoPlay: true,
  setGallerySize: false,
}

function Carousel() {
  return (
    <Flickity options={flickityOptions} >
      {/* <img src={Img1} />
      <img src={Img2} />
      <img src={Img3} />
      <img src={Img4} /> */}
    </Flickity>
  )
}

const CrowdControl = () => {
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
                <h3>CrowdControl Web & Mobile App</h3>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus laoreet arcu, a placerat ex. Mauris faucibus lectus ut efficitur lacinia</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https:github.com/kdshea/coconut-club" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://bit.ly/kdshea-recipe" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Live Site</span>
                    </a>
                  </div>
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
                    <i className="devicon-bootstrap-plain"></i>
                    <span>Bootstrap</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-react-original"></i>
                    <span>React</span>
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
export default CrowdControl