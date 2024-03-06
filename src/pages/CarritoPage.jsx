import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CarritoPage = () => {
  const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const deleteProdCart = (id) => {
    const confirmDeleteProductCart = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto del Carrito?"
    );

    if (confirmDeleteProductCart) {
      const productFilterCart = cartLS.filter((prod) => prod.id !== id);
      localStorage.setItem("cart", JSON.stringify(productFilterCart));
      window.location.reload(); // Recargar la página para reflejar los cambios
    }
  };

  const handleCompra = (producto) => {
    setProductoSeleccionado(producto);
  };

  return (
    <>
      {cartLS.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar del Carrito</th>
              <th>Comprar</th>
            </tr>
          </thead>
          <tbody>
            {cartLS.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>
                  <input
                    type="number"
                    className="w-25"
                    value={producto.cantidad}
                    onChange={(e) => updateQuantity(producto.id, e.target.value)}
                  />
                </td>
                <td>
                  <Button
                  className="estilo-botonAñadir1"
                    variant="danger"
                    onClick={() => deleteProdCart(producto.id)}
                  >
                    Eliminar
                  </Button>
                </td>
                <td>
                  <Link to="/404">
                    <Button className="estilo-botonAñadir1"
                      variant="primary"
                      onClick={() => handleCompra(producto)}
                    >
                      Comprar
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1 className="text-center py-5">
          ¡No hay productos en el Carrito por el momento!
        </h1>
      )}
    </>
  );
};

export default CarritoPage;
