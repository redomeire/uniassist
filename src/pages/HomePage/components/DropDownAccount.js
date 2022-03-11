import { NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router";

export const LogoutButton = () => {
const navigate = useNavigate();
    return (
        <div className="dropdownAccount">
            <div className="">
                <NavDropdown title="Username">
                    <NavDropdown.Item onClick={() => {
                    localStorage.clear();
                    navigate("/");
                    window.location.reload();
                    } 
                    }>  
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    );
}