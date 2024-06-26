import { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Card from 'react-bootstrap/Card'
import Kate from '../assets/kate.jpg'
import UMass from '../assets/umass.jpg'
import GA from '../assets/ga.jpg'
import Unix from '../assets/unix.jpg'
import Code from '../assets/code.jpg'
import Beantown from '../assets/beantown.jpg'
// import Shanty from '../assets/shanty.jpg'
import Kdshea from '../assets/kdshea.png'
import Massasoit from '../assets/massasoit.jpg'
import Book1 from '../assets/book1.jpg'
import Book2 from '../assets/book2.jpg'
import Audiobook1 from '../assets/audiobook1.jpg'
import Podcast1 from '../assets/podcast1.jpg'
import Podcast2 from '../assets/podcast2.jpg'
import Music1 from '../assets/music1.jpg'
import images from '../Images'


const About = () => {
  const [aboutIsHidden, setAboutIsHidden] = useState('true')
  const handleAboutToggle = () => {
    if (!aboutIsHidden) {
      setGalleryIsHidden('true')
    }
    setAboutIsHidden(!aboutIsHidden)

  }
  const [galleryIsHidden, setGalleryIsHidden] = useState('true')
  const handleGalleryToggle = () => {
    setGalleryIsHidden(!galleryIsHidden)
  }

  function getEmploymentDuration(startDate) {
    const start = new Date(startDate)
    const today = new Date()
    const diff = today - start
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
    if (years < 1) {
      return `${months} mos`
    } else if (months > 0) {
      return `${years} yrs ${months} mos`
    }  else {
      return `${years} yrs`
    }
  }

  return (
    <section className="about-wrapper">
      <div id="about" className="container">

        <div className="about-flex">
          <div className="about-img">
            <img className="kate-pic" src={Kate} alt="Kate Shea" />
          </div>
          <div className="about-text">
            <header>
              <h2 className="first-line">Welcome!</h2>
              <p className="hero-green">My name is Kate Shea</p>
            </header>
            <p>As a software engineer, I thrive on solving complex problems and building innovative solutions. With over 8 years of experience with front end web development and server-side programming, I&#39;m well-equipped to tackle a wide range of development challenges and deliver end-to-end solutions. I have hands-on experience working on diverse projects, including web applications, RESTful APIs, and database management.</p>
            <p>I&#39;m excited to leverage my technical expertise to create exceptional experiences for your users. If you&#39;re interested in collaborating or have any questions, please don&#39;t hesitate to reach out. Let&#39;s connect and bring ideas to life!</p>
          </div>
        </div>
        <div className="btn call-btn links">
          <a href="https://calendly.com/kdshea/15-minute-chat" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-video call-text"></i>
            <span className="call call-text"> Schedule a Call</span>
          </a>
        </div>
        <div className="links">
          <div>
            <a href="mailto: daishea@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-square-envelope"></i> 
              <span className="link-label"> Email</span>
            </a>
          </div>
          <div> 
            <a href="https://www.linkedin.com/in/kdshea/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
              <span className="link-label"> LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://github.com/kdshea" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-github"></i>
              <span className="link-label"> GitHub</span>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/kd_shea" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-twitter"></i>
              <span className="link-label"> Twitter</span>
            </a>
          </div>          
        </div>
        <div className="btn-flex">
          <button className={ aboutIsHidden ? 'btn' : 'display-none btn' }onClick={handleAboutToggle}>More About Me <i className="fa-solid fa-arrow-down-long"></i></button>
          <button className={ aboutIsHidden ? 'display-none btn' : 'btn' }onClick={handleAboutToggle}>Less <i className="fa-solid fa-arrow-up-long"></i></button>
        </div>
      </div>
      <div id="more-about">
        <div className={ aboutIsHidden ? 'more-about display-none' : 'more-about' }>
          <div className="about-education">
            <div className="about-title">
              <div className="about-icon-flex">
                <div className="about-icon"><i className="fa-solid fa-user-graduate"></i></div>
                <h2>Education</h2>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={UMass} />
                </div>
                <Card.Body>
                  <Card.Title>Biochemical Engineering, BS</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">University of Massachusetts Amherst</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Amherst, MA 2015</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={GA} />
                </div>
                <Card.Body>
                  <Card.Title>Front End Web Development</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">General Assembly</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Boston, MA 2016</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Massasoit} />
                </div>
                <Card.Body>
                  <Card.Title>Nursing, ADN</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Massasoit Community College</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Brockton, MA 2021</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={GA} />
                </div>
                <Card.Body>
                  <Card.Title>Software Engineering</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">General Assembly</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">London, UK 2022</Card.Subtitle>
                </Card.Body>
              </Card>
              {/* <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={UMass} />
                </div>
                <Card.Body>
                  <Card.Title>Nursing RN-to-BSN, BS</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">University of Massachusetts Amherst</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">Amherst, MA 2022</Card.Subtitle>
                </Card.Body>
              </Card> */}




            </div>
          </div>
          <div className="about-background">
            <div className="about-title">
              <div className="about-icon-flex">
                <div className="about-icon"><i className="fa-solid fa-briefcase"></i></div>
                <h2>Background</h2>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Unix} />
                </div>
                <Card.Body>
                  <Card.Title>Web Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Unix Commerce · Remote</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">2023 - Now ·  {getEmploymentDuration('2023-06-01')}</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Code} />
                </div>
                <Card.Body>
                  <Card.Title>Front End Developer, Volunteer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Code for Boston · Boston, MA</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">2022 - Now ·  {getEmploymentDuration('2022-02-01')}</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Kdshea} />
                </div>
                <Card.Body>
                  <Card.Title>Full Stack Developer</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">KD Shea Web Design · Freelance</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">2021 - Now ·  {getEmploymentDuration('2021-06-01')}</Card.Subtitle>
                </Card.Body>
              </Card>
              {/* <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Shanty} />
                </div>
                <Card.Body>
                  <Card.Title>Manager</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">The Seafood Shanty, Edgartown, MA</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">2013 - 2021 · 8 yrs 7 mos</Card.Subtitle>
                </Card.Body>
              </Card> */}
              <Card>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Beantown} />
                </div>
                <Card.Body>
                  <Card.Title>Assisstant General Manager</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Beantown Pub · Boston, MA</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">2008 - 2020 · 11 yrs 10 mos</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
            {/* <div className="background-text">
              <p>In the early years of my career, I primarily focused on front-end development and utilized my skills to make updates for the restaurant groups I worked for. This involved tasks such as modifying opening hours, updating photos, and managing menus. I gained valuable experience in working with real-world clients and understanding their specific needs.</p>
              <p>In June 2021, I decided to take on a side hustle and started building static websites for local small businesses. This allowed me to further expand my skills and gain practical experience in developing sites from scratch. I dedicated my free time to crafting visually appealing and functional websites for my clients.</p>
              <p>As I progressed in my career, I realized the importance of rounding out my skill set and gaining a deeper understanding of back-end development. To achieve this, I made the decision to enroll in a program that included comprehensive training in both front-end and back-end development. This experience provided me with the knowledge and hands-on practice needed to become a well-rounded web professional.</p>
            </div> */}
          </div>
          <div className="about-reading">
            <div className="about-title">
              <a href="https://www.goodreads.com/kdshea" target="_blank" rel="noopener noreferrer">
                <div className="about-icon-flex">
                  <div className="about-icon"><i className="fa-brands fa-goodreads"></i></div>
                  <h2>Reading</h2>
                </div>
              </a>
              <div>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <Card.Header>Book · To Learn</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Book1} />
                </div>
                <Card.Body>
                  <Card.Title>Braiding Sweetgrass</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Robin Wall Kimmerer</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Book · For Fun</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Book2} />
                </div>
                <Card.Body>
                  <Card.Title>Sea of Tranquility</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Emily St. John Mandel</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Audiobook</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Audiobook1} />
                </div>
                <Card.Body>
                  <Card.Title>What Happened to You?</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Bruce D. Perry, Oprah Winfrey</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="about-listening">
            <div className="about-title">
              <a href="https://open.spotify.com/user/d8n5dvxeniup3btt90unrjuww" target="_blank" rel="noopener noreferrer">
                <div className="about-icon-flex">
                  <div className="about-icon"><i className="fa-brands fa-spotify"></i></div>
                  <h2>Listening</h2>
                </div>
              </a>
              <div>
              </div>
            </div>
            <div className="card-wrapper">
              <Card>
                <Card.Header>Podcast · To Learn</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Podcast1} />
                </div>
                <Card.Body>
                  <Card.Title>Building the Future of Microservices</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">MongoDB Podcast</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Podcast · For Fun</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Podcast2} />
                </div>
                <Card.Body>
                  <Card.Title>Sri Lanka</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Anthony Bourdain: Parts Unkown</Card.Subtitle>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>On Repeat</Card.Header>
                <div className="card-img-wrapper">
                  <Card.Img variant="top" src={Music1} />
                </div>
                <Card.Body>
                  <Card.Title>Hell N Back</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Bakar</Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="about-photography">
            <div className="about-title">
              <a href="https://flickr.com/photos/kdshea35/" target="_blank" rel="noopener noreferrer">
                <div className="about-icon-flex">
                  <div className="about-icon"><i className="fa-brands fa-flickr"></i></div>
                  <h2>Photography</h2>
                </div>
              </a>
              <div>
              </div>
            </div>
            <p>I&#39;m an amateur photographer armed with a Nikon D3300 and a love for exploration. Currently, I&#39;m working on learning ocean photography with a water housing. Post-processing with Adobe Lightroom. I share some photos I&#39;m proud of on Flickr.</p>
            <div className={ galleryIsHidden ? 'photo-wrapper display-none' : 'photo-wrapper' }>
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter='1.5rem'>
                  {images.map((image, i) => (
                    <img key={i} src={image} style={{ width: '100%', display: 'block' }}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
            <div className= {galleryIsHidden ? 'btn-flex' : 'btn-flex  hide-btn'}>
              <button className={ galleryIsHidden ? 'btn' : 'display-none btn' }onClick={handleGalleryToggle}>View Gallery <i className="fa-solid fa-arrow-down-long"></i></button>
              <button className={ galleryIsHidden ? 'display-none btn' : 'btn' }onClick={handleGalleryToggle}>Hide <i className="fa-solid fa-arrow-up-long"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section palm-4"></div>
    </section>
  )
}

export default About