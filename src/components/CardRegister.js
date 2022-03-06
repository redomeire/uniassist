import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/GlobalStyle.css";
import {ReactComponent as UniversityLogo} from "../images/map_university.svg";

function CardRegister() {
  return (
    <>
      <Card className="d-flex flex-row shadow w-100 mx-2 my-3">
        <div className="card-image color-dark p-5 d-flex flex-column align-items-center">
        <h2 className="mb-5 fw-bold text-white fst-italic">Uni<span style={{WebkitTextStroke: "0.5px white" ,color: "transparent"}}>Assist</span></h2>
          <div className="bg-white mb-5 d-flex align-items-center justify-content-center" style={{width: "300px",height: "300px",borderRadius: "50%"}}>
            <UniversityLogo/>
          </div>
          <p className="text-white">Lorem Ipsum</p>
        </div>
        <div className="card-details p-5 w-100">
          <h2 className="fw-bold mb-5">Sign Up</h2>
          <Form className="d-flex flex-column">
          <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-start">Username</Form.Label>
              <Form.Control type="text" placeholder="Farrel Reginaldo" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-start">Email address</Form.Label>
              <Form.Control type="email" placeholder="farrelreginn@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Button className="mb-3" style={{backgroundColor: "#001949"}}>
              Sign Up
            </Button>
            <div className="">
                <hr style={{width: "47%", display: "inline-block"}}></hr>
                <span> Or </span>
                <hr style={{width: "47%", display: "inline-block"}}></hr>
            </div>
            <Link to="/login" className="mb-4">
              <Button className="w-100" style={{backgroundColor: "#001949"}}>Login</Button>
            </Link>
            <p>By continuing, you agree to our <span className="text-decoration-underline">Terms and Conditions</span> and <span className="text-decoration-underline">Privacy Policy</span></p>
          </Form>
        </div>
      </Card>
    </>
  );
}

export default CardRegister;
