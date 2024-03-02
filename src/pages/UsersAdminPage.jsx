import {useState} from 'react';
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';



const AdminUserPage = () => {

    const arrarUsersLocalStorage = JSON.parse(localStorage.getItem('Usuarios')) || [];

    const [show, setShow] = useState(false);
    
    const [dataUser, setDataUser] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (ev, usuario) => {
      ev.preventDefault
      setDataUser(usuario)
      setShow(true);
    }
    
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
          <tr key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.role}</td>
          <td>
            <button className='btn estilo-botonAñadir1 mx-2'>
              Eliminar
            </button>
            <Button className='btn estilo-botonAñadir1' onClick={(ev) => handleShow(ev, usuario)}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={dataUser?.nombre} 
        onClick={(ev) => handleShow(ev)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Password" value={dataUser?.role} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
        </Modal.Body>
      </Modal>
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