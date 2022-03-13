import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../../../global/GlobalStyle.css";
import HeartLogo from "../../../images/fi-ss-heart.svg";

function MakeList() {
  const [list, setList ] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("Authorization");
    const myHeaders = new Headers({
      "Content-Type" : "application/json",
      "Accept" : "application/json",
      "Authorization" : JSON.parse(token),
    });
    
    let result = fetch("https://4700-140-0-18-112.ngrok.io/home", { method: "GET", mode: 'cors', headers: myHeaders })
    .then((res) => res.json())
    .then((res) => {
        console.log(res.topPosts);
        setList(res.topPosts)
    }) 
  },[])

  function isAnswered(isAnswered) {
    if (isAnswered) {
      return "Answered";
    } else {
      return "Not Answered";
    }
  }

  const navigate = useNavigate();
  return list.map((item) => (
    <div
      onClick={() => {
        navigate(`/homepage/questiondetail/${item.Post.ID}`);
      }}
      className="question w-100 rounded mb-2 p-3 shadow"
      style={{ backgroundColor: "#001949" }}
    >
      <h4 className="text-white" key={item.id}>
        {item.Post.title}
      </h4>
      <div className="tags d-flex flex-row mt-4">
        <div
          className="likes rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#5567C9" }}
        >
          <img src={HeartLogo} alt="likes" />
          <span className="mx-2">{item.Rating}/5</span>
        </div>
        <div
          className="category rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#5567C9" }}
        >
          <span>{item.Category.Name}</span>
        </div>
        <div
          className="isAnswered rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#5567C9" }}
        >
          <span>{isAnswered(item.isAnswered)}</span>
        </div>
      </div>
    </div>
  ));
}

export default MakeList;
