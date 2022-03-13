import HomeNav from "./components/HomeNav";
import TopQuestionList from "./components/TopQuestion";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import "../../global/GlobalStyle.css";
import FriendList from "./components/FriendList";
import { useEffect } from "react";
import { isLoggedIn } from "../../data/UseAuth";
import ButtonPost from "../PostQuestion/components/ButtonPost";
import ButtonAnswer from "../PostQuestion/components/ButtonAnswer";
import Sidebar from "./components/Sidebar";

function HomePage() {
  const navigate = useNavigate();

  function checkLoggedIn(){
    return isLoggedIn ? navigate("/homepage/postquestion") : navigate("/login");
  }

  return (
    <div>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column w-75 bg-white">
          <div className="buttons d-flex w-100 justify-content-around pt-4 px-4 ">
            <ButtonPost/>
            <ButtonAnswer/>
          </div>
          <TopQuestionList />
        </div>
        <Sidebar/>
      </div>
    </div>
  );
}

export default HomePage;
