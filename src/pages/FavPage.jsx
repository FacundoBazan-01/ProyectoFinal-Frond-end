import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';

const FavoritoPage = () => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")) || []);

  const deleteFavorito = (id) => {
    const confirmDeleteFavorito = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto de Favoritos?"
    );

    if (confirmDeleteFavorito) {
      const updatedFavoritos = favoritos.filter((producto) => producto.id !== id);
      setFavoritos(updatedFavoritos);
      localStorage.setItem("favoritos", JSON.stringify(updatedFavoritos));
    }
  };

  return (
    <>
      {favoritos.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Talle</th>
              <th>Eliminar de Favoritos</th>
            </tr>
          </thead>
          <tbody>
            {favoritos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.talle}</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteFavorito(producto.id)}
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
          ¡No hay productos en Favoritos por el momento!
        </h1>
      )}
    </>
  );
};

export default FavoritoPage;
