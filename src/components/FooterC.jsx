import { Col, Container, Row } from "react-bootstrap";
import QR from "../imagenes/QR-DATA.jpg"
import { GiOppositeHearts } from "react-icons/gi";
import "../css/Footer.css"

const FooterC = () => {
  return (
    <Container fluid className='footer-color'>
      <Row>
        <Col sm={12} md={3} lg={3} className='text-center mt-4'>
          <a href="#">
          <GiOppositeHearts className='logoCorazon' />
          </a>
       
        </Col>
        <Col sm={12} md={3} lg={3} className='d-flex mt-4 mx-auto flex-column text-center text-md-start'>
          <p className='tienda-style text-dark'>Quick Links</p>
          <a href="#" className='my-2 tienda-style'>Tienda, Indumentaria</a>
          <a href="#" className='tienda-style'>San Miguel de Tucumán, Argentina</a>
        </Col>
        <Col sm={12} md={3} lg={3} className='d-flex mt-4 mx-auto align-items-center flex-column text-center text-md-start'>
          <p className='tienda-style text-dark'>Informacion de contacto</p>
          <a href="https://web.whatsapp.com/" className='my-2 tienda-style '>3813303541</a>
          <a href="http://mail.google.com/mail?hl=es-419" className='my-2 tienda-style'>G4_Indumentaria@gmail.com</a>
          <img className='qr-style' src={QR} alt="QR-Data" />
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col sm={12} md={12} lg={12} className='text-center'>
          <p className='tienda-style copy-style mb-2'>© 2024 Indumentaria G4. Todos los derechos reservados.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterC;


