import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../global/GlobalStyle.css";
function Navs(){
    return (
        <Navbar className="sticky-top" bg="transparent" variant="dark" expand="lg">
  <Container className="pt-3">
    <h2 href="/" className="fw-bold fst-italic text-white" style={{fontFamily: "Inter"}}>Uni<span style={{WebkitTextStroke: "0.1px white" ,color: "transparent"}}>Assist</span></h2>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="w-100">
        <div className="d-flex justify-content-end align-items-center w-100">
            <Link to="/login" className="mx-4 text-decoration-none btn button-primary text-white">Login</Link>
            <Link to="/register" className="btn button-secondary mx-4 text-decoration-none text-white">Sign Up</Link>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default Navs;