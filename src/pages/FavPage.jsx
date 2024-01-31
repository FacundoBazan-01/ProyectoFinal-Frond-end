import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import topImagenes from '../Imagenes/topblanco.jpg';

const FavPages = () => {
  return (
    <>
     <h3 className="text-center py-3">Favoritos</h3>
     <hr />
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{ width: '13rem',  margin: '10px auto 0',display: 'block',}} src={topImagenes} />
      <Card.Body>
        <Card.Title>Top cruzado</Card.Title>
        <Card.Text>
         Top de un solo hombro cruzado blanco.
        </Card.Text>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Button variant="dark">Añadir al carrito</Button>
      <Button variant="dark" style={{ marginTop: '3px'}} >Eliminar</Button>
       </div>
      </Card.Body>
    </Card>
    </>
  );
};
export default FavPages;

