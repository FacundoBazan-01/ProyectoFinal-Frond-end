import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const FavPage = ({ talleSeleccionado }) => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const removeFromFavorites = (id) => {
    const confirmRemoveFromFavorites = window.confirm(
      "¿Estás seguro de que quieres eliminar este producto de Favoritos?"
    );

    if (confirmRemoveFromFavorites) {
      const updatedFavorites = favorites.filter((product) => product.id !== id);
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  return (
    <>
      {favorites.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Talle</th>
              <th>Eliminar de Favoritos</th>
              <th>Comprar</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td>{product.talle}</td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    Eliminar
                  </button>
                </td>
                <td>
                  <Link to="/404">
                    <Button
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
          ¡No hay productos en Favoritos por el momento!
        </h1>
      )}
    </>
  );
};

export default FavPage;
