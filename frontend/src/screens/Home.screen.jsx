import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.component';
import products from '../products';

const Home = () => {
  return (
    <div>
      <h2 className='text-center py-3'>Latest Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
