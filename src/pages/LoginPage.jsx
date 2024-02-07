import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";

const LoginPage = () => {
	return (
		<>
			<h2>Iniciar Sesion</h2>
			<Form>
				<Form.Group className='mb-3 register' controlId='formBasicEmail'>
					<Form.Label>Usuario</Form.Label>
					<Form.Control type='usuario' placeholder='usuario' />
				</Form.Group>
				<Form.Group className='mb-3 register' controlId='formBasicPassword'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type='contraseña' placeholder='constraseña' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Enviar
				</Button>
			</Form>
		</>
	);
};

export default LoginPage;
