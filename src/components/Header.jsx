import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="info" variant="primary" expand="lg" className="mb-4">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            //src="https://via.placeholder.com/150"
            src="https://picsum.photos/50"
            alt="Logo"
            className="d-inline-block align-top me-3"
          />
          <span>Tienda de articulos que complementan tu alma!</span>
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3">Destacados</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3">Electrónica</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/login" className="me-3">
              Login
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
