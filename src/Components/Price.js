// src/Components/Price.js
import React from 'react';
import product from '../Product';

const Price = () => {
  return (
    <p>
      <strong>Prix :</strong> {product.price}
    </p>
  );
};

export default Price;
