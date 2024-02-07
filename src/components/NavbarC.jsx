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
import { GiOppositeHearts } from "react-icons/gi";
import "../css/NavbarC.css";

const NavbarC = () => {
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
					</Nav>
				
					<Nav className='ms-auto'>
						<Nav.Link href='https://facebook.com' classname='botonRedes'>
							<FaFacebook />
						</Nav.Link>
						<Nav.Link href='https://twitter.com' classname='botonRedes'>
							<FaTwitter />
						</Nav.Link>
						<Nav.Link href='https://instagram.com' classname='botonRedes'>
							<FaInstagram />
						</Nav.Link>

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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarC;
