import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';




const AdminProductsPage = () => {

   // const [productos, setProductos] = useState([]);

    //const getProductos = async () => {
      //  const allProductos = await clienteAxios.get("/productos");
        //setProductos(allProductos.data.getAllProductos);
      //};

   
   //   useEffect(() => {
     
   //getProductos();
    // }, []);



  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {producto.map((producto) => (
            <tr key={producto.id}>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>
                <img src={producto.imagenn} alt="" width={'50'}/>
            </td>
          </tr>
        ))}
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </>
  )
}

export default AdminProductsPage