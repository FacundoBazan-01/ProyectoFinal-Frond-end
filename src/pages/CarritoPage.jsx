import Table from "react-bootstrap/Table";


  return (
    <>
      {cartLS.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Elimiar Productos Carrito</th>
            </tr>
          </thead>
          <tbody>
            {cartLS.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.canti}</td>
                <td>{producto.precio}</td>
                <td>
                  <input type="number" className="w-25" value={1} />
                </td>
                <td>
                  <p>{producto.precio}</p>
                </td>
                <td className="d-flex justify-content-center">
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProdCart(producto.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1 className="text-center py-5">
          No hay productos en el Carrito por el momento
        </h1>
      )}
    </>
  );


export default CarritoPage