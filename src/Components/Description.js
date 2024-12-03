// src/Components/Description.js
import React from 'react';
import product from '../Product';

const Description = () => {
  return (
    <p>
      <strong>Description :</strong> {product.description}
    </p>
  );
};

export default Description;
