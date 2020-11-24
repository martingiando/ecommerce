import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navbar.scss'

import CartIcon from '../carticon/carticon';

const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="../../">Game Masters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="../../">Home</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Todos</NavDropdown.Item>
              <NavDropdown.Item href="#">Mas comprados</NavDropdown.Item>
              <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        <CartIcon />
        </Navbar.Collapse>
      </Navbar>
    )}

export default NavBar