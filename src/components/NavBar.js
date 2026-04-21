import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{
      background: scrolled ? "rgba(10, 10, 10, 0.9)" : "transparent",
      padding: "18px 0",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 9999,
      transition: "background 0.3s ease"
    }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: "#fff", fontWeight: 700, fontSize: "1.5rem" }}>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: "rgba(255,255,255,0.5)" }}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              style={{ color: activeLink === 'home' ? '#aa367c' : '#fff', marginRight: 10 }}
              onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              style={{ color: activeLink === 'skills' ? '#aa367c' : '#fff', marginRight: 10 }}
              onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{ color: activeLink === 'projects' ? '#aa367c' : '#fff', marginRight: 10 }}
              onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div style={{ display: "inline-flex", gap: "10px", marginRight: "15px" }}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#fff", fontSize: "1.2rem" }}>in</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: "#fff", fontSize: "1.2rem" }}>gh</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#fff", fontSize: "1.2rem" }}>tw</a>
            </div>
            <button style={{
              background: "linear-gradient(90.21deg, #aa367c -5.91%, #4a2fbd 111.58%)",
              color: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "20px",
              fontWeight: 600,
              cursor: "pointer"
            }}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
