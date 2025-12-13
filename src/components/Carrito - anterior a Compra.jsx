import React, { useContext } from 'react';
import { Container, Table, Button, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, removeFromCart, clearCart } = useContext(CartContext);

  const total = carrito.reduce(
    (acc, item) => acc + Number(item.price) * item.cantidad,
    0
  );

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu carrito está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="align-items-center mb-3">
        <Col><h3>Carrito de compras</h3></Col>
        <Col className="text-end">
          <Button variant="outline-danger" onClick={clearCart}>
            Vaciar carrito
          </Button>
        </Col>
      </Row>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>${Number(item.price).toFixed(2)}</td>
              <td>{item.cantidad}</td>
              <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5 className="text-end mt-3">
        Total a pagar: ${total.toFixed(2)}
      </h5>
    </Container>
  );
};

export default Carrito;
