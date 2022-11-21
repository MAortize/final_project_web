import Header from './Header';
import Basket from './Basket';
import data from '../data';
import React, { useState, useEffect } from 'react'
import { helpFetch } from '../helpers/helpFetch'
import Form from 'react-bootstrap/Form';
import Products from './Products';

function Store() {
    

    
    const API = helpFetch()
    const [editData, setEditData] = useState(null)
    const [productsAPI, setProducts] = useState([''])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = productsAPI.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.price.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setProducts(resultadosBusqueda);
    }
    const addProduct = (product) => {
        setLoading(true)
        const options = {
            body: product
        }

        API.post("products", options).then(response => {
            if (!response.error) {
                setProducts([...productsAPI, product])
                setErrorMessage(null)
            } else {
                setProducts(null)
                setErrorMessage(response.statusText)
            }
            setLoading(false)
        })
    }

    // editar un producto
    const editProduct = (product) => {
        setLoading(true)
        const options = {
            body: product
        }

        API.put("products", options, product.id).then(response => {
            if (!response.error) {
                const newProducts = productsAPI.map(el => el.id === product.id ? product : el)
                setProducts(newProducts)
                setEditData(null)
                setErrorMessage(null)
            } else {
                setProducts(null)
                setErrorMessage(response.statusText)
            }

            setLoading(false)
        })
    }
    // Eliminar un product
    const deleteProduct = id => {
        setLoading(true)
        const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)

        if (isDelete) {
            API.del("products", id).then(response => {
                if (!response.error) {
                    const newProducts = productsAPI.filter(el => el.id !== id)
                    setProducts(newProducts)
                    setErrorMessage(null)
                } else {
                    setProducts(null)
                    setErrorMessage(response.statusText)
                }

                setLoading(false)
            })
        } else {
            setLoading(false)
        }
    }
    const onAdd = (id) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="App">
            <Header countCartItems={cartItems.length}></Header>
            <Form className="d-flex">
                <input
                    className="form-control inputBuscar"
                    value={busqueda}
                    placeholder="Búsqueda por nombre o precio"
                    onChange={handleChange}
                />
            </Form>
            <div className="row">
                <Basket
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove}
                ></Basket>
                <Products onAdd={onAdd}></Products>
                {/* <CrudTableProduct products={productsAPI} onAdd={onAdd} /> */}
            </div>
        </div>
    );
}

export default Store;
