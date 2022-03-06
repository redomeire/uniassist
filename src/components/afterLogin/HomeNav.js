import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/GlobalStyle.css";
import {ReactComponent as Profilepicture} from "../../images/profilepicture.svg";
// function submit(e){
//   e.preventDefault();
// }

function HomeNav() {
  return (
    <Navbar className="sticky-top color-dark" variant="dark" expand="lg">
      <Container>
        <Link to="/homepage" className="fw-bold fst-italic text-decoration-none text-white"><h2>Uni<span style={{WebkitTextStroke: "0.5px white" ,color: "transparent"}}>Assist</span></h2></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex align-items-md-center">
          <Form className="d-flex w-50 mx-auto">
            <FormControl
              type="search"
              placeholder="Search questions, event, etc"
              className=""
              style={{borderRadius: "50rem 0 0 50rem"}}
              aria-label="Search"
            />
            <Button className="bg-primary" type="submit" style={{borderRadius: "0 50rem 50rem 0"}}>Submit</Button>
          </Form>
        
        <Link
          to="/register"
          className="mx-4 text-decoration-none btn text-white mt-lg-0 mt-sm-5 rounded-pill"
          style={{backgroundColor: "#8D9AC5"}}>
            Login/Sign Up
        </Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
