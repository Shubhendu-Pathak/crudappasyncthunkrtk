import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavbarComp() {
  return (
   <>
    <Navbar expand="sm" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">RTK-Crud-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href='/'>CreatePost</Nav.Link> */}
          {/* <Nav.Link href='/alldata'>AllData</Nav.Link> */}
          <NavLink className='me-3' to='/'>Createpost</NavLink>
          <NavLink className='me-3'  to='/alldata'>AllPost</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   </>
  )
}

export default NavbarComp