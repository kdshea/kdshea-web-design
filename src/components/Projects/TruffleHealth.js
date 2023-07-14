import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../../assets/Projects/Truffle/truffle-1.jpg'
import Img2 from '../../assets/Projects/Truffle/truffle-2.jpg'
import Img3 from '../../assets/Projects/Truffle/truffle-3.jpg'
import Img4 from '../../assets/Projects/Truffle/truffle-4.jpg'
import Img5 from '../../assets/Projects/Truffle/truffle-5.jpg'




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

const TruffleHealth = () => {
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
                <h3>Truffle Health UI and Database</h3>
              </div>
              <div>
                <p>This comprehensive web app to upload medical bills was developed for <a href="https://truffle.health/" target="_blank" rel="noopener noreferrer">Truffle Health</a>, a platform focused on simplifying medical billing while incorporating algorithms to help users identify errors in their bills. Users can easily register, log in, upload itemized bill and Explanation of Benefits (EOB) images, and update their personal information. </p>
                <p>The current Truffle Health bill upload system is a simple Google Form. This UI project aims to improve the bill submission process by offering real-time feedback and validation. Leveraging the power of Django and React, the app ensures seamless data flow between the server and client to create an efficient and user-friendly healthcare management system.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Medical-Bill-Upload" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://medical-bills.onrender.com/" target="_blank" rel="noopener noreferrer">
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
                    <i className="devicon-python-plain"></i>
                    <span>Python</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-django-plain"></i>
                    <span>Django</span>
                  </li>
                  <li className="cell">
                    <i className="devicon-postgresql-plain"></i>
                    <span>PostgreSQL</span>
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
export default TruffleHealth