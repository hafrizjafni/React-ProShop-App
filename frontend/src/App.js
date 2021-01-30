import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.component';
import Footer from './components/Footer.component';
import Home from './screens/Home.screen';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
