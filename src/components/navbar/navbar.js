import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import CartIcon from '../carticon/carticon';
import { faDivide } from '@fortawesome/free-solid-svg-icons';

const Menu = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Game Masters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Todos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mas comprados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscador" className="mr-sm-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        <CartIcon />
        </Navbar.Collapse>
      </Navbar>
    )}

export default Menu