import { useState } from "react";
import { Card, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import "../../global/GlobalStyle.css";
import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import FetchPostQuestion from "./components/FetchPostQuestion";
import "./style/PostQuestion.css";

function PostQuestion() {
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  // const [title, setTitle] = useState();
  const navigate = useNavigate();
  const item = { title, category };

  function handleSubmit(e){
    e.preventDefault();
    FetchPostQuestion(item);
    navigate("/homepage/myquestion");
  }

  return (
    <>
      <HomeNav />
      <div className="d-flex flex-row">
        <div className="d-flex flex-column p-4 w-75">
          <h2 className="fw-bold mb-5">Question Form</h2>
          <Card className="color-dark p-4">
            <Form.Group className="d-flex flex-column" controlId="title">
              <FormControl
                className="form-title rounded w-100 mb-3"
                placeholder="Title"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="d-flex flex-column" controlId="category">
              <FormControl
                className="form-category rounded w-100 mb-3"
                placeholder="Category"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {/* <FormControl className="form-message rounded w-100" placeholder="Category" aria-label="Dollar amount (with dot and two decimal places)" /> */}
            <Form.Group className="d-flex flex-column" controlId="message">
              <FormControl
                className="form-message rounded overflow-auto w-100 mb-3"
                placeholder="Category"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
            </Form.Group>
            <Button onClick={handleSubmit} className="button-primary w-100 align-self-end">Submit</Button>
          </Card>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default PostQuestion;
