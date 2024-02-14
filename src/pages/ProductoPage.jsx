import React from 'react';
import { useParams } from 'react-router-dom';
const ProductoPage = () => {
  const params= useParams();
  const { id } = params; 
  const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
  const prodFilter = arrayProductos.filter((producto) => producto.id === Number(id) );
  const agregarProducto = (id) => {
   const cartLs = JSON.parse(localStorage.getItem("cart")) || [];
   if(cartLs.length > 0) {
    const prodExistCart = cartLs.filter(
      (producto) => producto.id === Number(id)
     );
     if (prodExistCart.length === 0){
      cartLs.push(prodFilter[0]);
      localStorage.setItem("cart", JSON.stringify(cartLs));
      return;
     } else{
      alert ("El producto ya existe en el carrito");
     }
    
   } else{
    cartLs.push(prodFilter[0]);
    localStorage.setItem("cart", JSON.stringify(cartLs));
   }
  };
 
  return (
    <>
    {
       prodFilter.map((producto) => 

       <div className='d-flex justify-content-center' key={producto.id}>
          
          <div className='w-25'>
            <img src={producto.img} alt="" width={"100%"} />
          </div>
          <div>
              <p>{producto.nombre}</p>
              <p>{producto.precio}</p>

              <div>
                <button className='btn btn-success me-2' onClick={() => agregarProducto(producto.id) }>Añadir al carrito</button>
                <button className='btn btn-danger'>Añadir a favoritos</button>
              </div>
          </div>
       </div>
       )
    }
   </>
  );
};

export default ProductoPage;