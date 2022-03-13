import { Card, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../../../global/GlobalStyle.css";
import {ReactComponent as UniversityLogo} from "../../../images/map_university.svg";

function CardRegister() {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmpassword] = useState();

  function RegisterFunction(){
    let item;

  if(confirmPassword === password){
    item = { username, email, password };
  }

  let result = fetch("https://4700-140-0-18-112.ngrok.io/registerAuth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(item),
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);

        localStorage.setItem("user-register-info", JSON.stringify(res));
        navigate("/");
        window.location.reload();
    })
    .catch((error) => {
        console.log(error);
    })
  }

  return (
    <>
      <Card className="d-flex flex-lg-row shadow w-100 mx-2 my-3">
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
          <Form.Group className="mb-4" controlId="username">
              <Form.Label className="text-start">Username</Form.Label>
              <Form.Control autoComplete="on" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Farrel Reginaldo" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="text-start">Email address</Form.Label>
              <Form.Control autoComplete="on" onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="farrelreginn@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control autoComplete="on" onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="confirmpassword">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control autoComplete="on" onChange={(e) => setConfirmpassword(e.target.value)}  type="password" placeholder="" />
            </Form.Group>

            <Button className="mb-3" style={{backgroundColor: "#001949"}} onClick={RegisterFunction}>
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
