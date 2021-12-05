import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor:'DarkSlateGrey'}} variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <span style={{fontWeight:"700",color:"tomato"}}>ABDU NAIM</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#contactme">Contact Me</Nav.Link>
      <Nav.Link as={Link} to="/home#education">Education</Nav.Link>
      <Nav.Link as={Link} to="/home#aboutme">About Me</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;