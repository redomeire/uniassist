import {Link} from "react-router-dom";

function LinkToLogin(){
    return(
        <Link
            to="/login"
            className="mx-4 text-decoration-none btn text-white mt-lg-0 mt-sm-5 rounded-pill"
            style={{backgroundColor: "#8D9AC5"}}>
              Login/Sign Up
          </Link>
    );
}

export default LinkToLogin;