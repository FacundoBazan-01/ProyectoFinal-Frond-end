import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const CarritoPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const deleteProdCart = (id) => {
    const confirmDeleteProductCart = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto del Carrito?"
    );

    if (confirmDeleteProductCart) {
      const productFilterCart = cart.filter((prod) => prod.id !== id);
      setCart(productFilterCart);
      localStorage.setItem("cart", JSON.stringify(productFilterCart));
    }
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? {
            ...product,
            cantidad: parseInt(newQuantity, 10) || 0,
            total: (parseFloat(product.precio) || 0) * (parseInt(newQuantity, 10) || 0),
          }
        : product
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      {cart.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Talle</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Eliminar Producto del Carrito</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.talle}</td>
                <td>
                  <input
                    type="number"
                    className="w-25"
                    value={producto.cantidad}
                    onChange={(e) => updateQuantity(producto.id, e.target.value)}
                  />
                </td>
                <td>{producto.total}</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProdCart(producto.id)}
                  >
                    Eliminar
                  </button>
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