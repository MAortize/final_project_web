import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Product(data) {
  const { product, onAdd } = data;
  return (
    <div className='my-card'>
      <img className="img img-responsive"  src={product.img} alt={product.name} />
      <h5>{product.name}</h5>
      <div>${product.price}</div>
      <div>
      <Button variant="outline-primary" onClick={() => onAdd(product)}>Agregar al carrito</Button>{' '}
      </div>
    </div>
  );
}
