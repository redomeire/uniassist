import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { isLoggedIn } from "../../../data/UseAuth";

function ButtonPost() {
  const navigate = useNavigate();

  useEffect(() => {
    let postquestion = document.querySelector(".postquestion");
    if (isLoggedIn) {
        postquestion.addEventListener("click", function () {
        navigate("/homepage/postquestion");
      });
    } else {
        postquestion.addEventListener("click", function () {
            navigate("/login");
        });
    }
  });

  return (
    <Button className="postquestion btn button-primary w-50 mx-2 shadow text-white">
      Post a question
    </Button>
  );
}

export default ButtonPost;
