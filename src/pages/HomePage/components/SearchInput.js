import { createContext, useEffect, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import SearchButton from "../../../images/search-logo.svg";
export let SearchInputResult = "";

function SearchInput(){
  const Authorization = localStorage.getItem("Authorization");
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);
  function getSearchValue(){
    fetch(`https://4700-140-0-18-112.ngrok.io/search?q=${userInput}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type" : "application/json",
          "Accept" : "application/json",
          "Authorization" : JSON.parse(Authorization),
        }
    })

    .then((res) => res.json())
    .then((res) => {
      navigate("/homepage/answerquestion/searchresult")
      setSearchResultData(res.Post);
      console.log("Ini hasil search : " + res.Post);
    });
  }

  useEffect(() => {
    
  }, [])

 

    return(
            <Form className="d-flex w-50 mx-auto">
            <FormControl
              type="search"
              placeholder="Search questions, event, etc"
              className=""
              style={{borderRadius: "50rem 0 0 50rem"}}
              aria-label="Search"
              onChange={(e) => setUserInput(e.target.value)}
            />
            <Button onClick={getSearchValue} className="border-0 bg-white d-flex justify-content-center align-items-center" type="submit" style={{borderRadius: "0 50rem 50rem 0"}}>
              <img src={SearchButton} alt="search" width="20"/>
            </Button>
          </Form>
    );
}

export default SearchInput;