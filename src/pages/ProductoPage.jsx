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
  const [alerta, setAlerta] = useState(null);

  const agregarProducto = (producto, tipo) => {
    const key = tipo === 'cart' ? 'cart' : 'favorites';
    const productosLs = JSON.parse(localStorage.getItem(key)) || [];

    const existeEnProductos = productosLs.some(item => item.id === producto.id && item.talle === talleSeleccionado);

    if (existeEnProductos) {
      setAlerta(`Este producto ya está en ${tipo === 'cart' ? 'el carrito' : 'favoritos'} con el mismo tamaño.`);
    } else {
      const productoEnProductos = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        talle: talleSeleccionado,
      };

      const nuevosProductos = [...productosLs, productoEnProductos];
      localStorage.setItem(key, JSON.stringify(nuevosProductos));

      setAlerta(`Producto añadido a ${tipo === 'cart' ? 'el carrito' : 'favoritos'} correctamente.`);
    }
  };

  const handleChangeTalle = (talle) => {
    setTalleSeleccionado(talle);
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
              <div className='text-center mt-5 '>
                <button className='btn estilo-botonAñadir1 me-2' onClick={() => agregarProducto(producto, 'cart')}>Añadir al carrito</button>
                <button className='btn estilo-botonAñadir2' onClick={() => agregarProducto(producto, 'favorites')}>Añadir a favoritos</button>
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
