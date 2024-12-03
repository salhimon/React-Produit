// src/Components/Image.js
import React from 'react';
import product from '../Product';
import Card from 'react-bootstrap/Card';

const Image = () => {
  return (
    <Card.Img
      variant="top"
      src={product.image}
      alt={product.name}
    />
  );
};

export default Image;
