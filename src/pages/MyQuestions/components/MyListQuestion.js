import {Button} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HeartLogo from "../../../images/fi-ss-heart.svg";
import ButtonDelete from "./ButtonDelete";

function MyListQuestion() {
  const navigate = useNavigate();
  const [myQuestion, setMyQuestion] = useState([]);
  let Authorization = localStorage.getItem("Authorization");

  useEffect(() => {
    const myHeaders = new Headers({
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Authorization" : JSON.parse(Authorization),
    });
  
      fetch("https://4700-140-0-18-112.ngrok.io/myPosts", {
        method: "GET",
        mode: "cors",
        headers: myHeaders,
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        for (let i = 0; i < res.posts.length; i++) {
          setMyQuestion(res.posts);
        }
      })
  }, []);

  function isAnswered(item) {
    if(item === true){
      return "Answered";
    } else {
      return "Not Answered";
    }
  }
  
  return myQuestion.map((item) => (
    <div
      onClick={() => {
        navigate(`/homepage/myquestion/${item.Post.ID}`);
      }}
      className="question rounded mb-2 p-3 shadow d-flex flex-row align-items-center justify-content-between"
      style={{ backgroundColor: "#001949" }}
      key={item.id}
    >
      <div className="post-data">
        <h4 className="text-white">{item.Post.title}</h4>
        <div className="tags d-flex flex-row mt-4">
          <div
            className="likes rounded-pill text-white p-2 me-2"
            style={{ backgroundColor: "#8D9AC5" }}
          >
            <img src={HeartLogo} alt="likes" />
            <span className="mx-2">{item.Rating}/5</span>
          </div>
          <div
            className="category rounded-pill text-white p-2 me-2"
            style={{ backgroundColor: "#8D9AC5" }}
          >
            <span>{item.Category.Name}</span>
          </div>
          <div
            className="isAnswered rounded-pill text-white p-2 me-2"
            style={{ backgroundColor: "#8D9AC5" }}
          >
            <span>{isAnswered(item.Post.IsAnswered)}</span>
          </div>
        </div>
    </div>
    <ButtonDelete id={item}/>
  </div>
  ));
}

export default MyListQuestion;
