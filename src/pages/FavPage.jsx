import React from "react";
import CardsC from "../components/CardsC";

const FavPage = () => {

  const favLS = JSON.parse(localStorage.getItem("favoritos")) || [];

  return (
    <>
      <div className="container">
        <div className="row">
          {favLS.length > 0 ? (
            favLS.map((producto) => (
              <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                <CardsC producto={producto} idComponent="favoritos" />
              </div>
            ))
          ) : (
            <h1 className="text-center py-5">
              ¡No hay productos en Favoritos por el momento!
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default FavPage;