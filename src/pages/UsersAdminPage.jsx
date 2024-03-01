import React from 'react'
import Table from 'react-bootstrap/Table';

const AdminUserPage = () => {

    const arrarUsersLocalStorage = JSON.parse(localStorage.getItem('users')) || [];

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
        { arrarUsersLocalStorage.map((
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        ))}
      </tbody>
    </Table>

    </>
    
  );
}


export default AdminUserPage