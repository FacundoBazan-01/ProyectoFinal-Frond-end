import React, { useState } from 'react';
import CardsC from '../components/CardsC';
import '../css/Cards.css';

const FavPage = () => {
  const [favoritos, setFavoritos] = useState([]);

  //const getAllFav = async () => {
    // try {
      //const favs = await clienteAxios.get("/favs", configHeaders);
      //console.log(favs.data.getFavs[0].favoritos)
      //setFavoritos(favs.data.getFavs[0].favoritos);
    //} catch (error) {
      //console.log(error);
    //}
  //};

  //useEffect(() => {
    //getAllFav();
  //}, []);

  const handleEliminar = (id) => {
    const nuevosFavoritos = favoritos.filter((producto) => producto.id !== id);
    setFavoritos(nuevosFavoritos);
  };

  return (
    <>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          {favoritos.map((producto) => (
            <CardsC
              producto={producto}
              key={producto.id}
              onDelete={handleEliminar}
              idPage='favPage'
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FavPage;
