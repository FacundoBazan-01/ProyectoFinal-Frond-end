import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Cards.css";
import { Link } from "react-router-dom";
 


const DetalleCard= ({ producto }) => {
	const { id, nombre, precio, img, idPage, descripcion } = producto;
	
	return (
		<>
		<div className='col-12 col-md-6 col-lg-4 '>
			<Card className='card-class mb-5 mt-5 '>
				<div className="d-flex ">
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title>{nombre}</Card.Title>
					<Card.Text> {precio} </Card.Text>
					<Card.Text> {descripcion} </Card.Text>
					  { idPage==='favPage'?(
						 
         				<Link className='btn btn-danger w-100' onClick={deleteFav}>Eliminar</Link>
						
						): (
							<>
							<div className="d-flex ">
							<Link to={`/producto/${id}`} className='btn btn-outline-detail'>
						Añadir al carrito
					   </Link>
					       <Link to={`/producto/${id}`} className='btn btn-outline-detail'>
                        Añadir a Favoritos
                      </Link>
							</div>
						
					</>
						)
						
					}
				</Card.Body>
				</div>
				
			</Card>
		</div>
		</>

	);
};

export default DetalleCard;