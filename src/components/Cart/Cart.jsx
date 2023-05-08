import { Modal, Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { cartContext } from '../Context/Context';
import useCounter from '../../hooks/useCounter';
const Cart = ({ onClose }) => {
    const { cartList, handleRemoveItem, totalPrice } = useContext(cartContext)
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header>
                <Modal.Title>Carrito de compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartList.length === 0 ? (
                    <p>Tu carrito de compras está vacío</p>
                ) : (
                    <ul>
                        {cartList.map((item) => (
                            <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                                <img src={item.picture} alt={item.Title} width="100" height="100" className="mr-3" />
                                <div>
                                    <h5>{item.Title}</h5>
                                    <p>Precio: ${item.price}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                            </div>
                        ))}
                        <hr />
                        <div className="d-flex align-items-center justify-content-between">
                            <h4>Total: ${totalPrice}</h4>
                        </div>
                    </ul>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Seguir comprando</Button>
                <Button variant="primary" disabled={cartList.length === 0}>Comprar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Cart




