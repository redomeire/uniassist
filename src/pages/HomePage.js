import HomeNav from "../components/afterLogin/HomeNav";
import TopQuestion from "../components/afterLogin/TopQuestion";
import { Link } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import "../styles/GlobalStyle.css";
import FriendList from "../components/afterLogin/FriendList";


function HomePage() {
  return(
    <div>
      <HomeNav />
      <div className="d-flex flex-row">
      <div className="d-flex flex-column w-75 bg-white p-5">
        <div className="buttons d-flex w-100 justify-content-around p-4">
            <Link to="/postquestion" className="btn button-primary w-50 mx-2 shadow text-white">Post a Question</Link>
            <Link to="/answerquestion" className="btn button-primary w-50 mx-2 shadow text-white">Answer a Question</Link>
        </div>
        <TopQuestion/>
      </div>
      <div className="d-flex flex-column w-25" style={{background: "linear-gradient(180deg, #001949 20.98%, #000000 100%)"}}>
      <Form className="d-flex w-100 mx-auto p-5 mt-4">
            <FormControl
              type="search"
              placeholder="Search friend"
              className=""
              style={{borderRadius: "50rem 0 0 50rem"}}
              aria-label="Search"
            />
            <Button className="bg-primary" type="submit" style={{borderRadius: "0 50rem 50rem 0"}}>Submit</Button>
          </Form>
          <FriendList/>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
