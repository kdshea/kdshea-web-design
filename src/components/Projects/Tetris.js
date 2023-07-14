import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../../assets/Projects/Tetris/tetris-1.jpg'
import Img2 from '../../assets/Projects/Tetris/tetris-2.jpg'
import Img3 from '../../assets/Projects/Tetris/tetris-3.jpg'
import Img4 from '../../assets/Projects/Tetris/tetris-4.jpg'
import Img5 from '../../assets/Projects/Tetris/tetris-5.jpg'


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
    </Flickity>
  )
}

const Tetris = () => {
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
                <h3>Tetris Clone</h3>
              </div>
              <div>
                <p>This is a recreation of the timeless puzzle game Tetris. The nostalgic environment features intuitive controls and a visually appealing interface.</p>
                <p>Built using HTML, CSS, and JavaScript, using DOM manipulation and event handling. The game logic is implemented using JavaScript functions, with features such as block rotation, line clearing, and score tracking.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Tetris-Clone" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://kdshea.github.io/Tetris-Clone/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Demo</span>
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
                    <i className="devicon-javascript-plain"></i>
                    <span>JavaScript</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-html5-plain"></i>
                    <span>HTML 5</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-css3-plain"></i>
                    <span>CSS3</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-github-original"></i>
                    <span>GitHub Pages</span>
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

export default Tetris