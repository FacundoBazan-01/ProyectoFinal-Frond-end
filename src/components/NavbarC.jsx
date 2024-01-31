import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../css/NavbarC.css";

const NavbarC = () => {
  return (
    <Navbar expand="lg" className="bg-personalizado">
      <Container fluid>
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/destacados">Destacados</Nav.Link>
            <Nav.Link href="/contact">Contacto</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="mr-2"
              aria-label="Buscar"
            />
            <Button variant="outline-dark" className="ms-2">
              Buscar
            </Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="https://facebook.com">
              <FaFacebook />
            </Nav.Link>
            <Nav.Link href="https://twitter.com">
              <FaTwitter />
            </Nav.Link>
            <Nav.Link href="https://instagram.com">
              <FaInstagram />
            </Nav.Link>

            <Nav.Link href="/fav" className="-badge-">
              <MdFavorite />
            </Nav.Link>
            <Nav.Link href="/cart" className="-badge-">
              <FaCartShopping />
            </Nav.Link>
            <Nav.Link href="*">
              <IoMdHelpCircle />
            </Nav.Link>
            <Nav.Link href="/iniciarSesion">Iniciar Sesión</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
