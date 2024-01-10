import { Container, Row, Col, Button } from "react-bootstrap";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const ProductsC = () => {
  // Lista de products (puedes reemplazarla con tus propios datos)
  const products = [
    { id: 1, name: "Producto 1", price: "$10" },
    { id: 2, name: "Producto 2", price: "$15" },
    { id: 3, name: "Producto 3", price: "$10" },
    { id: 4, name: "Producto 4", price: "$15" },
    { id: 5, name: "Producto 5", price: "$10" },
    { id: 6, name: "Producto 6", price: "$15" },
    // ... más products
  ];

  // Función para manejar el click en el botón de favoritos
  const handleFavoriteClick = (productId) => {
    // Lógica para marcar/desmarcar como favorito el producto
    console.log(`Producto ${productId} marcado como favorito`);
  };

  // Función para manejar el click en el botón de compra
  const handleBuyClick = (productId) => {
    // Lógica para añadir el producto al carrito
    console.log(`Producto ${productId} añadido al carrito`);
  };

  // Renderizar los products
  const renderProducts = () => {
    return products.map((product) => (
      <Col key={product.id} xs={6} md={4} lg={3} xl={2} className="mb-3">
        <div className="border p-3">
          <h4>{product.name}</h4>
          <p>{product.price}</p>
          <Button
            variant="outline-dark"
            onClick={() => handleBuyClick(product.id)}
          >
            <FaShoppingCart /> Carrito
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => handleFavoriteClick(product.id)}
          >
            <MdFavoriteBorder /> Favorito
          </Button>
        </div>
      </Col>
    ));
  };

  return (
    <Container>
      <Row xs={2} md={3} lg={5}>
        {renderProducts()}
      </Row>
      {/* Agregar aquí la paginación */}
    </Container>
  );
};

export default ProductsC;
