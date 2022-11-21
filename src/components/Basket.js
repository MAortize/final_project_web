import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
export default function Basket(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (

    <Card style={{ width: '15rem' }}>
      <Button variant="primary" onClick={handleShow}>
        Ver carrito de compras
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {cartItems.length === 0 && <div>Carrito vacío</div>}
            {cartItems.length > 0 && <div>Productos agregados</div>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <Button variant="danger" onClick={() => onRemove(item)} className="remove">-</Button>{' '}
                <Button variant="primary" onClick={() => onAdd(item)} className="add">+</Button>{' '}
              </div>

              <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Precio productos</div>
                <div className="col-3 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              {/* <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div> */}
              <div className="row">
                <div className="col-2">Envio</div>
                <div className="col-3 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total</strong>
                </div>
                <div className="col-3 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">

              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {cartItems.length >0 && <Button variant="primary" onClick={handleClose}>
            Hacer pedido
          </Button>}
        </Modal.Footer>
      </Modal>
    </Card>
  );
}
