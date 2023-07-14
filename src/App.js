
import './styles/main.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects/Projects'
import About from './components/About'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="site-wrapper">
        <nav><NavBar /></nav>
        <section className="hero-wrapper"><Hero /></section>
        <section className="services-wrapper"><Services /></section>
        <section className="skills-wrapper"><Skills /></section>
        <section className="projects-wrapper"><Projects /></section>
        <section className="about-wrapper"><About /></section>
        <section className="consultation-wrapper"><Consultation /></section>
        <footer><Footer /></footer>
      </div>
    </div>
  )
}

export default App