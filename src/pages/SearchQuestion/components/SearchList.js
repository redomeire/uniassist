import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HeartLogo from "../../../images/fi-ss-heart.svg";

function SearchList() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);
  let token = localStorage.getItem("Authorization");

  useEffect(() => {
    fetch("https://4700-140-0-18-112.ngrok.io/home", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json",
          "Authorization" : JSON.parse(token),
        }
    })
      .then((res) => res.json())
      .then((res) => {
          console.log(res.topPosts);
          setPost(res.topPosts)
      })
      .catch((error) => console.log(error))
  }, []);

  function isAnswered(isAnswered) {
    if (isAnswered) {
      return "Answered";
    } else {
      return "Not Answered";
    }
  }

  return post.map((item) => (
    <div
    onClick={() => {
      navigate(`/homepage/answerquestion/${item.Post.ID}`);
    }}
      className="question rounded mb-2 p-3 shadow"
      style={{ backgroundColor: "#001949" }}
      key={item.Post.ID}
    >
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
          <span>{isAnswered(item.Post.isAnswered)}</span>
        </div>
      </div>
    </div>
  ));
}

export default SearchList;
