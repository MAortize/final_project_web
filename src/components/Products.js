import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { noAction, readAllAction } from '../actions/productsActions';
import { helpFetch } from '../helpers/helpFetch';
import ProductItem from './ProductItem';

const Products = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch();

    const {db} = state.product

    const api = helpFetch()
    
    useEffect(() => {
      api.get("products").then((res) => {
        if (!res.error) {
            dispatch(readAllAction(res))
            console.log(res);
        } else {
            dispatch(noAction())
        }
      })
    }, ["products",dispatch])
    

  return (
    <div>
        <article className="box grid-responsive">
        {db.map((product) => <ProductItem key={product.id} data={product}/>)}
        </article>
    </div>
  )
}

export default Products