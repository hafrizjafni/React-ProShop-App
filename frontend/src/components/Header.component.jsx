import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='/logo192.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            ProShop
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='/cart'>
              <i className='fas fa-shopping-cart'></i> Cart
            </Nav.Link>
            <Nav.Link href='/login'>
              <i className='fas fa-sign-in-alt'></i> Login
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
