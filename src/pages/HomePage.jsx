import CardsC from "../components/CardsC";
import CarouselC from "../components/CarouselC";
import AdPanel from "../components/AdPanel";
import "../css/Cards.css";
import "../pages/ProductoPage";


const HomePage = () => {
const imgHeroPage = [
	{
		img1: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/65c3c3ba1b95ee9c9e61c069/previews/65c3c3ba1b95ee9c9e61c0a1/download/carrousel_2.jpg",
		img2: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/65c3c3d25da8cdfbe0f1fc12/previews/65c3c3d35da8cdfbe0f1fd70/download/carrousel.jpg",
	},
];
const arrayProductos = [
	{
		id: 1,
		nombre: "Camisa blanca",
		precio: "$4800",
		img: "../helps/imagenesProductos/producto_N°1.jpg",
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
	{
		id: 4,
		nombre: "Campera de cuero",
		precio: "$15000",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd49d6145864f4f66eb/previews/659c9cd59d6145864f4f6744/download/5427413803_2_1_1.jpg",
	},
	{
		id: 5,
		nombre: "Vestido negro",
		precio: "$18000",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd2370a6c249fd916c8/previews/659c9cd3370a6c249fd9180a/download/3067279800_2_1_1.jpg",
	},

	{
		id: 6,
		nombre: "Pollera cuero tiro alto",
		precio: "$9000",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd13d9b48300df28dc4/previews/659c9cd23d9b48300df28def/download/3046246800_2_2_1.jpg",
	},
	{
		id: 7,
		nombre: "Vestido Minmay",
		precio: "$8000",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cd0fac4f9490f9ccfbc/previews/659c9cd1fac4f9490f9ccfd4/download/2245717507_2_1_1.jpg",
	},
	{
		id: 8,
		nombre: "Vestido largo color hueso",
		precio: "$7500",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccf6209b0f619971961/previews/659c9cd06209b0f61997198b/download/2149010710_2_1_1.jpg",
	},
	{
		id: 9,
		nombre: "Buzo gris lana",
		precio: "$5500",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9cce9d6145864f4f57c9/previews/659c9cce9d6145864f4f5ae3/download/2144187800_2_3_1.jpg",
	},
	{
		id: 10,
		nombre: "Pollera tableada tiro bajo",
		precio: "$8000",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccb0f7190eeeb4aed51/previews/659c9ccc0f7190eeeb4aed64/download/2055583800_2_2_1.jpg",
	},
	{
		id: 11,
		nombre: "Short cuero tiro alto",
		precio: "$5500",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccaef1ca4530cdfb2fa/previews/659c9ccbef1ca4530cdfb314/download/8372322800_2_1_1.jpg",
	},
	{
		id: 12,
		nombre: "Camisa top blanca",
		precio: "$4500",
		img: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/659c9ccc85db741c6d1aba8d/previews/659c9ccd85db741c6d1abaff/download/2131231250_2_1_1.jpg",
	},
];
return (
	<>
		{imgHeroPage.map((producto) => (
			<CarouselC ImgCaro={producto} key={producto.id} />
		))}
		<div className='container mt-5 mb-5   '>
			<div className='row '>
				{arrayProductos.map((producto) => (
					<CardsC producto={producto} key={producto._id} />
				))}

				<div className='col-md-12'>
					<AdPanel /> {}
				</div>
			</div>
		</div>
	</>
);
};

export default HomePage;
