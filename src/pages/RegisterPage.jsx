import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";


const RegisterPage = () => {
  
  return (
		<>
			<h2>Registrarse</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Usuario</Form.Label>
					<Form.Control type='usuario' placeholder='usuario' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control type='email' placeholder='email' />
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control type='contraseña' placeholder='constraseña' />
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Confirmar constraseña</Form.Label>
					<Form.Control type='confirmar contraseña' placeholder='contraseña' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Enviar
				</Button>
			</Form>
		</>
	);
};

export default RegisterPage;
