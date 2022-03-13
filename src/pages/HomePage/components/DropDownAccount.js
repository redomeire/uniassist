import { useState } from "react";
import { NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router";

export const LogoutButton = () => {
const [username, setUsername] = useState();
const navigate = useNavigate();
    return (
        <div className="dropdownAccount">
            <div className="">
                <NavDropdown title={() => {
                    if(localStorage.getItem("Username")){
                        setUsername(JSON.parse(localStorage.getItem("Username")))
                    } else {
                        setUsername("undefined")
                    }
                    }}>
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