import React from 'react'
import Flickity from 'react-flickity-component'
import Img1 from '../../assets/Projects/Seeker/seeker-1.jpg'
import Img2 from '../../assets/Projects/Seeker/seeker-2.jpg'
import Img3 from '../../assets/Projects/Seeker/seeker-3.jpg'
import Img4 from '../../assets/Projects/Seeker/seeker-4.jpg'
import Img5 from '../../assets/Projects/Seeker/seeker-5.jpg'
import Img6 from '../../assets/Projects/Seeker/seeker-6.jpg'
import Img7 from '../../assets/Projects/Seeker/seeker-7.jpg'


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
      <img src={Img7} />
    </Flickity>
  )
}

const Seeker = () => {
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
                <h3>Seeker</h3>
              </div>
              <div>
                <p>Seeker is a powerful tool for job seekers, providing a centralized platform to manage job applications, track interview progress, and stay organized throughout the job search. With its intuitive interface and comprehensive features, it streamlines the job hunting experience and helps users stay on top of their career goals.</p> 
                <p>Using a Python Django REST framework to serve a PostgreSQL database to a React front-end that incorporates one-to-many and many-to-many data relationships, user login, authorization, and CRUD functionality.</p>
              </div>
              <div>
                <div className="project-links">
                  <div>
                    <a href="https://github.com/kdshea/Seeker-Full-Stack" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-square-github"></i>
                      <span className="link-label"> Code</span>
                    </a>
                  </div>
                  <div>
                    <a href="https://seeker-app-fg3m.onrender.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-solid fa-link"></i>
                      <span className="link-label"> Live Site</span>
                      <br />
                      <span className="demo">Email: demo@mail.com</span>
                      <br />
                      <span className="demo">Password: demopassword</span>
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
                    <i className="devicon-heroku-original"></i>
                    <span>Heroku</span>
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

export default Seeker