import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating.component';

const Product = ({ product }) => {
  return (
    <Card className='text-center my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img variant='top' src={product.image} />
      </a>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
      <Card.Text>
        <small className='text-muted'>{product.category}</small>
      </Card.Text>
    </Card>
  );
};

export default Product;
