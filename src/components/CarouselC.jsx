import Carousel from "react-bootstrap/Carousel";

const CarouselC = ({ ImgCaro }) => {
	const { img1, img2 } = ImgCaro;
	return (
		<Carousel fade>
			<Carousel.Item>
				<img src={img1} alt='' />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img src={img2} alt='' />
				<Carousel.Caption></Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default CarouselC;
