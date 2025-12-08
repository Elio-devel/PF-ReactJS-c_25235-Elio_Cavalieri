import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Header = () => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Navbar bg="info" variant="primary" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://media.istockphoto.com/id/1249219777/es/foto/concepto-de-compra-en-l%C3%ADnea-cajas-de-paquetes-o-papel-con-un-logotipo-de-carrito-de-compras-en.jpg?s=2048x2048&w=is&k=20&c=2Ny5IE_fD-NmHEkzvDRZR37IP659v4iLfx2kHMPPvGg="
            //src="https://picsum.photos/50"
            alt="Logo"
              width="60"
              height="50"
            className="d-inline-block align-top me-3"
          />
          <span>Tienda de articulos que complementan tu alma!</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3">Destacados</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/login" className="me-3">
              Login
            </Button>
            <Link to="/carrito" className="text-white position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
