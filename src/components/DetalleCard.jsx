import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const DetalleCard = ({ producto, setCarrito }) => {
  // Verificar si producto es undefined antes de desestructurarlo
  if (!producto) {
    return null; // Otra opción podría ser mostrar un mensaje de error
  }

  const { id, nombre, precio, img, idPage, descripcion } = producto;

  const handleAgregarAlCarrito = () => {
    // Agregar el producto al carrito
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const handleAgregarAFavoritos = () => {
    // Agregar el producto a favoritos
    // Aquí puedes implementar la lógica para agregar a favoritos
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <Card className="card-class mb-5 mt-5">
        <div className="d-flex">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <Card.Text>{descripcion}</Card.Text>
            {idPage === "favPage" ? (
              <Link className="btn btn-danger w-100" onClick={deleteFav}>
                Eliminar
              </Link>
            ) : (
              <>
                <div className="d-flex">
                  <button
                    className="btn btn-outline-detail"
                    onClick={handleAgregarAlCarrito}
                  >
                    Añadir al carrito
                  </button>
                  <button
                    className="btn btn-outline-detail"
                    onClick={handleAgregarAFavoritos}
                  >
                    Añadir a Favoritos
                  </button>
                </div>
              </>
            )}
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default DetalleCard;

