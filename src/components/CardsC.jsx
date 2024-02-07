import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardsC = ({ producto, onDelete }) => {
  const { id, nombre, precio, img, idPage } = producto;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <Card className='card-class mb-5 mx-auto'>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{precio}</Card.Text>
          {idPage === 'favPage' ? (
            <button onClick={handleDelete} className='btn btn-danger w-100'>
              Eliminar
            </button>
          ) : (
            <Link to={`/producto/${id}`} className='btn btn-outline-detail'>
              Ver Mas
            </Link>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardsC;
