import Button from "@restart/ui/esm/Button";
import { useEffect } from "react";
import "../../../global/GlobalStyle.css";
import { isLoggedIn } from "../../../data/UseAuth";
import { useNavigate } from "react-router";

function FeedbackButton(){
    const navigate = useNavigate();

    useEffect(() => {
        const feedbackButton = document.querySelector(".feedbackButton");
        if(isLoggedIn){
            feedbackButton.addEventListener("click", function(){
                navigate("/homepage/questiondetail/1/feedback")
            });
        } else {
            feedbackButton.addEventListener("click", function(){
                navigate("/login");
                alert("You have to log in to use this feature");
            });
        }
    });

    return(
        <div>
            <Button className="feedbackButton btn text-white button-primary">Submit</Button>
        </div>
    );
}

export default FeedbackButton;