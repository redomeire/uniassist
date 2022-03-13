import { Card, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../../global/GlobalStyle.css";
import { ReactComponent as UniversityLogo } from "../../../images/map_university.svg";
import { useState, useEffect } from "react";
import { Navigate } from "react-router";
// import {LoginFunction} from "../../../data/LoginFunction";

function CardLogin() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  {/*user1 pass1 user1@gmail.com */}

  const navigate = useNavigate();

function LoginFunction() {
  let item = { username, email, password };
  let result = fetch("https://4700-140-0-18-112.ngrok.io/loginAuth", {
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
      alert("login berhasil");
      if(res.status !== "ERROR"){
        localStorage.setItem("Authorization", JSON.stringify(res.token));
      }
      navigate("/homepage");
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
      alert("login gagal")
    })
  // const navigate = useNavigate();
  
}

useEffect(() => {
  if (localStorage.getItem("Authorization")) {
    const foundUser = JSON.parse(localStorage.getItem("Authorization"));
    setUser(foundUser);
    navigate("/homepage");
  }
}, []);

  return (
    <>
      <Card className="d-flex flex-lg-row shadow w-100 mx-2 my-3">
        <div className="card-image color-dark p-5 d-flex flex-column align-items-center">
          <h2 className="mb-5 fw-bold text-white fst-italic">
            Uni
            <span
              style={{ WebkitTextStroke: "0.5px white", color: "transparent" }}
            >
              Assist
            </span>
          </h2>
          <div
            className="bg-white mb-5 d-flex justify-content-center align-items-center"
            style={{ width: "300px", height: "300px", borderRadius: "50%" }}
          >
            <UniversityLogo />
          </div>
          <p className="text-white">Lorem Ipsum</p>
        </div>
        <div className="card-details p-5 w-100">
          <h2 className="fw-bold mb-2">Welcome to Uniassist!</h2>
          <p className="mb-5">
            Malu bertanya, sesat di jalan. Yuk! mulai langkah kecilmu dengan
            menjadi anggota Uniassist
          </p>
          <Form className="d-flex flex-column">
            <Form.Group className="mb-4" controlId="username">
              <Form.Label className="text-start">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Farrel Reginaldo"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="text-start">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="farrelreginn@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              onClick={LoginFunction}
              className="mb-3 fw-bold"
              style={{ backgroundColor: "#001949" }}
            >
              Login
            </Button>
            <div className="">
              <hr style={{ width: "47%", display: "inline-block" }}></hr>
              <span> Or </span>
              <hr style={{ width: "47%", display: "inline-block" }}></hr>
            </div>
            <Button
              className="w-100 mb-5 fw-bold"
              style={{ backgroundColor: "#001949" }}
            >
              Sign in with Google
            </Button>
            <p>
              Belum punya account?{" "}
              <span>
                <Link to="/register" className="fw-bold text-black">
                  Sign Up
                </Link>
              </span>
            </p>
          </Form>
        </div>
      </Card>
    </>
  );
}

export default CardLogin;
