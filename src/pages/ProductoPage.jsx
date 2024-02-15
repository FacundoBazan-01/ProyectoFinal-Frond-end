import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../css/Producto.css";

const ProductoPage = () => {
  const params = useParams();
  const { id } = params;
  const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
  const prodFilter = arrayProductos.filter((producto) => producto.id === Number(id));

  const agregarProducto = (id) => {

  };

  const ToggleButtonGroupControlled = () => {
    const [value, setValue] = useState([1, 4]);

    const handleChange = (val) => setValue(val);

    return (
      <React.Fragment>
        {
          prodFilter.map((producto) =>
            <div className='container mt-5' key={producto.id}>
              <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-4 me-5'>
                  <img src={producto.img} alt="" className="img-fluid" />
                </div>
                <div className='col-12 col-sm-6 col-md-4 borde-cuadro '>
                  <p className='titulo-mayuscula'>{producto.nombre}</p>
                  <p className='color-precio'>{producto.precio} ARS</p>
                  <p>{producto.descripcion}</p>
                  <hr />
                  <div className='text-center'>
                    <h5>SELECCIONA TU TALLE</h5>
                  <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                    <div className='estilo-botones'>
                    <ToggleButton id="tbg-btn-1" value={1}>
                      S
                    </ToggleButton>
                    </div>
                    <div className='estilo-botones'>
                    <ToggleButton id="tbg-btn-2" value={2}>
                      L
                    </ToggleButton>
                    </div>
                    <div className='estilo-botones'>
                    <ToggleButton id="tbg-btn-3" value={3}>
                      M
                    </ToggleButton>
                    </div>
                    <div className='estilo-botones'>
                    <ToggleButton id="tbg-btn-3" value={4}>
                      XL
                    </ToggleButton>
                    </div>
                  </ToggleButtonGroup>
                  </div>
                
                  <div className='text-center mt-5 '>
                    <button className='btn estilo-botonAñadir1 me-2' onClick={() => agregarProducto(producto.id)}>Añadir al carrito</button>
                    <button className='btn estilo-botonAñadir2'>Añadir a favoritos</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </React.Fragment>
    );
  };

  return <ToggleButtonGroupControlled />;
};

export default ProductoPage;

