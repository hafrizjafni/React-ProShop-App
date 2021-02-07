import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header.component';
import Footer from './components/footer.component';
import HomeScreen from './screens/home-screen';
import ProductScreen from './screens/product-screen';
import CartScreen from './screens/cart-screen';
import LoginScreen from './screens/login-screen';
import RegisterScreen from './screens/register-screen';
import ProfileScreen from './screens/profile-screen';
import ShippingScreen from './screens/shipping-screen';
import PaymentScreen from './screens/payment-screen';
import PlaceOrderScreen from './screens/place-order-screen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
