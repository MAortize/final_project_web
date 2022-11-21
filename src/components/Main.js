import React from 'react';
import Product from './Product';

export default function Main(data) {
  const { products, onAdd } = data;
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
      <Product></Product>

    </div>
  );
}
