import CardsC from "../components/CardsC";
import CarouselC from "../components/CarouselC";
import AdPanel from "../components/AdPanel";
import "../css/Cards.css";
import "../pages/ProductoPage";
import "../css/TituloG4.css";
import agregarProductosLocalStorage from "../helper/arrayProductos";

const HomePage = () => {

	agregarProductosLocalStorage();

	const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
	
	const imgHeroPage = [
		{
			img1: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/65c3c3ba1b95ee9c9e61c069/previews/65c3c3ba1b95ee9c9e61c0a1/download/carrousel_2.jpg",
			img2: "https://trello.com/1/cards/659c9c8986f17124996cf8ba/attachments/65c3c3d25da8cdfbe0f1fc12/previews/65c3c3d35da8cdfbe0f1fd70/download/carrousel.jpg",
		},
	]
	return (
		<>
			{imgHeroPage.map((producto) => (
				<CarouselC ImgCaro={producto} key={producto.id} />
			))}
			<div className='titulo'>
				<h2>G4 INDUMENTARIA FEMENINA</h2>
			</div>
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
}
export default HomePage