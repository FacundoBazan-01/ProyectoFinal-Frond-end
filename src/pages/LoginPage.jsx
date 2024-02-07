import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";


const LoginPage = () => {
	
	const [estado, setEstado] = useState({
		usuario: "",
		contrasenia: "",
	});

	const changeValue = (ev) => {
		const { name, value } = ev.target;
		setEstado({ ...estado, [name]: value });
	};

	const handleClick = (ev) => {
		ev.preventDefault();

		const { usuario, contrasenia } = estado;
		const usuarioLS = JSON.parse(localStorage.getItem("Usuarios")) || [];

		if (!usuario || !contrasenia) {
			setEstado(() => ({
				...estado,
				usuario: !estado.usuario ? "error" : "",
				contrasenia: !estado.contrasenia ? "error" : "",
			}));
		} else {
			const usuarioExist = usuarioLS.filter(
				(usuario) => usuario.nombre === estado.usuario
			);
			const usuarioPosicion = usuarioLS.findIndex(
				(usuario) => usuario.nombre === estado.usuario
			);
			if (usuarioExist.length > 0) {
				if (usuarioExist[0].contrasenia === estado.contrasenia) {
					if (usuarioExist[0].role === "Admin") {
						usuarioLS[usuarioPosicion].login = true;
						localStorage.setItem("Usuarios", JSON.stringify(usuarioLS));
						localStorage.setItem("Usuario", JSON.stringify(usuarioExist[0]));
						setTimeout(() => {
							location.href = "/Admin";
						}, 1000);
					} else {
						usuarioLS[usuarioPosicion].login = true;
						localStorage.setItem("Usuarios", JSON.stringify(usuarioLS));
						localStorage.setItem("Usuario", JSON.stringify(usuarioExist[0]));
						setTimeout(() => {
							location.href = "/Usuario";
						}, 1000);
					}
				} else {
					alert("¡El usuario y/o la contrasenia no son validas!");
				}
			} else {
				alert("¡El usuario no existe!");
			}
		}
	};
	return (
		<>
			<h2>Iniciar sesión</h2>
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Usuario</Form.Label>
					<Form.Control
						type='text'
						placeholder='Ingrese usuario'
						name='usuario'
						onChange={changeValue}
						className={
							estado.usuario === "error"
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{estado.usuario === "error" && (
						<p className='text-danger'>¡Campo vacio!</p>
					)}
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Contraseña</Form.Label>
					<Form.Control
						type='password'
						placeholder='Contraseña'
						name='contrasenia'
						onChange={changeValue}
						className={
							estado.contrasenia === "error"
								? "form-control is-invalid"
								: "form-control"
						}
					/>
					{estado.contrasenia === "error" && (
						<p className='text-danger'>¡Campo vacio!</p>
					)}
				</Form.Group>
				<Button variant='primary' type='submit' onClick={handleClick}>
					Enviar
				</Button>
			</Form>
		</>
	);
};

export default LoginPage;
