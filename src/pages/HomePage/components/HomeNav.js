import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../../data/UseAuth";
import "../../../global/GlobalStyle.css";
import { LogoutButton } from "./DropDownAccount";
import LinkToLogin from "./LinkToLogin";
import SearchInput from "./SearchInput";

function HomeNav() {
  return (
    <Navbar className="sticky-top color-dark" variant="dark" expand="lg">
      <Container>
        <Link to="/homepage" className="fw-bold fst-italic text-decoration-none text-white"><h2>Uni<span style={{WebkitTextStroke: "0.5px white" ,color: "transparent"}}>Assist</span></h2></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex align-items-md-center">
        <SearchInput/>
        {isLoggedIn? <LogoutButton/> : <LinkToLogin/>}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
