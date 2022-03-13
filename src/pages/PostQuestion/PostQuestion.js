import { useState } from "react";
import { Card, Form, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router";
import "../../global/GlobalStyle.css";
import HomeNav from "../HomePage/components/HomeNav";
import Sidebar from "../HomePage/components/Sidebar";
import FetchPostQuestion from "./components/FetchPostQuestion";
import "./style/PostQuestion.css";

function PostQuestion() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [id_category, setCategory] = useState();
  // const [title, setTitle] = useState();
  const navigate = useNavigate();
  const item = { title, id_category, content };

  function handleSubmit(e) {
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
              <select
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
                style={{padding : "10px"}}
                className="mb-3"
                onChange={(e) => {
                    if(e.target.value === "Other"){
                      setCategory(1);
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Lanjut"){
                      setCategory(2);
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Dasar"){
                      setCategory(3);
                      console.log(e.target.value);
                    } else if(e.target.value === "Sistem Basis Data"){
                      setCategory(4);
                      console.log(e.target.value);
                    } else if(e.target.value === "Jaringan"){
                      setCategory(5);
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Web"){
                      setCategory(6);
                      console.log(e.target.value);
                    } else if(e.target.value === "Pemrograman Mobile"){
                      setCategory(7);
                      console.log(e.target.value);
                    } else if(e.target.value === "Java"){
                      setCategory(8);
                      console.log(e.target.value);
                    } else if(e.target.value === "C++"){
                      setCategory(9);
                      console.log(e.target.value);
                    } else if(e.target.value === "Javascript"){
                      setCategory(10);
                      console.log(e.target.value);
                    }
                }}
              >
                <option href="#">Other</option>
                <option href="#">Pemrograman Lanjut</option>
                <option href="#">Pemrograman Dasar</option>
                <option href="#">Sistem Basis Data</option>
                <option href="#">Jaringan</option>
                <option href="#">Pemrograman Web</option>
                <option href="#">Pemrograman Mobile</option>
                <option href="#">Java</option>
                <option href="#">C++</option>
                <option href="#">Javascript</option>
              </select>
            </Form.Group>
            {/* <FormControl className="form-message rounded w-100" placeholder="Category" aria-label="Dollar amount (with dot and two decimal places)" /> */}
            <Form.Group className="d-flex flex-column" controlId="message">
              <FormControl
                className="form-message rounded overflow-auto w-100 mb-3"
                placeholder="Category"
                aria-label="Dollar amount (with dot and two decimal places)"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              className="button-primary w-100 align-self-end"
            >
              Submit
            </Button>
          </Card>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default PostQuestion;
