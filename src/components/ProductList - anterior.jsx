import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

    useEffect(() => 
    {
    //let url = 'https://fakestoreapi.com/products';
    let url = 'https://6936099afa8e704dafbf8533.mockapi.io/Products';
    if (category) 
    {
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

  //   const handleAgregarAlCarrito = (product) => {
  //   alert(`Producto ${product.title} agregado al carrito`);
  // };

  if (loading) {
    return <div>Loading...</div>;
  }  

  return (
    <Row>
      {products.map((product) => (
        <Col md={3} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
