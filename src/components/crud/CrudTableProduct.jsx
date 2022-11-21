import React from 'react'

import Product from '../Product';

const CrudTableProduct = (props) => {
  const { products, onAdd } = props;
  return <>

    <div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn">
      {
        products.length === 0 ? <h1>No hay datos</h1>
          : products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd} ></Product>
          ))
      }
      <div>
      </div>
    </div>
  </>
}

export default CrudTableProduct