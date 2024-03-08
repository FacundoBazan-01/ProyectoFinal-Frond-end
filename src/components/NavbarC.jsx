import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { GiOppositeHearts } from "react-icons/gi";
import "../css/NavbarC.css";

const NavbarC = () => {
    const usuarioLs = JSON.parse(localStorage.getItem("Usuarios"));

    const cerrarSesion = () => {
        localStorage.removeItem("Usuarios");
        console.log("Sesión cerrada");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    };

    console.log("Usuario autenticado:", usuarioLs);

    return (
        <Navbar expand='lg' className='bg-personalizado'>
            <Container fluid>
                <Nav.Link href='/'>
                    <GiOppositeHearts className='logoCorazones' />
                </Nav.Link>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link href='/' className='botonNav'>
                            Inicio
                        </Nav.Link>
                        {usuarioLs && usuarioLs.role === "Admin" && (
                            <>
                                <Nav.Link href='/AdminUser' className='botonNav'>
                                    Usuarios
                                </Nav.Link>
                                <Nav.Link href='/AdminProduct' className='botonNav'>
                                    Productos
                                </Nav.Link>
                            </>
                        )}
                    </Nav>

                    <Nav className='ms-auto'>
                        <Nav.Link href='https://facebook.com' className='botonRedes'>
                            <FaFacebook />
                        </Nav.Link>
                        <Nav.Link href='https://twitter.com' className='botonRedes'>
                            <FaTwitter />
                        </Nav.Link>
                        <Nav.Link href='https://instagram.com' className='botonRedes'>
                            <FaInstagram />
                        </Nav.Link>

                        <Nav className="ms-auto">
                            {usuarioLs ? (
                                usuarioLs.role === "Admin" ? (
                                    <Nav.Link href='/admin' onClick={cerrarSesion}>
                                        Cerrar Sesión ({usuarioLs.nombre})
                                    </Nav.Link>
                                ) : (
                                    <Nav.Link href='#' onClick={cerrarSesion}>
                                        Cerrar Sesión
                                    </Nav.Link>
                                )
                            ) : (
                                <>
                                    <Nav.Link href='/fav' className='-badge-'>
                                        <MdFavorite />
                                    </Nav.Link>
                                    <Nav.Link href='/cart' className='-badge-'>
                                        <FaCartShopping />
                                    </Nav.Link>
                                    <Nav.Link href='/login' className='botonNav'>
                                        Iniciar Sesión
                                    </Nav.Link>
                                    <Nav.Link href='/register' className='botonNav'>
                                        Registrarse
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarC;
