import React, { useEffect, useState, useContext } from 'react';
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  // Estado para mostrar el Toast
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // --- Función para recortar descripción a 90 caracteres ---
  const shortenText = (text, maxLength = 90) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    //let url = 'https://fakestoreapi.com/products';
    let url = 'https://6936099afa8e704dafbf8533.mockapi.io/Products';
    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  // Maneja el agregado al carrito + Toast
  const handleAgregar = (product) => {
    agregarAlCarrito(product);

    const descripcionCorta = shortenText(product.description);

    setToastMessage(`✔ El producto "${descripcionCorta}" -> Fue agregado correctamente!`);
    setShowToast(true);

    // Ocultar después de 2,5 segundos
    setTimeout(() => setShowToast(false), 2500);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* TOAST FLOTANTE, FIJO Y CON ANIMACIÓN */}
      <ToastContainer
        className="p-3 position-fixed top-0 end-0"
        style={{ zIndex: 9999 }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          bg="success"
          animation={true}
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* LISTA DE PRODUCTOS */}
      <Row>
        {/*
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}
        */}
        {products.map((product) => (
          <Col md={3} key={product.id} className="mb-4">
            <ProductCard
              product={product}
              agregarAlCarrito={() => handleAgregar(product)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
