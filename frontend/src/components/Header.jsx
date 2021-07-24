import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Header() {
  return (
    <header className='mb-5'>
      <Navbar bg='primary' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>business website</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='my-2 my-lg-0 justify-content-end align-items-center'
              style={{ width: "100%" }}
              navbarScroll>
              <LinkContainer to='/'>
                <Nav.Link>Fooldal</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link>Rolunk</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/services'>
                <Nav.Link>Szolgaltatasok</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/pricing'>
                <Nav.Link>Araink</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <button type='button' className='btn btn-outline-success'>
                    Kapcsolat
                  </button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
