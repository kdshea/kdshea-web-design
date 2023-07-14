import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../../assets/Projects/Coconut/coconut-1.jpg'
import Img2 from '../../assets/Projects/Coconut/coconut-2.jpg'
import Img3 from '../../assets/Projects/Coconut/coconut-3.jpg'
import Img4 from '../../assets/Projects/Coconut/coconut-4.jpg'
import Img5 from '../../assets/Projects/Coconut/coconut-5.jpg'
import Img6 from '../../assets/Projects/Coconut/coconut-6.jpg'



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

const Coconut = () => {
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
                <h3>Coconut Club Beach Cafe</h3>
              </div>
              <div>
                <p>The Coconut Club Website is a multi-page static site I created for the seasonal restaurant I have a co-ownership in. It offers essential business information about its menu, location, hours, and vibrant atmosphere. The site also creates a dedicated space for us to market our surf lessons and photography services.</p>
                <p>Built with modular React components and Bootstrap UI components, enhancing its visual appeal and optimizing usability across different devices. For the next iteration, I&#39;ll be integrating a booking platform and e-commerce functionality.
                </p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Coconut-Club-Site" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.coconutclubhikka.com/" target="_blank" rel="noopener noreferrer">
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
                  <li className="cell">
                    <i className="devicon-firebase-plain"></i>
                    <span>Firebase</span>
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
export default Coconut