import Button from "@restart/ui/esm/Button";
import { useEffect, useState } from "react";
import { Card, Form, FormControl } from "react-bootstrap";
import { isLoggedIn } from "../../data/UseAuth";
import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import HeartLogo from "../../images/fi-ss-heart.svg";
import "../../global/GlobalStyle.css";

function AnswerQuestion() {
  let Authorization = localStorage.getItem("Authorization");
  const [content, setContent] = useState("");

  const [list, setList] = useState([]);
  const [Answer, setAnswer] = useState([]);
  const [rating, setRating] = useState();
  const [category, setCategory] = useState("");

  const URL = window.location.href;
  let idReversed = "";
  for (let i = URL.length; i > 0; i--) {
    if (URL.charAt(i) === "/") {
      break;
    }
    idReversed += URL.charAt(i);
  }
  let id = "";
  for (let i = idReversed.length; i >= 0; i--) {
    id += idReversed.charAt(i);
  }

  useEffect(() => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      Authorization: JSON.parse(Authorization),
    });

    fetch("https://4700-140-0-18-112.ngrok.io/posts/" + id, {
      method: "GET",
      mode: "cors",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setList(res.post.Post);
        setAnswer(res.post.Answer);
        setRating(res.post.Rating);
        setCategory(res.post.Category.Name);
      });
  }, []);

  function giveFeedback(){
    let item = { content };
    fetch("https://4700-140-0-18-112.ngrok.io/posts/" + id + "/answerAuth", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": JSON.parse(Authorization),
      },
      body: JSON.stringify(item)
    })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })
}

  return (
    <div>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="p-5 w-75">
          <h2 className="mb-3">{list.title}</h2>
          <div className="d-flex flex-row mb-3">
          <div
          className="likes rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#5567C9" }}
        >
          <img src={HeartLogo} alt="likes" />
          <span className="mx-2">{rating}/5</span>
        </div>
          <div
          className="category rounded-pill text-white p-2 me-2"
          style={{ backgroundColor: "#5567C9" }}
        >
          <span>{category}</span>
        </div>
          </div>
          <Card className="color-dark text-white p-5 mb d-flex align-items-center">
            <p>{list.content}</p>
            <div className="height-500 w-100 overflow-auto">
            {
                Answer.map((answer) => (
                    <Card className="bg-white p-2 w-100 mb-3">
                    <Card className="color-primary p-3 w-100">
                        {/* <p>{answer.Content}</p> */}
                        <p>{answer.Content}</p>
                    </Card>
                </Card>
                ))
            }
            </div>
            {isLoggedIn ? (
                <>
                 <Form.Group className="d-flex flex-column w-100 h-75 mt-4" controlId="title">
                 <FormControl
                   className="form-title rounded w-100 mb-3"
                   placeholder="give us your feedback"
                   aria-label="Dollar amount (with dot and two decimal places)"
                   onChange={(e) => setContent(e.target.value)}
                   style={{height: "100px"}}
                 />
               </Form.Group>
              <Button onClick={() => {
                  giveFeedback();
                  window.location.reload();
              }} className="button-primary btn text-white">Submit</Button>
              </>
            ) : (
              <Button className="btn btn-danger text-white d-none">Logiin first</Button>
            )}

            {/* <FeedbackButton/> */}
          </Card>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default AnswerQuestion;
