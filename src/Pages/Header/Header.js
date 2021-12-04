import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Navbar fixed="top" collapseOnSelect expand="lg" style={{backgroundColor:'DarkSlateGrey'}} variant="dark">
  <Container>
  <Navbar.Brand href="#home">NA</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="#">Home</Nav.Link>
      <Nav.Link as={Link} to="#contactme">Contact Me</Nav.Link>
      <Nav.Link as={Link} to="#education">Education</Nav.Link>
      <Nav.Link as={Link} to="#aboutme">About Me</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;