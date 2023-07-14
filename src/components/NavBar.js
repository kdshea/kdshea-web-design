import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
  return (
    // <div className="nav-wrapper">
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="#">
          kdshea
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#work">Code Samples</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link className="nav-consultation" href="#consultation">Consultation</Nav.Link>
            <NavDropdown title="Contact" id="collasible-nav-dropdown">
              <NavDropdown.Item href="mailto: daishea@gmail.com?subject=Hello" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-square-envelope"></i> Email</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/kdshea/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i>  LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/kdshea" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i> GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/kd_shea" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-twitter"></i> Twitter</NavDropdown.Item>
              <NavDropdown.Item href="https://calendly.com/kdshea/15-minute-chat" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-video"></i> Video Call</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </div>
  )
}

export default NavBar