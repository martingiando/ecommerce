import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './navbar.scss'

import CartIcon from '../carticon/carticon';
import { faPepperHot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="../../"><FontAwesomeIcon icon={faPepperHot} /> Pepper Hot Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="../../">Home</Nav.Link>
            <Nav.Link href="#">Contacto</Nav.Link>
          </Nav>
        <CartIcon />
        </Navbar.Collapse>
      </Navbar>
    )}

export default NavBar