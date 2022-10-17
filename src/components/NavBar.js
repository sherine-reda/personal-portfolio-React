import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="container">
          <Navbar.Brand href="#home">  <img src={logo} alt="Logo" /></Navbar.Brand>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
           
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              
              <Nav.Link href="#" className="navbar-text  social-icon" > <img src={navIcon1} alt="" /></Nav.Link>
              <Nav.Link href="#" className="navbar-text  social-icon" > <img src={navIcon2} alt="" /></Nav.Link>
              <Nav.Link href="#" className="navbar-text  social-icon"  > <img src={navIcon3} alt="" /></Nav.Link>
              
            <Nav.Link href="#connect" className="navbar-text" ><button className=" vvd"><span>Let’s Connect</span></button></Nav.Link> 

            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
  )
}

export default NavBar ;