import { Link } from "react-router-dom";
import Navs from "../components/Navbar";
import "../styles/GlobalStyle.css";

function home(){
    return(
        <div className="color-dark">
        <Navs/>
        <div className="p-5 ms-4 mt-5">
            <h1 className="text-white mb-4" style={{lineHeight: "178.69%", letterSpacing: "0.13em"}}>Make Friends, <br/> Ease Your College Life!</h1>
            <p className="text-white mb-5" style={{lineHeight: "100%", letterSpacing: "0.05em"}}>With us, you can make friends, find discussion, find <br/> <br/> teammates, you name it! <br/> <br/> as long as we assist your college life, that's us.</p>
            <Link to="/homepage" className="btn button-primary rounded text-white mb-5" style={{width: "15%"}}>Start</Link>
        </div>
        </div>
    );
}

export default home;