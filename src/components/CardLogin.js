import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/GlobalStyle.css";
import {ReactComponent as UniversityLogo} from "../images/map_university.svg";

function CardLogin() {
  return (
    <>
      <Card className="d-flex flex-row shadow w-100 mx-2 my-3">
        <div className="card-image color-dark p-5 d-flex flex-column align-items-center">
          <h2 className="mb-5 fw-bold text-white fst-italic">Uni<span style={{WebkitTextStroke: "0.5px white" ,color: "transparent"}}>Assist</span></h2>
          <div className="bg-white mb-5 d-flex justify-content-center align-items-center" style={{width: "300px",height: "300px",borderRadius: "50%"}}>
            <UniversityLogo/>
          </div>
          <p className="text-white">Lorem Ipsum</p>
        </div>
        <div className="card-details p-5 w-100">
          <h2 className="fw-bold mb-2">Welcome to Uniassist!</h2>
          <p className="mb-5">Malu bertanya, sesat di jalan. Yuk! mulai langkah kecilmu dengan menjadi anggota Uniassist</p>
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

            <Button className="mb-3 fw-bold" style={{backgroundColor: "#001949"}}>
              Login
            </Button>
            <div className="">
                <hr style={{width: "47%", display: "inline-block"}}></hr>
                <span> Or </span>
                <hr style={{width: "47%", display: "inline-block"}}></hr>
            </div>
              <Button className="w-100 mb-5 fw-bold" style={{backgroundColor: "#001949"}}>Sign in with Google</Button>
            <p>Belum punya account? <span> 
              <Link to="/register" className="fw-bold text-black">Sign Up</Link></span></p>
          </Form>
        </div>
      </Card>
    </>
  );
}

export default CardLogin;
