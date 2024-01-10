import CarouselC from "../components/CarouselC";
import ProductsC from "../components/ProductsC";

const HomePage = () => {
  const urlImage =
    "https://static.zara.net/photos///2023/S/0/1/p/4051/016/250/2/w/563/4051016250_6_1_1.jpg?ts=1690214267705";

  return (
    <>
      <h1>HomePage</h1>
      <CarouselC urlImage={urlImage} />
      <ProductsC />
    </>
  );
};

export default HomePage;
