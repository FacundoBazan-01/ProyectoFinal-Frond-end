import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminUserPage = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('Usuarios')) || []);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setSelectedUser(null); 
    };

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
                    {users.map((productos) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.role}</td>
                            <td>
                                <Button
                                    className='btn estilo-botonAñadir1 mx-2'
                                    onClick={() => handleDelete(usuario.id)}
                                    disabled={usuario.role === 'Admin' && true}
                                >
                                    Eliminar
                                </Button>
                                <Button className='btn estilo-botonAñadir1' onClick={() => handleShow(usuario)}>
                                    Editar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre de usuario"
                                value={selectedUser?.nombre || ''}
                                onChange={handleChange}
                                name='nombre'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Rol"
                                value={selectedUser?.role || ''}
                                onChange={handleChange}
                                name='role'
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AdminUserPage;
