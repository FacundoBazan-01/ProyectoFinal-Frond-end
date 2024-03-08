import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../css/Producto.css";
import NavbarC from "../components/NavbarC";

const ProductoPage = () => {
  const params = useParams();
  const { id } = params;
  const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
  const prodFilter = arrayProductos.filter((producto) => producto.id === Number(id));

  const [talleSeleccionado, setTalleSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1); // Estado para almacenar la cantidad
  const [alerta, setAlerta] = useState(null);

  const handleChangeCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const handleChangeTalle = (talle) => {
    setTalleSeleccionado(talle);
  };

  const agregarProducto = (producto) => {
    const cartLs = JSON.parse(localStorage.getItem("cart")) || [];

    const existeEnCarrito = cartLs.some(item => item.id === producto.id && item.talle === talleSeleccionado);

    if (existeEnCarrito) {
      setAlerta("Este producto ya está en el carrito con el mismo tamaño.");
    } else {
      const productoEnCarrito = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        talle: talleSeleccionado,
        cantidad: parseInt(cantidad), // Almacenar la cantidad
      };

      const nuevoCarrito = [...cartLs, productoEnCarrito];
      localStorage.setItem("cart", JSON.stringify(nuevoCarrito));

      setAlerta("Producto añadido al carrito correctamente.");
    }
  };

  const agregarAFavoritos = (producto) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Verificar si el producto ya está en favoritos
    const existeEnFavoritos = favorites.some(item => item.id === producto.id);

    if (existeEnFavoritos) {
      setAlerta("Este producto ya está en favoritos.");
    } else {
      // Agregar el producto a la lista de favoritos
      const productoEnFavoritos = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        talle: talleSeleccionado, // Puedes ajustar esto si el talle seleccionado es relevante para los favoritos
      };

      const nuevosFavoritos = [...favorites, productoEnFavoritos];
      localStorage.setItem("favorites", JSON.stringify(nuevosFavoritos));

      setAlerta("Producto añadido a favoritos correctamente.");
    }
  };

  return (
    <React.Fragment>
      {prodFilter.map((producto) => (
        <div className='container my-5' key={producto.id}>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 col-md-4 me-5'>
              <img src={producto.img} alt="" className="img-fluid" />
            </div>
            <div className='col-12 col-sm-6 col-md-4 borde-cuadro '>
              <p className='titulo-mayuscula'>{producto.nombre}</p>
              <p className='color-precio'>{producto.precio} ARS</p>
              <p>{producto.descripcion}</p>
              <hr />
              <div className='text-center estilo-botones'>
                <h5>SELECCIONA TU TALLE</h5>
                <ToggleButtonGroup type="checkbox" value={talleSeleccionado} onChange={handleChangeTalle}>
                  <ToggleButton id="tbg-btn-1" value={"S"}>
                    S
                  </ToggleButton>
                  <ToggleButton id="tbg-btn-2" value={"L"}>
                    L
                  </ToggleButton>
                  <ToggleButton id="tbg-btn-3" value={"M"}>
                    M
                  </ToggleButton>
                  <ToggleButton id="tbg-btn-4" value={"XL"}>
                    XL
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
              <div className='text-center estilo-botones'>
                <h5>CANTIDAD</h5>
                <input type="number" className="w-25" value={cantidad} onChange={handleChangeCantidad} />
              </div>
              <div className='text-center mt-5 '>
                <button className='btn estilo-botonAñadir1 me-2' onClick={() => agregarProducto(producto)}>Añadir al carrito</button>
                <button className='btn estilo-botonAñadir2' onClick={() => agregarAFavoritos(producto)}>Añadir a favoritos</button>
              </div>
              {alerta && <div className="alert alert-success mt-3">{alerta}</div>}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ProductoPage;