import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";
import "../css/Register.css";

const RegisterPage = () => {
    const [estado, setEstado] = useState({
        usuario: "",
        contrasenia: "",
        rcontrasenia: "",
    });

    const changeValue = (ev) => {
        const { name, value } = ev.target;
        setEstado({ ...estado, [name]: value });
    };

    const handleClick = (ev) => {
        ev.preventDefault();

        const { usuario, contrasenia, rcontrasenia } = estado;
        let usuarioLS = JSON.parse(localStorage.getItem("Usuarios")) || [];

        if (!usuario || !contrasenia || !rcontrasenia) {
            setEstado(() => ({
                ...estado,
                usuario: !estado.usuario ? "error" : "",
                contrasenia: !estado.contrasenia ? "error" : "",
                rcontrasenia: !estado.rcontrasenia ? "error" : "",
            }));
        } else {
            if (contrasenia === rcontrasenia) {
               
                const isFirstUser = usuarioLS.length === 0;

              
                const role = isFirstUser ? "Admin" : "User";

               
                const usuarioNuevo = {
                    id: isFirstUser ? 1 : usuarioLS[usuarioLS.length - 1].id + 1,
                    nombre: usuario,
                    contrasenia: contrasenia,
                    role: role,
                    login: true,
                    deleted: false,
                };

     
                usuarioLS.push(usuarioNuevo);
                localStorage.setItem("Usuarios", JSON.stringify(usuarioLS));
                localStorage.setItem("Usuario", JSON.stringify(usuarioNuevo));

                alert(`Usuario creado correctamente`);

                setTimeout(() => {
                    location.href = role === "Admin" ? "/Admin" : "/Usuario";
                }, 1000);
            } else {
                alert("Las contraseñas no coinciden :(");
            }
        }
    };

    return (
        <>
            <h2 className="tituloRegistro">Registrarse</h2>

            <Form className="estiloForm">
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese usuario"
                        name="usuario"
                        onChange={changeValue}
                        className={
                            estado.usuario === "error"
                                ? "form-control is-invalid"
                                : "form-control"
                        }
                    />
                    {estado.usuario === "error" && (
                        <p className="text-danger">¡Campo vacío!</p>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Ingrese contraseña"
                        name="contrasenia"
                        onChange={changeValue}
                        className={
                            estado.contrasenia === "error"
                                ? "form-control is-invalid"
                                : "form-control"
                        }
                    />
                    {estado.contrasenia === "error" && (
                        <p className="text-danger">¡Campo vacío!</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Repetir contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repetir contraseña"
                        name="rcontrasenia"
                        onChange={changeValue}
                        className={
                            estado.rcontrasenia === "error"
                                ? "form-control is-invalid"
                                : "form-control"
                        }
                    />
                    {estado.rcontrasenia === "error" && (
                        <p className="text-danger">¡Campo vacío!</p>
                    )}
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    onClick={handleClick}
                    className="button-violet"
                >
                    Enviar
                </Button>
            </Form>
        </>
    );
};

export default RegisterPage;
