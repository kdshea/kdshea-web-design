import videoBg from '../assets/Backgrounds/videoBg.mp4'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="video-container">
        <div className="content">
          <video src={videoBg} autoPlay muted />
        </div>
        <div className="hero">
          <h3>Hi, I&#39;m</h3>
          <h1>Kate Shea</h1>
          <h2>full stack eveloper | kdshea web design</h2>

          {/* <div className="hero-arrow">
            <a href="#consultation">
              <p>accepting new freelance clients and interesting project opportunities</p>
              <i className="fa-solid fa-chevron-down"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero