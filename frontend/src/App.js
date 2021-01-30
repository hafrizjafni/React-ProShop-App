import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.component';
import Footer from './components/Footer.component';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1 className='text-center py-3'>Welcome to ProShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
