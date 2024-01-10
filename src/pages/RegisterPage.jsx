import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarC from "../components/NavbarC";
import CarouselC from "../components/CarouselC";

const RegisterPage = () => {
  const urlImageReg =
    "https://static.zara.net/photos///2023/V/0/1/p/6895/049/251/2/w/960/6895049251_9_1_1.jpg?ts=1680511374372";
  return (
    <>
      <CarouselC urlImage={urlImageReg} />

      <h2>Registrarse</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default RegisterPage;
