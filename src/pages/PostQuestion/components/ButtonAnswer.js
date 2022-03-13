import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../../../data/UseAuth";

function ButtonPost() {
  const navigate = useNavigate();

  useEffect(() => {
    let answerQuestion = document.querySelector(".answerquestion");
    
    if (isLoggedIn) {
        answerQuestion.addEventListener("click", function () {
          navigate("/homepage/answerquestion");
        });
    } else {
      answerQuestion.addEventListener("click", function () {
        navigate("/login");
      });
    }
  });

  return (
    <Button className="answerquestion btn button-primary w-50 mx-2 shadow text-white">
      Answer a Question
    </Button>
  );
}

export default ButtonPost;
