import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/Cards.css";

const CardsC = ({ producto }) => {
	const { id, nombre, precio, img } = producto;
	return (
		<div className='col-12 col-md-6 col-lg-4 '>
			<Card className='card-class mb-5 mx-auto '>
				<Card.Img variant='top' src={img} />
				<Card.Body>
					<Card.Title>{nombre}</Card.Title>
					<Card.Text> {precio} </Card.Text>
					<a href={`/producto/${id}`} className='btn btn-outline-detail '>
						Ver Mas
					</a>
				</Card.Body>
			</Card>
		</div>
	);
};

export default CardsC;
