import CardsC from "../components/CardsC";
import "../css/Cards.css";


const FavPage = () => {

	// const [favoritos, setFavoritos] = useState([]);
	
	
	const arrayProductos = [
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
	];
	return (
		<>
			<div className='container mt-5 mb-5   '>
				<div className='row '>
					{arrayProductos.map((producto) => (
						<CardsC producto={producto} key={producto._id}  
						idPage='favPage' />
					))}
				</div>
			</div>
		</>
	);
};

export default FavPage;
