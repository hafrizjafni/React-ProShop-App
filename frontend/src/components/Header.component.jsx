import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                alt=''
                src='/logo192.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              ProShop
            </Navbar.Brand>
          </LinkContainer>

          <Nav>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>
                <i className='fas fa-sign-in-alt'></i> Login
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
