import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HeartLogo from "../../../images/fi-ss-heart.svg";

function SearchResult() {
  const navigate = useNavigate();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then((res) => {
        for(let i = 0; i < res.data.length; i++){
          setPost(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return post.map((item) => (
    <div
    onClick={() => {
      navigate(`/homepage/answerquestion/${item.id}`);
    }}
      className="question rounded mb-2 p-3 shadow"
      style={{ backgroundColor: "#001949" }}
      key={item.id}
    >
      <h4 className="text-white">{item.name}</h4>
      <div className="tags d-flex flex-row mt-4">
        <div
          className="likes rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#8D9AC5" }}
        >
          <img src={HeartLogo} alt="likes" />
          <span className="mx-2">{item.id}/5</span>
        </div>
        <div
          className="category rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#8D9AC5" }}
        >
          <span>{item.pantone_value}</span>
        </div>
        <div
          className="isAnswered rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#8D9AC5" }}
        >
          <span>{item.year}</span>
        </div>
      </div>
    </div>
  ));
}

export default SearchResult;
