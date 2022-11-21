import React from 'react'
import Button from 'react-bootstrap/Button';

const ProductItem = ({ data, onAdd}) => {
  let { id, name, img, price} = data

  return (
    <div className='my-card'>
      <img className="img img-responsive" src={img} alt={name} />
      <h5>{name}</h5>
      <div>${price}</div>
      <div>
        <Button variant="outline-primary" onClick={() => onAdd(id)}>Agregar al carrito</Button>{' '}
      </div>
    </div>
  )
}

export default ProductItem