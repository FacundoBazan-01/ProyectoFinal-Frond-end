import React, { useState } from 'react';
import "../css/Carrito.css";

const CarritoPage = () => {
  const [productos, setProductos] = useState([]);

  const [carrito, setCarrito] = useState([]);

  //const getProdCart = async () => {
    //const carts = await clienteAxios.get(`/carts`, configHeaders);
    //setCarrito(carts.data.getCarts[0].productos);
  //};

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
  };

  const handlePago = (metodoPago) => {
    if (metodoPago === 'tarjeta') {
      alert('Pagando con tarjeta...');
    } else if (metodoPago === 'mercadoPago') {
      alert('Pagando con MercadoPago...');
    }
  };

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Carrito</h2>
      <hr />
      <table className="carrito">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto) => (
            <tr key={producto.id}>
              <td className="producto-nombre">{producto.nombre}</td>
              <td className="producto-precio">${producto.precio}</td>
              <td className="producto-imagen"><img src={producto.img} alt="" style={{ maxWidth: '50px' }} /></td>
              <td className="producto-accion">
                <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar del carrito</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{textAlign: 'center'}}>Total: ${calcularTotal()}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button onClick={() => handlePago('tarjeta')} className="btn btn-primary">Pagar con Tarjeta</button>
      <button onClick={() => handlePago('mercadoPago')} className="btn btn-success">Pagar con MercadoPago</button>
      </div>

      </div>
    </div>
  );
};

export default CarritoPage;