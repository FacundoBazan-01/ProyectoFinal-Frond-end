import React, { useState } from 'react';
import CardsC from '../components/CardsC';
import { useRouteMatch } from 'react-router-dom';

const ProductoPage = () => {
  const match = useRouteMatch();
  const { id } = match.params;

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Campera de cuero",
      precio: "$4800",
      img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd49d6145864f4f66eb/previews/659c9cd59d6145864f4f6744/download/5427413803_2_1_1.jpg",
    },
    {
      id: 2,
      nombre: "Remera un hombro",
      precio: "$7500",
      img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd7e64462e9d143cdbc/previews/659c9cd7e64462e9d143cdfe/download/5644858251_2_1_1.jpg",
    },
    {
      id: 3,
      nombre: "Chaleco lana gris",
      precio: "$5500",
      img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd520d6314f0674950b/previews/659c9cd620d6314f0674955a/download/5536157803_2_1_1.jpg",
    },
  ]);

  const [carrito, setCarrito] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const agregarProducto = () => {
    setProductos([...productos, { id: productos.length + 1, nombre: 'Nuevo Producto', precio: 50 }]);
  };

  const agregarAlCarrito = (id) => {
    const productoSeleccionado = productos.find(producto => producto.id === parseInt(id, 10));
    setCarrito([...carrito, productoSeleccionado]);
  };

  const agregarAFavoritos = (id) => {
    const productoSeleccionado = productos.find(producto => producto.id === parseInt(id, 10));
    setFavoritos([...favoritos, productoSeleccionado]);
  };

  return (
    <div>
      <h1>Detalles del producto con ID: {id}</h1>
      <CardsC productos={productos} agregarAlCarrito={agregarAlCarrito} agregarAFavoritos={agregarAFavoritos} />
      <button onClick={agregarProducto}>Agregar Producto</button>

      <h2>Carrito</h2>
      <ul>
        {carrito.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>

      <h2>Favoritos</h2>
      <ul>
        {favoritos.map(producto => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductoPage;
