import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'

const Header = () => {
    return (
        <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand><Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Меню" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/" className="links">Галерея</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/aboutMe" className="links">Обо мне</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />         
        </Container>
      </Navbar>
    )
}

export default Header