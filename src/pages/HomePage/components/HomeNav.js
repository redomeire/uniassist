import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../../data/UseAuth";
import "../../../global/GlobalStyle.css";
import { LogoutButton } from "./DropDownAccount";
import LinkToLogin from "./LinkToLogin";
import SearchButton from "../../../images/search-logo.svg";

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
            <Button className="border-0 bg-white d-flex justify-content-center align-items-center" type="submit" style={{borderRadius: "0 50rem 50rem 0"}}>
              <img src={SearchButton} alt="search" width="20"/>
            </Button>
          </Form>
        {isLoggedIn? <LogoutButton/> : <LinkToLogin/>}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
