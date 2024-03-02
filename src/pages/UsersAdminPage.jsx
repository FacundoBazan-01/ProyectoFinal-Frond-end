import React from 'react'
import Table from 'react-bootstrap/Table';

const AdminUserPage = () => {

    const arrarUsersLocalStorage = JSON.parse(localStorage.getItem('Usuarios')) || [];

  return (
    <>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Role</th>
          <th>Eliminar/Editar</th>
        </tr>
      </thead>
      <tbody>
        { arrarUsersLocalStorage.map((usuario) => (
          <tr>
          <td>{usuario.id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.role}</td>
          <td>
            <button>

            </button>
            <button>
              
            </button>
          </td>
        </tr>
        )
        )}
      </tbody>
    </Table>

    </>
    
  );
}


export default AdminUserPage