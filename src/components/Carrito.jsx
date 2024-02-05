import React, { useState } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([
    { id: 1, precio: 20, nombre: 'Producto 1', cantidad: 2, imagen: 'imagen1.jpg' },
    { id: 2, precio: 30, nombre: 'Producto 2', cantidad: 1, imagen: 'imagen2.jpg' },
    { id: 3, precio: 50, nombre: 'Producto 3', cantidad: 1, imagen: 'imagen3.jpg' },
  ]);

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((productos) => productos.id !== id);
    setCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const comprarProducto = (id) => {
   
    console.log(`Comprando producto con ID: ${id}`);

  };


  return (
    <div>
      <h2>Carrito de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Precio</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th>Eliminar</th>
            <th>Comprar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((productos) => (
            <tr key={productos.id}>
              <td>{productos.id}</td>
              <td>${productos.precio}</td>
              <td>{productos.nombre}</td>
              <td>{productos.cantidad}</td>
              <td>
                <img src={productos.imagen} alt={productos.nombre} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => eliminarProducto(productos.id)}>Eliminar</button>
              </td>
              <td>
                <button onClick={() => comprarProducto(productos.id)}>Comprar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  );
};

export default Carrito;