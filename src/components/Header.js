import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function Header(props) {
  return (

    <Nav.Link >
      {' '}
      {props.countCartItems ? (
        <label>Productos en el carrito: &nbsp; <button className="badge">{props.countCartItems}</button></label>
      ) : (
        ''
      )}
    </Nav.Link>
  );
}
