import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminProductPage = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productos')) || [];
        setProducts(storedProducts);
    }, []);

    const handleClose = () => {
        setShowModal(false);
        setSelectedProduct(null); 
    };

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    const handleChange = (ev) => {
        setSelectedProduct({ ...selectedProduct, [ev.target.name]: ev.target.value });
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const index = products.findIndex(product => product.id === selectedProduct.id);
        const updatedProducts = [...products];
        updatedProducts[index] = selectedProduct;
        setProducts(updatedProducts);
        localStorage.setItem('productos', JSON.stringify(updatedProducts));
        handleClose();
    };

    const handleDelete = (productId) => {
        const updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('productos', JSON.stringify(updatedProducts));
    };

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Editar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nombre}</td>
                            <td>{product.precio}</td>
                            <td><img src={product.img} alt={product.nombre} style={{ width: '100px' }} /></td>
                            <td>
                                <Button className='btn estilo-botonAñadir1 mx-2' onClick={() => handleDelete(product.id)}>
                                    Eliminar
                                </Button>
                                <Button className='btn estilo-botonAñadir1' onClick={() => handleShow(product)}>
                                    Editar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del producto"
                                value={selectedProduct?.nombre || ''}
                                onChange={handleChange}
                                name='nombre'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Precio"
                                value={selectedProduct?.precio || ''}
                                onChange={handleChange}
                                name='precio'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>URL de la imagen</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="URL de la imagen"
                                value={selectedProduct?.img || ''}
                                onChange={handleChange}
                                name='img'
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

export default AdminProductPage;