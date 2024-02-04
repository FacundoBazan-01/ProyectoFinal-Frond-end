import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Cards.css";
import { Link } from "react-router-dom";


const CardsC = ({ productos , agregarAlCarrito, agregarAFavoritos }) => {
	return (
		<>
		  {productos.map((producto) => (
			<div key={producto.id} className='col-12 col-md-6 col-lg-4 '>
			  <Card className='card-class mb-5 mx-auto '>
				<Card.Img variant='top' src={producto.img} />
				<Card.Body>
				  <Card.Title>{producto.nombre}</Card.Title>
				  <Card.Text>{producto.precio}</Card.Text>
				  <Button variant='primary' onClick={() => agregarAlCarrito(producto.id)}>
					Agregar al carrito
				  </Button>
				  <Button variant='success' onClick={() => agregarAFavoritos(producto.id)}>
					Agregar a favoritos
				  </Button>
				  {producto.idPage === 'favPage' ? (
					<Button variant='danger' className='w-100'>
					  Eliminar
					</Button>
				  ) : (
					<Link to={`/producto/${producto.id}`} className='btn btn-outline-detail'>
  Ver Más
</Link>
				  )}
				</Card.Body>
			  </Card>
			</div>
		  ))}
		</>
	  )
};

export default CardsC;
